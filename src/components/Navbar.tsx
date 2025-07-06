import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import Modal from "./ui/Modal";
import { NavBarContent as content } from "./constants/constants";
interface SectionsState {
  About: boolean;
  Projects: boolean;
  Skills: boolean;
  Experience: boolean;
  Contact: boolean;
}

interface NavbarProps {
  setSections: React.Dispatch<React.SetStateAction<SectionsState>>;
  sections: SectionsState;
}

const Navbar = ({ sections, setSections }: NavbarProps) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  type SectionKey = keyof SectionsState;

  const addSection = (section: string) => {
    setSections((prev) => ({
      ...prev,
      [section]: true,
    }));
  };
  return (
    <>
      <nav>
        <ul className="fixed top-4 left-0 right-0 z-50 rounded-full bg-[#211f2a] max-w-[600px] mx-auto flex items-center justify-evenly py-4 flex-wrap">
          {content.map((item) => {
            const key = item as SectionKey;
            return (
              <li key={key} className="relative group">
                <a
                  href={`#${key.toLowerCase()}`}
                  className={`text-lg font-medium group-hover:text-white transition-all duration-300 ${
                    sections[key] ? "text-white/60" : "text-white/10"
                  }`}
                >
                  {key}
                </a>
                {sections[key] ? (
                  <MdDelete
                    className="absolute right-[-16px] top-[-10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-white/60 hover:text-red-500"
                    onClick={() => setDeleteConfirmation(key)}
                    fontSize={20}
                  />
                ) : (
                  <IoIosAddCircle
                    className="absolute right-[-16px] top-[-10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-white/60 hover:text-green-500"
                    onClick={() => addSection(key)}
                    fontSize={20}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {deleteConfirmation && (
        <Modal
          deleteConfirmation={deleteConfirmation}
          setDeleteConfirmation={setDeleteConfirmation}
          setSections={setSections}
        />
      )}
    </>
  );
};

export default Navbar;
