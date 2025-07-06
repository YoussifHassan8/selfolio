import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import TechStack from "../ui/TechStack";
import { tech } from "../types/projects";
import TechStackColors from "./TechStackColors";
import TechStackName from "./TechStackName";

interface ProjectTechStackProps {
  tech: Array<{ name: string; color: string }>;
  isEditing: boolean;
  onTechChange: (techArray: tech[]) => void;
}

const ProjectTechStack = ({
  tech,
  isEditing,
  onTechChange,
}: ProjectTechStackProps) => {
  const [editedTech, setEditedTech] = useState(tech);

  const [selectedColor, setSelectedColor] = useState("text-blue-400");

  const removeTech = (index: number) => {
    const updatedTech = [...editedTech];
    updatedTech.splice(index, 1);
    setEditedTech(updatedTech);
    onTechChange(updatedTech);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {(isEditing ? editedTech : tech).map(({ name, color }, techIndex) => (
        <div key={techIndex} className="flex items-center">
          <TechStack color={color}>{name}</TechStack>
          {isEditing && (
            <button
              onClick={() => removeTech(techIndex)}
              className="ml-1 text-red-500 hover:text-red-700 cursor-pointer"
            >
              <FaTrash className="w-3 h-3" />
            </button>
          )}
        </div>
      ))}

      {isEditing && (
        <div className="flex flex-col gap-2 mt-2 w-full">
          <TechStackName
            selectedColor={selectedColor}
            editedTech={editedTech}
            setEditedTech={setEditedTech}
            onTechChange={onTechChange}
          />

          <TechStackColors
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectTechStack;
