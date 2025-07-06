import { useState, useRef, useEffect } from "react";
import { FaHighlighter, FaEraser } from "react-icons/fa";
import { HexColorPicker } from "react-colorful";
import { SolidColors as solidColors } from "../constants/constants";
import { MdCancel } from "react-icons/md";
import { useContext } from "react";
import { AboutContext } from "../about/context/aboutContext";
interface HighlightRange {
  start: number;
  end: number;
  color: string;
}

const EditableDescription = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [coloringActive, setColoringActive] = useState(false);
  const [eraserActive, setEraserActive] = useState(false);
  const [selectedColor, setSelectedColor] = useState(solidColors[0]);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [cursorPos, setCursorPos] = useState<number | null>(null);

  const descriptionContext = useContext(AboutContext);
  const text = descriptionContext?.text ?? "";
  const setText = descriptionContext?.setText ?? (() => {});
  const highlights = descriptionContext?.highlights ?? [];
  const setHighlights = descriptionContext?.setHighlights ?? (() => {});

  const getTextRuns = () => {
    if (highlights.length === 0) return [{ text, color: undefined }];

    const sortedHighlights = [...highlights].sort((a, b) => a.start - b.start);

    let lastIndex = 0;
    const runs: { text: string; color?: string }[] = [];

    for (const h of sortedHighlights) {
      if (h.start > lastIndex) {
        runs.push({
          text: text.substring(lastIndex, h.start),
        });
      }

      runs.push({
        text: text.substring(h.start, h.end),
        color: h.color,
      });

      lastIndex = h.end;
    }

    if (lastIndex < text.length) {
      runs.push({
        text: text.substring(lastIndex),
      });
    }

    return runs;
  };

  const renderContent = () => {
    const runs = getTextRuns();

    return runs.map((run, index) => (
      <span
        key={`run-${index}`}
        className={`relative ${run.color ? "" : ""}`}
        style={{ color: run.color || "inherit" }}
      >
        {run.text}
        {run.color && (
          <span
            className="absolute bottom-0 left-0 w-full h-[2px] opacity-50"
            style={{ backgroundColor: run.color }}
          />
        )}
      </span>
    ));
  };

  const getSelectionInfo = () => {
    const selection = window.getSelection();
    if (
      !selection ||
      selection.rangeCount === 0 ||
      selection.toString().trim() === ""
    )
      return null;

    const range = selection.getRangeAt(0);
    if (!contentRef.current) return null;

    const preRange = document.createRange();
    preRange.selectNodeContents(contentRef.current);
    preRange.setEnd(range.startContainer, range.startOffset);

    return {
      start: preRange.toString().length,
      end: preRange.toString().length + selection.toString().length,
    };
  };

  const applyColorToSelection = () => {
    if (!coloringActive) return;

    const sel = getSelectionInfo();
    if (!sel) return;

    const newHighlight: HighlightRange = {
      start: sel.start,
      end: sel.end,
      color: selectedColor,
    };

    // Break existing highlights that overlap with the new highlight
    const newHighlights: HighlightRange[] = [];
    for (const h of highlights) {
      // No overlap
      if (h.end <= newHighlight.start || h.start >= newHighlight.end) {
        newHighlights.push(h);
      } else {
        // Part before new highlight
        if (h.start < newHighlight.start) {
          newHighlights.push({
            start: h.start,
            end: newHighlight.start,
            color: h.color,
          });
        }

        // Part after new highlight
        if (h.end > newHighlight.end) {
          newHighlights.push({
            start: newHighlight.end,
            end: h.end,
            color: h.color,
          });
        }
      }
    }

    newHighlights.push(newHighlight);

    newHighlights.sort((a, b) => a.start - b.start);

    setHighlights(newHighlights);
    window.getSelection()?.removeAllRanges();
  };

  const removeColorFromSelection = () => {
    if (!eraserActive) return;

    const sel = getSelectionInfo();
    if (!sel) return;

    const newHighlights: HighlightRange[] = [];
    for (const h of highlights) {
      if (h.end <= sel.start || h.start >= sel.end) {
        newHighlights.push(h);
      } else {
        if (h.start < sel.start) {
          newHighlights.push({
            start: h.start,
            end: sel.start,
            color: h.color,
          });
        }

        if (h.end > sel.end) {
          newHighlights.push({
            start: sel.end,
            end: h.end,
            color: h.color,
          });
        }
      }
    }

    setHighlights(newHighlights);
    window.getSelection()?.removeAllRanges();
  };

  // Adjust highlights when text changes
  const adjustHighlightsForTextChange = (oldText: string, newText: string) => {
    if (oldText === newText) return;

    // Find changed region
    let start = 0;
    while (
      start < oldText.length &&
      start < newText.length &&
      oldText[start] === newText[start]
    )
      start++;

    let oldEnd = oldText.length;
    let newEnd = newText.length;
    while (
      oldEnd > start &&
      newEnd > start &&
      oldText[oldEnd - 1] === newText[newEnd - 1]
    ) {
      oldEnd--;
      newEnd--;
    }

    const changeInLength = newEnd - start - (oldEnd - start);

    setHighlights((prev) => {
      return prev
        .map((h) => {
          if (h.end <= start) return h;

          if (h.start >= oldEnd) {
            return {
              ...h,
              start: h.start + changeInLength,
              end: h.end + changeInLength,
            };
          }

          const parts: HighlightRange[] = [];

          if (h.start < start) {
            parts.push({
              ...h,
              end: Math.min(h.end, start),
            });
          }

          if (h.end > oldEnd) {
            parts.push({
              ...h,
              start: Math.max(h.start, oldEnd) + changeInLength,
              end: h.end + changeInLength,
            });
          }

          return parts;
        })
        .flat()
        .filter((h) => h.start < h.end)
        .filter((h) => h.end <= newText.length);
    });
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    const oldText = text;

    // Save cursor position
    setCursorPos(e.target.selectionStart);

    setText(newText);
    adjustHighlightsForTextChange(oldText, newText);
  };

  useEffect(() => {
    if (cursorPos !== null && textareaRef.current) {
      textareaRef.current.setSelectionRange(cursorPos, cursorPos);
    }
  }, [text, cursorPos]);

  const toggleEdit = () => {
    setColoringActive(false);
    setEraserActive(false);
    setIsEditing(!isEditing);
  };

  const toggleColoring = (e: React.MouseEvent) => {
    e.stopPropagation();
    setColoringActive(!coloringActive);
    setEraserActive(false);
  };

  const toggleEraser = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEraserActive(!eraserActive);
    setColoringActive(false);
  };

  const openColorPicker = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowColorPicker(true);
  };

  const handleClick = () => {
    if (coloringActive) {
      applyColorToSelection();
    } else if (eraserActive) {
      removeColorFromSelection();
    } else {
      toggleEdit();
    }
  };

  return (
    <div className="relative">
      {!isEditing ? (
        <div className="relative">
          <div
            ref={contentRef}
            onClick={handleClick}
            className={`cursor-${
              coloringActive || eraserActive ? "text" : "pointer"
            } p-4 border border-transparent hover:border-gray-200 rounded whitespace-pre-wrap`}
          >
            {renderContent()}
          </div>

          <div className="absolute -top-8 right-2 flex gap-2">
            <button
              onClick={toggleColoring}
              title={coloringActive ? "Cancel Coloring" : "Text Color Tool"}
            >
              {coloringActive ? (
                <MdCancel
                  fontSize={24}
                  color="#f44336"
                  className="cursor-pointer"
                />
              ) : (
                <FaHighlighter
                  fontSize={24}
                  color={selectedColor}
                  className="cursor-pointer"
                />
              )}
            </button>

            <button
              onClick={toggleEraser}
              title={eraserActive ? "Cancel Eraser" : "Remove Color"}
            >
              {eraserActive ? (
                <MdCancel
                  fontSize={24}
                  color="#f44336"
                  className="cursor-pointer"
                />
              ) : (
                <FaEraser fontSize={24} className="cursor-pointer" />
              )}
            </button>

            {coloringActive && (
              <button
                onClick={openColorPicker}
                className="w-6 h-6 rounded-full cursor-pointer border border-gray-300"
                style={{ backgroundColor: selectedColor }}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="relative">
          <textarea
            ref={textareaRef}
            value={text}
            onChange={handleTextChange}
            className="w-full border rounded p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] whitespace-pre-wrap"
            autoFocus
          />

          <div className="mt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={toggleEdit}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* Color Picker Modal */}
      {showColorPicker && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
          onClick={() => setShowColorPicker(false)}
        >
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Choose Color
            </h2>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                Solid Colors
              </label>
              <div className="grid grid-cols-8 gap-2 mb-4">
                {solidColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className="h-8 w-8 rounded-full border-2 hover:scale-110 transition-all cursor-pointer"
                    style={{
                      backgroundColor: color,
                      borderColor:
                        color === selectedColor ? "#000" : "transparent",
                    }}
                  />
                ))}
              </div>

              <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                Custom Color
              </label>
              <div className="mb-4">
                <HexColorPicker
                  color={selectedColor}
                  onChange={setSelectedColor}
                  className="mb-2 w-full"
                />
                <input
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full p-1 text-center bg-gray-100 dark:bg-gray-700 dark:text-white rounded"
                />
              </div>

              <div
                className="h-12 w-full rounded-lg mb-4"
                style={{ backgroundColor: selectedColor }}
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowColorPicker(false)}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowColorPicker(false)}
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableDescription;
