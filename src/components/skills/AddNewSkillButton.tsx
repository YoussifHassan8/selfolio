import { FaPlus } from "react-icons/fa";
interface AddNewSkillButtonProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddNewSkillButton = ({ setShowAddModal }: AddNewSkillButtonProps) => {
  return (
    <button
      onClick={() => setShowAddModal(true)}
      className="group relative flex flex-col items-center justify-center p-6 bg-[#1a191e] rounded-lg 
  transition-all duration-300 hover:bg-gray-700 hover:transform hover:scale-105 
  shadow-[0_0_20px_transparent] hover:shadow-[0_0_20px] cursor-pointer"
    >
      <FaPlus className="text-4xl mb-4 text-blue-500 transition-all duration-300 group-hover:scale-125" />
      <span className="text-white font-medium text-lg">Add Skill</span>
    </button>
  );
};

export default AddNewSkillButton;
