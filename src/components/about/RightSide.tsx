import Tags from "../ui/Tags";
import Title from "../ui/Title";
import Slider from "../ui/Slider";
import Description from "../ui/Description";
import { FaArrowRight } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "../types/about";
interface RightSideProps {
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
  resumeGradient: string;
  setLinkInput: (input: string) => void;
  setEditingLink: (id: string) => void;
  setShowLinkDialog: (show: boolean) => void;
  setShowResumeDialog: (show: boolean) => void;
  resumeColor1: string;
  resumeLink: string;
}

const RightSide = ({
  links,
  setLinks,
  resumeGradient,
  setLinkInput,
  setEditingLink,
  setShowLinkDialog,
  setShowResumeDialog,
  resumeColor1,
  resumeLink,
}: RightSideProps) => {
  const handleDelete = (id: string) => {
    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.id === id ? { ...link, preview: false } : link
      )
    );
  };

  const handleAdd = (id: string) => {
    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.id === id ? { ...link, preview: true } : link
      )
    );
  };

  const handleLink = (id: string) => {
    const currentLink = links.find((link) => link.id === id)?.link || "";
    setLinkInput(currentLink);
    setEditingLink(id);
    setShowLinkDialog(true);
  };
  const handleEditResume = () => {
    setShowResumeDialog(true);
  };
  return (
    <>
      <Tags />
      <Title />
      <Slider />
      <Description />
      <div className="flex items-center gap-4 mt-8">
        <div className="relative group">
          <button
            className="relative px-8 py-4 font-bold rounded-lg transition-all duration-300 group-hover:scale-105 cursor-pointer"
            style={{
              background: resumeGradient,
              boxShadow: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 25px -5px ${resumeColor1}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2"
            >
              <span className="bg-gradient-to-r from-white to-[#d4fff1] bg-clip-text text-transparent">
                View My Resume
              </span>
              <FaArrowRight />
            </a>
          </button>
          <FaRegEdit
            className="absolute top-[-20px] right-[-20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-white/60 hover:text-white"
            fontSize={20}
            onClick={handleEditResume}
          />
        </div>

        <ul className="flex items-center gap-4 ml-2">
          {links.map(({ icon: Icon, link, preview, id }) => (
            <li
              className={`relative p-2 rounded-full hover:bg-white/10 transition-all duration-300 group ${
                preview ? "text-white" : "text-white/10"
              } `}
              key={id}
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <Icon
                  fontSize={32}
                  className="drop-shadow-lg transition-all duration-300"
                />
              </a>
              {preview ? (
                <>
                  <MdDelete
                    className="absolute right-[-12px] top-[-12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-white/60 hover:text-red-500"
                    fontSize={20}
                    onClick={() => handleDelete(id)}
                  />
                  <FaRegEdit
                    className="absolute left-[-12px] top-[-12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-white/60 hover:text-green-500"
                    fontSize={20}
                    onClick={() => handleLink(id)}
                  />
                </>
              ) : (
                <IoIosAddCircle
                  className="absolute right-[-12px] top-[-12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-white/60 hover:text-green-500"
                  fontSize={20}
                  onClick={() => handleAdd(id)}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RightSide;
