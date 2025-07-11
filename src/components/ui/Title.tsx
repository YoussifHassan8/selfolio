import { FaRegEdit } from "react-icons/fa";
import { useState, useEffect, useRef, useContext } from "react";
import { HexColorPicker } from "react-colorful";
import { SolidColors as solidColors } from "../constants/constants";
import { AboutContext } from "../about/context/aboutContext";
import { PredefinedGradients as predefinedGradients } from "../constants/constants";
import ReactDOM from "react-dom";
const defaultName = "Youssif Hassan";
const defaultGradient = "linear-gradient(90deg, #3b82f6, #9333ea)";

const Title = () => {
  const titleContext = useContext(AboutContext);
  const name: string = titleContext?.name || defaultName;
  const setName = titleContext?.setName || (() => {});
  const gradient: string = titleContext?.nameGradient || defaultGradient;
  const setGradient = titleContext?.setNameGradient || (() => {});
  const [isEditingColors, setIsEditingColors] = useState(false);
  const [originalGradient, setOriginalGradient] = useState(gradient);
  const [tempColor1, setTempColor1] = useState("#3b82f6");
  const [tempColor2, setTempColor2] = useState("#9333ea");
  const nameRef = useRef<HTMLSpanElement>(null);

  const getColorsFromGradient = (grad: string) => {
    const colorRegex = /#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/g;
    const matches = grad.match(colorRegex);
    return matches || [tempColor1, tempColor2];
  };

  useEffect(() => {
    if (isEditingColors && gradient) {
      setOriginalGradient(gradient);
      const colors = getColorsFromGradient(gradient);
      setTempColor1(colors[0]);
      setTempColor2(colors[1] || colors[0]);
    }
  }, [isEditingColors, gradient]);

  const handleNameEdit = () => {
    if (nameRef.current && setName) {
      const newName = nameRef.current.innerText.trim();
      if (newName) setName(newName);
    }
  };

  const handleDone = () => {
    if (setGradient) {
      setGradient(`linear-gradient(90deg, ${tempColor1}, ${tempColor2})`);
    }
    setIsEditingColors(false);
  };

  const handlePresetSelect = (grad: { value: string }) => {
    const colors = getColorsFromGradient(grad.value);
    setTempColor1(colors[0]);
    setTempColor2(colors[1]);
    if (setGradient) {
      setGradient(grad.value);
    }
  };

  return (
    <>
      <h1 className="font-bold text-4xl tracking-tight">
        Hello, I am{" "}
        <span className="relative text-4xl sm:text-5xl md:text-6xl inline-block">
          <span
            ref={nameRef}
            contentEditable
            suppressContentEditableWarning
            onBlur={handleNameEdit}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                nameRef.current?.blur();
              }
            }}
            className="relative cursor-pointer outline-none focus:border-b-2 focus:border-purple-500"
            style={{
              backgroundImage: gradient,
              backgroundSize: "200% 200%",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {name}
          </span>
          <FaRegEdit
            className="absolute top-[-8px] right-[-20px] cursor-pointer hover:text-purple-600 transition-colors"
            fontSize={28}
            onClick={() => setIsEditingColors(true)}
          />
          <span className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-purple-600/20 blur-md rounded-full" />
        </span>
      </h1>

      {isEditingColors &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-[#1e293b] p-8 rounded-lg shadow-xl text-white max-w-md w-full max-h-[80vh] overflow-y-auto overflow-x-hidden">
              <h2 className="text-2xl font-bold mb-4">Edit Gradient</h2>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Solid Colors</label>
                <div className="grid grid-cols-5 gap-2 mb-4">
                  {solidColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => {
                        setTempColor1(color);
                        setTempColor2(color);
                      }}
                      className="h-8 w-8 rounded-full border-2 hover:scale-110 transition-all cursor-pointer"
                      style={{
                        backgroundColor: color,
                        borderColor: color === tempColor1 ? "#fff" : "transparent",
                      }}
                    />
                  ))}
                </div>

                <label className="block text-sm font-medium mb-2">Custom Gradient</label>
                <div className="flex gap-4 mb-4">
                  <div className="flex-1 min-w-0">
                    <HexColorPicker
                      color={tempColor1}
                      onChange={setTempColor1}
                      className="mb-2 max-w-full"
                    />
                    <input
                      value={tempColor1}
                      onChange={(e) => setTempColor1(e.target.value)}
                      className="w-full p-1 text-center bg-gray-700 rounded max-w-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <HexColorPicker
                      color={tempColor2}
                      onChange={setTempColor2}
                      className="mb-2 max-w-full"
                    />
                    <input
                      value={tempColor2}
                      onChange={(e) => setTempColor2(e.target.value)}
                      className="w-full p-1 text-center bg-gray-700 rounded max-w-full"
                    />
                  </div>
                </div>

                <div
                  className="h-12 w-full rounded-lg mb-4 flex items-center justify-center text-white"
                  style={{ background: `linear-gradient(90deg, ${tempColor1}, ${tempColor2})` }}
                >
                  <span className="flex items-center gap-2">Preview</span>
                </div>

                <label className="block text-sm font-medium mb-2">Preset Gradients</label>
                <div className="grid grid-cols-2 gap-3">
                  {predefinedGradients.map((grad) => (
                    <button
                      key={grad.name}
                      onClick={() => handlePresetSelect(grad)}
                      className="h-12 rounded-lg border-2 hover:border-purple-500 transition-all cursor-pointer flex items-center justify-center text-white"
                      style={{
                        backgroundImage: grad.value,
                        borderColor: grad.value === gradient ? "#9333ea" : "#e5e7eb",
                      }}
                    >
                      {grad.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    if (setGradient) {
                      setGradient(originalGradient);
                    }
                    setIsEditingColors(false);
                  }}
                  className="px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDone}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>,
          document.body
        )
      }
    </>
  );
};

export default Title;
