import React from "react";

interface ProjectTextProps {
  isEditing: boolean;
  editedTitle: string;
  setEditedTitle: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  description: string;
  editedDescription: string;
  setEditedDescription: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectText = ({
  isEditing,
  editedTitle,
  setEditedTitle,
  title,
  description,
  editedDescription,
  setEditedDescription,
}: ProjectTextProps) => {
  return (
    <>
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="text-2xl font-bold bg-transparent border-b border-white/20 pb-1 focus:outline-none focus:border-blue-500"
        />
      ) : (
        <h3 className="text-2xl font-bold">{title}</h3>
      )}

      {isEditing ? (
        <textarea
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          className="text-gray-300 leading-relaxed bg-transparent border border-white/20 rounded p-2 min-h-[100px] focus:outline-none focus:border-blue-500"
        />
      ) : (
        <p className="text-gray-300 leading-relaxed">{description}</p>
      )}
    </>
  );
};

export default ProjectText;
