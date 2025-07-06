import { useState } from "react";
import { ExperienceItem } from "./types";
import IconsSelector from "./IconsSelector";

interface ExperienceEditorProps {
  item: ExperienceItem;
  onSave: (item: ExperienceItem) => void;
  onCancel: () => void;
  isLargeScreen: boolean;
}

const ExperienceEditor = ({
  item,
  onSave,
  onCancel,
  isLargeScreen,
}: ExperienceEditorProps) => {
  const [editedItem, setEditedItem] = useState<ExperienceItem>(item);
  const [showIconSelector, setShowIconSelector] = useState(false);

  const handleChange = (
    field: keyof ExperienceItem,
    value: string | boolean
  ) => {
    setEditedItem((prev: ExperienceItem) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedItem);
  };

  return (
    <div className={`relative ${isLargeScreen ? "ml-[620px]" : "ml-[60px]"}`}>
      <div className="bg-[#2a292f] p-4 rounded-2xl">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Date
            </label>
            <input
              type="text"
              value={editedItem.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className="w-full bg-[#1a191e] text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Title
            </label>
            <input
              type="text"
              value={editedItem.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="w-full bg-[#1a191e] text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Foundation
            </label>
            <input
              type="text"
              value={editedItem.foundation}
              onChange={(e) => handleChange("foundation", e.target.value)}
              className="w-full bg-[#1a191e] text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Description
            </label>
            <textarea
              value={editedItem.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className="w-full bg-[#1a191e] text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Icon
            </label>
            <button
              onClick={() => setShowIconSelector(true)}
              className="w-full bg-[#1a191e] text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between"
            >
              <span>{editedItem.iconName}</span>
              <span>▼</span>
            </button>
            {showIconSelector && (
              <IconsSelector
                onSelect={(iconName: string) =>
                  handleChange("iconName", iconName)
                }
                onClose={() => setShowIconSelector(false)}
              />
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Card Position
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="position"
                  value="left"
                  checked={editedItem.left === false}
                  onChange={() => handleChange("left", false)}
                  className="w-4 h-4 text-blue-500 bg-[#1a191e] border-gray-600 focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-gray-300">Left</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="position"
                  value="right"
                  checked={editedItem.left === true}
                  onChange={() => handleChange("left", true)}
                  className="w-4 h-4 text-blue-500 bg-[#1a191e] border-gray-600 focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-gray-300">Right</span>
              </label>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceEditor;
