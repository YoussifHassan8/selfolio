import { FaEdit, FaCheck } from "react-icons/fa";
interface EditSkillsButtonProps {
  editMode: boolean;
  onToggleEdit: () => void;
}
const EditSkillsButton = ({
  editMode,
  onToggleEdit,
}: EditSkillsButtonProps) => {
  return (
    <button
      onClick={onToggleEdit}
      className={`cursor-pointer px-4 py-2 ml-auto rounded-lg flex items-center gap-2 ${
        editMode
          ? "bg-green-600 hover:bg-green-700"
          : "bg-blue-600 hover:bg-blue-700"
      } text-white transition-colors`}
    >
      {editMode ? (
        <>
          <FaCheck /> Done Editing
        </>
      ) : (
        <>
          <FaEdit /> Edit Skills
        </>
      )}
    </button>
  );
};

export default EditSkillsButton;
