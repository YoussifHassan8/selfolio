import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";
import { IconOption } from "./types";
import { useEffect, useRef } from "react";

const IconOptions: IconOption[] = [
  { name: "Education", component: FaGraduationCap, label: "Education" },
  { name: "Development", component: FaCode, label: "Development" },
  { name: "Programming", component: FaLaptopCode, label: "Programming" },
];

interface IconsSelectorProps {
  onSelect: (iconName: string) => void;
  onClose: () => void;
}

const IconsSelector = ({ onSelect, onClose }: IconsSelectorProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={dropdownRef}
      className="absolute z-50 mt-2 w-48 bg-[#2a292f] rounded-lg shadow-lg"
    >
      <div className="py-1">
        {IconOptions.map((icon) => (
          <button
            key={icon.name}
            onClick={() => {
              onSelect(icon.name);
              onClose();
            }}
            className="w-full flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-[#1a191e] hover:text-white transition-colors cursor-pointer"
          >
            <icon.component className="w-4 h-4 mr-2 text-blue-500" />
            <span>{icon.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default IconsSelector;
