import { useState } from "react";
import TechStackColorPicker from "./TechStackColorPicker";
import ColorOptions from "./ColorOptions";
interface TechStackColorsProps {
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}
const TechStackColors = ({
  selectedColor,
  setSelectedColor,
}: TechStackColorsProps) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [customColor, setCustomColor] = useState("#3b82f6");
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      <p className="w-full text-sm text-gray-400 mb-1">Select color:</p>

      <ColorOptions
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        setShowColorPicker={setShowColorPicker}
      />

      <div className="w-full mt-3 flex flex-col">
        <button
          onClick={() => setShowColorPicker(!showColorPicker)}
          className="flex items-center gap-2 px-2 py-1 bg-gray-700 rounded text-sm hover:bg-gray-600 transition-colors cursor-pointer"
        >
          <div
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: customColor }}
          ></div>
          <span>Custom Color</span>
        </button>

        {showColorPicker && (
          <TechStackColorPicker
            customColor={customColor}
            setCustomColor={setCustomColor}
            setSelectedColor={setSelectedColor}
            setShowColorPicker={setShowColorPicker}
          />
        )}
      </div>
    </div>
  );
};

export default TechStackColors;
