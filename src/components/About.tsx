import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useContext, useEffect, useState } from "react";
import LeftSide from "./about/LeftSide";
import RightSide from "./about/RightSide";
import EditingColorModal from "./about/EditingColorModal";
import LinkDialog from "./about/LinkDialog";
import ResumeDialog from "./about/ResumeDialog";
import {
  LinkDialogState,
  ResumeDialogState,
  Link,
  ResumeState,
} from "./types/about";
import { AboutContext } from "./about/context/aboutContext";

const defaultResumeState: ResumeState = {
  resumeLink:
    "https://drive.google.com/file/d/1VeDQ6oTdWYfSiEk0QD01NPNGWobBe_DG/view",
  resumeGradient: "linear-gradient(90deg, #2A7B9B, #57C785)",
  resumeOriginalGradient: "linear-gradient(90deg, #2A7B9B, #57C785)",
  resumeColor1: "#2A7B9B",
  resumeColor2: "#57C785",
};

const About = () => {
  const linksContext = useContext(AboutContext);
  const links: Link[] = linksContext?.links || [];
  const setLinks = linksContext?.setLinks || (() => {});
  const resumeState: ResumeState =
    linksContext?.resumeState || defaultResumeState;
  const setResumeState = linksContext?.setResumeState || (() => {});
  const [linkDialogState, setLinkDialogState] = useState<LinkDialogState>({
    editingLink: "",
    linkInput: "",
    showDialog: false,
  });

  const [resumeDialogState, setResumeDialogState] = useState<ResumeDialogState>(
    {
      showDialog: false,
      isEditingColors: false,
    }
  );

  const leftControls = useAnimation();
  const [leftRef, leftInView] = useInView({ triggerOnce: false });
  const rightControls = useAnimation();
  const [rightRef, rightInView] = useInView({ triggerOnce: false });

  const getColorsFromGradient = (grad: string) => {
    const colorRegex = /#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/g;
    const matches = grad.match(colorRegex);
    return matches || [resumeState.resumeColor1, resumeState.resumeColor2];
  };

  useEffect(() => {
    if (resumeDialogState.isEditingColors && setResumeState) {
      setResumeState((prev) => ({
        ...prev,
        resumeOriginalGradient: prev.resumeGradient,
      }));
      const colors = getColorsFromGradient(resumeState.resumeGradient);
      setResumeState((prev) => ({
        ...prev,
        resumeColor1: colors[0],
        resumeColor2: colors[1] || colors[0],
      }));
    }
  }, [resumeDialogState.isEditingColors, setResumeState]);

  useEffect(() => {
    if (resumeDialogState.isEditingColors && setResumeState) {
      setResumeState((prev) => ({
        ...prev,
        resumeGradient: `linear-gradient(90deg, ${prev.resumeColor1}, ${prev.resumeColor2})`,
      }));
    }
  }, [
    resumeState.resumeColor1,
    resumeState.resumeColor2,
    resumeDialogState.isEditingColors,
    setResumeState,
  ]);

  useEffect(() => {
    if (leftInView) {
      leftControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      leftControls.start({
        x: -100,
        opacity: 0,
        transition: { duration: 0.3 },
      });
    }
  }, [leftInView, leftControls]);

  useEffect(() => {
    if (rightInView) {
      rightControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      rightControls.start({
        x: 100,
        opacity: 0,
        transition: { duration: 0.3 },
      });
    }
  }, [rightInView, rightControls]);

  const saveLinkChange = () => {
    if (linkDialogState.editingLink && setLinks) {
      setLinks((prevLinks) =>
        prevLinks.map((link) =>
          link.id === linkDialogState.editingLink
            ? { ...link, link: linkDialogState.linkInput }
            : link
        )
      );

      setLinkDialogState({
        editingLink: "",
        linkInput: "",
        showDialog: false,
      });
    }
  };

  const cancelLinkEdit = () => {
    setLinkDialogState({
      editingLink: "",
      linkInput: "",
      showDialog: false,
    });
  };

  const saveResumeChanges = () => {
    setResumeDialogState((prev) => ({
      ...prev,
      showDialog: false,
    }));
  };

  const cancelResumeEdit = () => {
    setResumeDialogState((prev) => ({
      ...prev,
      showDialog: false,
    }));
  };

  return (
    <section
      id="about"
      className="flex flex-wrap justify-center gap-28 py-20 relative"
    >
      <motion.div
        ref={leftRef}
        className="group relative w-fit h-fit p-1"
        initial={{ x: -100, opacity: 0 }}
        animate={leftControls}
      >
        <LeftSide />
      </motion.div>

      <motion.div
        ref={rightRef}
        className="space-y-6 max-w-xl"
        initial={{ x: 100, opacity: 0 }}
        animate={rightControls}
      >
        <RightSide
          links={links}
          setLinks={setLinks}
          resumeGradient={resumeState.resumeGradient}
          setLinkInput={(input) =>
            setLinkDialogState((prev) => ({ ...prev, linkInput: input }))
          }
          setEditingLink={(id) =>
            setLinkDialogState((prev) => ({ ...prev, editingLink: id }))
          }
          setShowLinkDialog={(show) =>
            setLinkDialogState((prev) => ({ ...prev, showDialog: show }))
          }
          setShowResumeDialog={(show) =>
            setResumeDialogState((prev) => ({ ...prev, showDialog: show }))
          }
          resumeColor1={resumeState.resumeColor1}
          resumeLink={resumeState.resumeLink}
        />
      </motion.div>

      {linkDialogState.showDialog && (
        <LinkDialog
          linkInput={linkDialogState.linkInput}
          setLinkInput={(input) =>
            setLinkDialogState((prev) => ({ ...prev, linkInput: input }))
          }
          onSave={saveLinkChange}
          onCancel={cancelLinkEdit}
        />
      )}

      {resumeDialogState.showDialog && (
        <ResumeDialog
          resumeLink={resumeState.resumeLink}
          setResumeLink={(link) =>
            setResumeState &&
            setResumeState((prev) => ({ ...prev, resumeLink: link }))
          }
          onEditColors={() =>
            setResumeDialogState((prev) => ({ ...prev, isEditingColors: true }))
          }
          onSave={saveResumeChanges}
          onCancel={cancelResumeEdit}
        />
      )}

      {resumeDialogState.isEditingColors && (
        <EditingColorModal
          originalResumeGradient={resumeState.resumeOriginalGradient}
          resumeColor1={resumeState.resumeColor1}
          setResumeColor1={(color) =>
            setResumeState &&
            setResumeState((prev) => ({ ...prev, resumeColor1: color }))
          }
          resumeColor2={resumeState.resumeColor2}
          setResumeColor2={(color) =>
            setResumeState &&
            setResumeState((prev) => ({ ...prev, resumeColor2: color }))
          }
          resumeGradient={resumeState.resumeGradient}
          setResumeGradient={(gradient) =>
            setResumeState &&
            setResumeState((prev) => ({ ...prev, resumeGradient: gradient }))
          }
          setIsEditingResumeColors={(isEditing) =>
            setResumeDialogState((prev) => ({
              ...prev,
              isEditingColors: isEditing,
            }))
          }
        />
      )}
    </section>
  );
};

export default About;
