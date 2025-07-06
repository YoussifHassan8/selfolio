import { FaTrash, FaCheck, FaTimes, FaRegEdit } from "react-icons/fa";
import { project, tech } from "../types/projects";

interface ProjectsEditingIconsProps {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  description: string;
  imgSrc: string;
  liveDemo: string;
  repo: string;
  tech: tech[];
  editedTitle: string;
  editedDescription: string;
  editedImgSrc: string;
  editedLiveDemo: string;
  editedRepo: string;
  editedTech: tech[];
  setEditedTitle: React.Dispatch<React.SetStateAction<string>>;
  setEditedDescription: React.Dispatch<React.SetStateAction<string>>;
  setEditedImgSrc: React.Dispatch<React.SetStateAction<string>>;
  setEditedLiveDemo: React.Dispatch<React.SetStateAction<string>>;
  setEditedRepo: React.Dispatch<React.SetStateAction<string>>;
  setEditedTech: React.Dispatch<React.SetStateAction<tech[]>>;
  onUpdate?: (project: project) => void;
  onDelete: () => void;
}

const ProjectsEditingIcons = ({
  isEditing,
  setIsEditing,
  title,
  description,
  imgSrc,
  liveDemo,
  repo,
  tech,
  editedTitle,
  editedDescription,
  editedImgSrc,
  editedLiveDemo,
  editedRepo,
  editedTech,
  setEditedTitle,
  setEditedDescription,
  setEditedImgSrc,
  setEditedLiveDemo,
  setEditedRepo,
  setEditedTech,
  onUpdate,
  onDelete,
}: ProjectsEditingIconsProps) => {
  const cancelEdit = () => {
    setEditedTitle(title);
    setEditedDescription(description);
    setEditedImgSrc(imgSrc);
    setEditedLiveDemo(liveDemo);
    setEditedRepo(repo);
    setEditedTech(tech);
    setIsEditing(false);
  };

  const handleDeleteProject = () => {
    onDelete();
  };

  const toggleEdit = () => {
    if (isEditing) {
      if (onUpdate) {
        onUpdate({
          title: editedTitle,
          description: editedDescription,
          tech: editedTech,
          imgSrc: editedImgSrc,
          liveDemo: editedLiveDemo,
          repo: editedRepo,
        });
      }
    }
    setIsEditing(!isEditing);
  };

  return (
    <>
      {!isEditing && (
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <button
            onClick={handleDeleteProject}
            className="bg-red-500 p-2 rounded-full text-white hover:bg-red-600 transition-colors cursor-pointer"
          >
            <FaTrash className="w-4 h-4" />
          </button>
          <button
            onClick={toggleEdit}
            className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600 transition-colors cursor-pointer"
          >
            <FaRegEdit className="w-4 h-4" />
          </button>
        </div>
      )}

      {isEditing && (
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <button
            onClick={cancelEdit}
            className="bg-red-500 p-2 rounded-full text-white hover:bg-red-600 transition-colors cursor-pointer"
          >
            <FaTimes className="w-4 h-4" />
          </button>
          <button
            onClick={toggleEdit}
            className="bg-green-500 p-2 rounded-full text-white hover:bg-green-600 transition-colors cursor-pointer"
          >
            <FaCheck className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectsEditingIcons;
