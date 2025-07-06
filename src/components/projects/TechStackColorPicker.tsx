import { HexColorPicker } from "react-colorful";

interface TechStackColorPicker {
  customColor: string;
  setCustomColor: React.Dispatch<React.SetStateAction<string>>;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  setShowColorPicker: React.Dispatch<React.SetStateAction<boolean>>;
}

const TechStackColorPicker = ({
  customColor,
  setCustomColor,
  setSelectedColor,
  setShowColorPicker,
}: TechStackColorPicker) => {
  const hexToTailwindTextClass = (hex: string) => {
    return `text-[${hex}]`;
  };
  return (
    <div className="mt-2 p-3 bg-gray-800 rounded-lg shadow-lg z-10">
      <HexColorPicker
        color={customColor}
        onChange={(color) => {
          setCustomColor(color);
          setSelectedColor(hexToTailwindTextClass(color));
        }}
      />
      <div className="flex justify-between mt-2">
        <input
          type="text"
          value={customColor}
          onChange={(e) => {
            setCustomColor(e.target.value);
            setSelectedColor(hexToTailwindTextClass(e.target.value));
          }}
          className="w-full p-1 bg-gray-700 text-white rounded text-sm"
        />
        <button
          onClick={() => setShowColorPicker(false)}
          className="ml-2 px-2 py-1 bg-blue-500 text-white rounded text-sm"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default TechStackColorPicker;
