import { FaTrash, FaRegEdit } from "react-icons/fa";

interface ExperienceActionsProps {
  onEdit: () => void;
  onDelete: () => void;
  position: "left" | "right";
}

const ExperienceActions = ({
  onEdit,
  onDelete,
  position,
}: ExperienceActionsProps) => {
  return (
    <div
      className={`absolute top-1 z-20 flex gap-2 ${
        position === "left" ? "right-[120px]" : "left-[110px]"
      }`}
    >
      <button
        onClick={onDelete}
        className="bg-red-500 p-2 rounded-full text-white hover:bg-red-600 transition-colors cursor-pointer"
      >
        <FaTrash className="w-3 h-3" />
      </button>
      <button
        onClick={onEdit}
        className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600 transition-colors cursor-pointer"
      >
        <FaRegEdit className="w-3 h-3" />
      </button>
    </div>
  );
};

export default ExperienceActions;
