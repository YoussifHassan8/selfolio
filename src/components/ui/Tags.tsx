import { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AboutContext } from "../about/context/aboutContext";
import { useContext } from "react";

const defaultTags = ["UI/UX Enthusiast", "Problem Solver", "Frontend Developer"];

const Tags = () => {
  const tagsContext = useContext(AboutContext);
  const tags: string[] = tagsContext?.tags || defaultTags;
  const setTags = tagsContext?.setTags || (() => { });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    if (tags.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tags.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [tags]);

  const handleSave = () => {
    if (!setTags) return;

    const newTags = inputText
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    if (newTags.length === 0) {
      setTags(defaultTags);
    } else {
      setTags(newTags);
    }
    setShowModal(false);
  };

  return (
    <div className="relative">
      <div className="w-fit px-4 py-2 bg-black backdrop-blur-md border border-white/10 rounded-full shadow-sm overflow-hidden">
        <span>✨</span>
        <span className="typing">{tags[currentIndex]}</span>
      </div>
      <FaRegEdit
        className="absolute top-0 left-0 cursor-pointer"
        onClick={() => {
          setInputText(tags.join(", "));
          setShowModal(true);
        }}
      />

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-[#2c2a3a] p-6 rounded-lg shadow-xl text-white max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Edit Tags</h2>
            <p className="text-white/80 mb-2">
              Enter tags separated by commas:
            </p>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full p-3 border rounded-lg mb-4 h-24"
              placeholder="Example: UI/UX Enthusiast, Problem Solver, Frontend Developer"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 transition-all duration-300 cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tags;
