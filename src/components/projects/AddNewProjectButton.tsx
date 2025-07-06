import { FaPlus } from "react-icons/fa";
import { project } from "../types/projects";
import { NewProjectTemp } from "../constants/constants";
interface AddNewProjectButtonProps {
  projects: project[];
  setProjects: React.Dispatch<React.SetStateAction<project[]>>;
}
const AddNewProjectButton = ({
  projects,
  setProjects,
}: AddNewProjectButtonProps) => {
  const newProjectTemplate = NewProjectTemp;
  const addNewProject = () => {
    setProjects([...projects, { ...newProjectTemplate }]);
  };
  return (
    <div className="relative group h-full flex items-center justify-center">
      <button
        onClick={addNewProject}
        className="w-full h-full min-h-[300px] p-[2px] bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl group transform transition-all duration-500 hover:-translate-y-2 cursor-pointer"
      >
        <div className="bg-[#1a191e] rounded-3xl h-full w-full flex flex-col items-center justify-center p-6">
          <FaPlus className="w-16 h-16 mb-4 text-blue-500" />
          <h3 className="text-2xl font-bold text-center">Add New Project</h3>
          <p className="text-gray-300 text-center mt-2">
            Click to add a new project to your portfolio
          </p>
        </div>
      </button>
    </div>
  );
};

export default AddNewProjectButton;
