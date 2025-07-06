import { ColorOptions as colorOptions } from "../constants/constants";

interface ColorOptionsProps {
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  setShowColorPicker: React.Dispatch<React.SetStateAction<boolean>>;
}
const ColorOptions = ({
  selectedColor,
  setSelectedColor,
  setShowColorPicker,
}: ColorOptionsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {colorOptions.map((color) => (
        <div
          key={color.value}
          onClick={() => {
            setSelectedColor(color.value);
            setShowColorPicker(false);
          }}
          className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
            selectedColor === color.value
              ? "border-white scale-110"
              : "border-transparent"
          } ${color.bg}`}
          title={color.name}
        />
      ))}
    </div>
  );
};

export default ColorOptions;
