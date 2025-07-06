import TitleTwo from "./ui/TitleTwo";
import { GiGraduateCap } from "react-icons/gi";
import ExperienceCardLeft from "./ui/ExperienceCardLeft";
import ExperienceCardRight from "./ui/ExperienceCardRight";
import { useState, useEffect, ReactElement, useContext } from "react";
import { NewExperienceTemplate } from "./constants/constants";
import ExperienceEditor from "./experience/ExperienceEditor";
import DeleteModal from "./experience/DeleteModal";
import AddExperienceButton from "./experience/AddExperienceButton";
import ExperienceActions from "./experience/ExperienceActions";
import { ExperienceItem } from "./experience/types";
import { IconOptions } from "./constants/constants";
import { IconOption } from "./experience/types";
import { experiencesContext } from "./about/context/experiencesContext";

const Experience = () => {
  const experienceContext = useContext(experiencesContext);
  const experienceGradient = experienceContext?.experienceGradient || "";
  const setExperienceGradient =
    experienceContext?.setExperienceGradient || (() => {});
  const experience = experienceContext?.experience || [];
  const setExperience = experienceContext?.setExperience || (() => {});
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const newExperienceTemplate = NewExperienceTemplate;

  const getIconComponent = (iconName: string): ReactElement => {
    const icon = IconOptions.find((icon: IconOption) => icon.name === iconName);
    const IconComponent = icon?.component || GiGraduateCap;
    return <IconComponent fontSize={24} />;
  };

  const addNewExperience = () => {
    setExperience([...experience, { ...newExperienceTemplate }]);
    setEditingIndex(experience.length);
  };

  const updateExperience = (
    index: number,
    updatedExperience: ExperienceItem
  ) => {
    const updatedData = [...experience];
    updatedData[index] = updatedExperience;
    setExperience(updatedData);
  };

  const confirmDelete = (index: number) => {
    setItemToDelete(index);
    setShowDeleteModal(true);
  };

  const deleteExperience = () => {
    if (itemToDelete !== null) {
      const updatedData = [...experience];
      updatedData.splice(itemToDelete, 1);
      setExperience(updatedData);
      setShowDeleteModal(false);
      setItemToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1250);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="experience"
      className="relative my-32 mx-auto max-w-6xl px-4 space-y-6"
    >
      <TitleTwo
        gradient={experienceGradient}
        setGradient={setExperienceGradient}
      >
        My Experience
      </TitleTwo>

      {isLargeScreen ? (
        <>
          <div className="absolute left-1/2 w-1 h-full bg-white/60 transform -translate-x-1/2" />
          <ul className="py-4 space-y-12 relative">
            {experience.map((item, index) => {
              const isEditing = editingIndex === index;
              if (isEditing) {
                return (
                  <ExperienceEditor
                    key={index}
                    item={item}
                    onSave={(updatedItem: ExperienceItem) => {
                      updateExperience(index, updatedItem);
                      setEditingIndex(null);
                    }}
                    onCancel={() => setEditingIndex(null)}
                    isLargeScreen={isLargeScreen}
                  />
                );
              }
              if (item.left === true) {
                return (
                  <div key={index} className="relative">
                    <ExperienceCardLeft
                      date={item.date}
                      title={item.title}
                      foundation={item.foundation}
                      description={item.description}
                      logo={getIconComponent(item.iconName)}
                      small={false}
                    />
                    <ExperienceActions
                      onEdit={() => setEditingIndex(index)}
                      onDelete={() => confirmDelete(index)}
                      position="left"
                    />
                  </div>
                );
              } else {
                return (
                  <div key={index} className="relative">
                    <ExperienceCardRight
                      date={item.date}
                      title={item.title}
                      foundation={item.foundation}
                      description={item.description}
                      logo={getIconComponent(item.iconName)}
                    />
                    <ExperienceActions
                      onEdit={() => setEditingIndex(index)}
                      onDelete={() => confirmDelete(index)}
                      position="right"
                    />
                  </div>
                );
              }
            })}
            <AddExperienceButton
              onClick={addNewExperience}
              isLargeScreen={isLargeScreen}
            />
          </ul>
        </>
      ) : (
        <>
          <div className="absolute w-1 h-full bg-white/60 transform -translate-x-1/2" />
          <ul className="space-y-12">
            {experience.map((item, index) => {
              const isEditing = editingIndex === index;

              if (isEditing) {
                return (
                  <ExperienceEditor
                    key={index}
                    item={item}
                    onSave={(updatedItem: ExperienceItem) => {
                      updateExperience(index, updatedItem);
                      setEditingIndex(null);
                    }}
                    onCancel={() => setEditingIndex(null)}
                    isLargeScreen={isLargeScreen}
                  />
                );
              }

              return (
                <div key={index} className="relative">
                  <ExperienceCardLeft
                    date={item.date}
                    title={item.title}
                    foundation={item.foundation}
                    description={item.description}
                    logo={getIconComponent(item.iconName)}
                    small={true}
                  />
                  <ExperienceActions
                    onEdit={() => setEditingIndex(index)}
                    onDelete={() => confirmDelete(index)}
                    position="left"
                  />
                </div>
              );
            })}

            <AddExperienceButton
              onClick={addNewExperience}
              isLargeScreen={isLargeScreen}
            />
          </ul>
        </>
      )}

      {showDeleteModal && (
        <DeleteModal onConfirm={deleteExperience} onCancel={cancelDelete} />
      )}
    </section>
  );
};

export default Experience;
