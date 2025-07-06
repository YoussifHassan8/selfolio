import { useState, useRef, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";

interface AvailableForHireProps {
  setAvailability: React.Dispatch<React.SetStateAction<boolean>>;
}

const AvailableForHire = ({ setAvailability }: AvailableForHireProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="absolute z-50 -left-4 -bottom-10 flex items-center gap-2 px-5 py-3 bg-black/80 rounded-lg group-hover:scale-110 transition-all duration-500">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute flex h-full w-full rounded-full bg-emerald-400"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent font-semibold text-sm tracking-wide">
        AVAILABLE FOR HIRE
      </span>

      <div className="relative" ref={dropdownRef}>
        <FaRegEdit
          className="cursor-pointer text-gray-300 hover:text-white transition-colors"
          onClick={() => setShowDropdown(!showDropdown)}
        />

        {showDropdown && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-black/50 rounded-lg shadow-lg">
            <div
              className="px-4 py-3 text-sm text-gray-300 hover:bg-white/10 cursor-pointer rounded-lg"
              onClick={() => {
                setAvailability((prev) => {
                  return !prev;
                });
                setShowDropdown(false);
              }}
            >
              Change availability
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableForHire;
