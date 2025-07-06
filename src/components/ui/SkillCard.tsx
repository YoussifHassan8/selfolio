import { IconType } from "react-icons";
import { FaTrash } from "react-icons/fa";

interface SkillCardProps {
  icon: IconType;
  name: string;
  color: string;
  index: number;
  isEditing?: boolean;
  onDelete?: (name: string) => void;
}

const SkillCard = ({
  icon: Icon,
  name,
  color,
  index,
  isEditing = false,
  onDelete,
}: SkillCardProps) => {
  return (
    <div
      className={`group relative flex flex-col items-center justify-center p-6 bg-[#1a191e] rounded-lg 
      transition-all duration-300 hover:bg-gray-700 hover:transform hover:scale-105 hover:-translate-y-2
      opacity-0 animate-fade-in-up shadow-[0_0_20px_transparent] hover:shadow-[0_0_20px]`}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {isEditing && (
        <button
          onClick={() => onDelete?.(name)}
          className={`absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full 
            "bg-red-500 hover:bg-red-600 text-white transition-colors z-20 cursor-pointer`}
          aria-label="Remove skill"
        >
          <FaTrash size={12} />
        </button>
      )}

      <div
        className={`text-4xl mb-4 transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-2 
        relative z-10 `}
        style={{ color }}
      >
        <Icon />
      </div>

      <span
        className={`absolute text-white font-medium text-lg bottom-2
        transition-all duration-300 group-hover:bottom-4`}
      >
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
