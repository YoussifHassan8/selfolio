import { HexColorPicker } from "react-colorful";
import {
  SolidColors as solidColors,
  PredefinedGradients as predefinedGradients,
} from "../constants/constants";

const getColorsFromGradient = (gradient: string): string[] => {
  const colors = gradient.match(/#[0-9a-fA-F]{6}/g) || [];
  return colors;
};

interface EditingColorModalProps {
  originalResumeGradient: string;
  resumeColor1: string;
  setResumeColor1: (color: string) => void;
  resumeColor2: string;
  setResumeColor2: (color: string) => void;
  resumeGradient: string;
  setResumeGradient: (gradient: string) => void;
  setIsEditingResumeColors: (isEditing: boolean) => void;
}

const EditingColorModal = ({
  originalResumeGradient,
  resumeColor1,
  setResumeColor1,
  resumeColor2,
  setResumeColor2,
  resumeGradient,
  setResumeGradient,
  setIsEditingResumeColors,
}: EditingColorModalProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-[#1e293b] p-8 rounded-lg shadow-xl text-white max-w-md w-full max-h-[80vh] overflow-y-auto overflow-x-hidden">
        <h2 className="text-2xl font-bold mb-4">Edit Button Colors</h2>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Solid Colors</label>
          <div className="grid grid-cols-5 gap-2 mb-4">
            {solidColors.map((color) => (
              <button
                key={color}
                onClick={() => {
                  setResumeColor1(color);
                  setResumeColor2(color);
                }}
                className="h-8 w-8 rounded-full border-2 hover:scale-110 transition-all cursor-pointer"
                style={{
                  backgroundColor: color,
                  borderColor: color === resumeColor1 ? "#fff" : "transparent",
                }}
              />
            ))}
          </div>

          <label className="block text-sm font-medium mb-2">
            Custom Gradient
          </label>
          <div className="flex gap-4 mb-4">
            <div className="flex-1 min-w-0">
              <HexColorPicker
                color={resumeColor1}
                onChange={setResumeColor1}
                className="mb-2 max-w-full"
              />
              <input
                value={resumeColor1}
                onChange={(e) => setResumeColor1(e.target.value)}
                className="w-full p-1 text-center bg-gray-700 rounded max-w-full"
              />
            </div>
            <div className="flex-1 min-w-0">
              <HexColorPicker
                color={resumeColor2}
                onChange={setResumeColor2}
                className="mb-2 max-w-full"
              />
              <input
                value={resumeColor2}
                onChange={(e) => setResumeColor2(e.target.value)}
                className="w-full p-1 text-center bg-gray-700 rounded max-w-full"
              />
            </div>
          </div>

          <div
            className="h-12 w-full rounded-lg mb-4 flex items-center justify-center text-white"
            style={{ background: resumeGradient }}
          >
            <span className="flex items-center gap-2">View My Resume</span>
          </div>

          <label className="block text-sm font-medium mb-2">
            Preset Gradients
          </label>
          <div className="grid grid-cols-2 gap-3">
            {predefinedGradients.map((grad) => (
              <button
                key={grad.name}
                onClick={() => {
                  const colors = getColorsFromGradient(grad.value);
                  setResumeColor1(colors[0]);
                  setResumeColor2(colors[1]);
                  setResumeGradient(grad.value);
                }}
                className="h-12 rounded-lg border-2 hover:border-blue-500 transition-all cursor-pointer flex items-center justify-center text-white"
                style={{
                  backgroundImage: grad.value,
                  borderColor:
                    grad.value === resumeGradient ? "#3b82f6" : "#e5e7eb",
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
              setResumeGradient(originalResumeGradient);
              setIsEditingResumeColors(false);
            }}
            className="px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => setIsEditingResumeColors(false)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditingColorModal;
