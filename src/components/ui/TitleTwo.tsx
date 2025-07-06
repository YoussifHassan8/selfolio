import { FaRegEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

interface titleTwoProps {
  children: string;
  gradient: string;
  setGradient: React.Dispatch<React.SetStateAction<string>>;
}
const predefinedGradients = [
  {
    name: "Blue Purple",
    value: "linear-gradient(90deg, #3b82f6, #a855f7, #9333ea)",
  },
  {
    name: "Sunset",
    value: "linear-gradient(90deg, #f97316, #e11d48, #6d28d9)",
  },
  {
    name: "Emerald",
    value: "linear-gradient(90deg, #10b981, #3b82f6, #6366f1)",
  },
];

const solidColors = [
  "#3b82f6",
  "#a855f7",
  "#9333ea",
  "#f97316",
  "#e11d48",
  "#6d28d9",
  "#10b981",
  "#6366f1",
];
const TitleTwo = ({ children, gradient, setGradient }: titleTwoProps) => {
  const [isEditingColors, setIsEditingColors] = useState(false);
  const [originalGradient, setOriginalGradient] = useState(gradient);
  const [color1, setColor1] = useState("#3b82f6");
  const [color2, setColor2] = useState("#9333ea");
  const getColorsFromGradient = (grad: string) => {
    const colorRegex = /#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/g;
    const matches = grad.match(colorRegex);
    return matches || [color1, color2];
  };

  useEffect(() => {
    if (isEditingColors) {
      setOriginalGradient(gradient);
      const colors = getColorsFromGradient(gradient);
      setColor1(colors[0]);
      setColor2(colors[1] || colors[0]);
    }
  }, [isEditingColors]);

  useEffect(() => {
    if (isEditingColors) {
      setGradient(`linear-gradient(90deg, ${color1}, ${color2})`);
    }
  }, [color1, color2, isEditingColors]);

  return (
    <>
      <h1 className="relative font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl text-center h-[70px]">
        <span className="relative inline-block">
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-purple-500"
            style={{
              backgroundImage: gradient,
              backgroundSize: "200% 200%",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {children}
          </span>
          <FaRegEdit
            className="absolute top-0 right-[-12px] cursor-pointer"
            fontSize={20}
            onClick={() => setIsEditingColors(true)}
          />
          <span className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-purple-600/20 blur-md rounded-full"></span>
        </span>
      </h1>
      {isEditingColors && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-[#2c2a3a] p-6 rounded-lg shadow-xl text-white max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Edit Gradient</h2>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Solid Colors
              </label>
              <div className="grid grid-cols-8 gap-2 mb-4">
                {solidColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => {
                      setColor1(color);
                      setColor2(color);
                    }}
                    className="h-8 w-8 rounded-full border-2 hover:scale-110 transition-all cursor-pointer"
                    style={{
                      backgroundColor: color,
                      borderColor: color === color1 ? "#fff" : "transparent",
                    }}
                  />
                ))}
              </div>

              <label className="block text-sm font-medium mb-2">
                Custom Gradient
              </label>
              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <HexColorPicker
                    color={color1}
                    onChange={setColor1}
                    className="mb-2"
                  />
                  <input
                    value={color1}
                    onChange={(e) => setColor1(e.target.value)}
                    className="w-full p-1 text-center bg-gray-700 rounded"
                  />
                </div>
                <div className="flex-1">
                  <HexColorPicker
                    color={color2}
                    onChange={setColor2}
                    className="mb-2"
                  />
                  <input
                    value={color2}
                    onChange={(e) => setColor2(e.target.value)}
                    className="w-full p-1 text-center bg-gray-700 rounded"
                  />
                </div>
              </div>

              <div
                className="h-12 w-full rounded-lg mb-4"
                style={{ background: gradient }}
              />

              <label className="block text-sm font-medium mb-2">
                Preset Gradients
              </label>
              <div className="grid grid-cols-3 gap-3">
                {predefinedGradients.map((grad) => (
                  <button
                    key={grad.name}
                    onClick={() => {
                      const colors = getColorsFromGradient(grad.value);
                      setColor1(colors[0]);
                      setColor2(colors[1]);
                    }}
                    className="h-12 rounded-lg border-2 hover:border-purple-500 transition-all cursor-pointer"
                    style={{
                      backgroundImage: grad.value,
                      borderColor:
                        grad.value === gradient ? "#9333ea" : "#e5e7eb",
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setGradient(originalGradient);
                  setIsEditingColors(false);
                }}
                className="px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsEditingColors(false)}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TitleTwo;
