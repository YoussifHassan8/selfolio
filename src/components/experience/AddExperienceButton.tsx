import { FaPlus } from "react-icons/fa";

interface AddExperienceButtonProps {
  onClick: () => void;
  isLargeScreen: boolean;
}

const AddExperienceButton: React.FC<AddExperienceButtonProps> = ({
  onClick,
  isLargeScreen,
}) => {
  return (
    <div
      className={`flex justify-center mt-6 ${!isLargeScreen && "ml-[60px]"}`}
    >
      <button
        onClick={onClick}
        className={`${
          isLargeScreen ? "w-[380px]" : "w-full"
        } h-[150px] p-[2px] bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer`}
      >
        <div className="bg-[#1a191e] rounded-2xl h-full w-full flex flex-col items-center justify-center p-6">
          <FaPlus className="w-10 h-10 mb-4 text-blue-500" />
          <h3 className="text-xl font-bold text-center">Add New Experience</h3>
        </div>
      </button>
    </div>
  );
};

export default AddExperienceButton;
