import { useState } from "react";
import { tech } from "../types/projects";
interface TechStackNameProps {
  selectedColor: string;
  editedTech: tech[];
  setEditedTech: React.Dispatch<React.SetStateAction<tech[]>>;
  onTechChange: (techArray: tech[]) => void;
}

const TechStackName = ({
  selectedColor,
  editedTech,
  setEditedTech,
  onTechChange,
}: TechStackNameProps) => {
  const [newTechName, setNewTechName] = useState("");

  const addTech = () => {
    if (newTechName.trim()) {
      const colorClass = selectedColor.startsWith("text-[")
        ? selectedColor
        : selectedColor;

      const updatedTech = [
        ...editedTech,
        { name: newTechName, color: colorClass },
      ];
      setEditedTech(updatedTech);
      setNewTechName("");
      onTechChange(updatedTech);
    }
  };
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={newTechName}
        onChange={(e) => setNewTechName(e.target.value)}
        placeholder="Tech name"
        className="flex-1 p-1 bg-gray-800 text-white rounded text-sm"
      />
      <button
        onClick={addTech}
        className="p-1 bg-blue-500 text-white rounded text-sm"
      >
        Add
      </button>
    </div>
  );
};

export default TechStackName;
