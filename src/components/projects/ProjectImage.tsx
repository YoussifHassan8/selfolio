import React, { useRef, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { uploadImageToImgBB } from "../utils/imageUpload";

interface ProjectImageProps {
  isEditing: boolean;
  editedImgSrc: string;
  setEditedImgSrc: React.Dispatch<React.SetStateAction<string>>;
  imgSrc: string;
  editedTitle: string;
  title: string;
}

const ProjectImage = ({
  isEditing,
  editedImgSrc,
  setEditedImgSrc,
  imgSrc,
  editedTitle,
  title,
}: ProjectImageProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showDialog, setShowDialog] = useState(false);

  const handleIconClick = () => {
    setShowDialog(true);
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const uploadedUrl = await uploadImageToImgBB(file);
      setEditedImgSrc(uploadedUrl);
      setShowDialog(false);
    } catch (err) {
      console.error("Image upload failed:", err);
    }
  };

  const handleUrlSubmit = () => {
    setShowDialog(false);
  };

  return (
    <>
      <div className="aspect-video overflow-hidden rounded-xl border-2 border-white/10 relative">
        {isEditing && (
          <button
            onClick={handleIconClick}
            className="cursor-pointer absolute top-2 right-2 z-10 w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
          >
            <FaRegEdit className="w-4 h-4" />
          </button>
        )}
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={isEditing ? editedImgSrc : imgSrc}
          alt={isEditing ? editedTitle : title}
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://placehold.co/600x400";
          }}
        />
      </div>

      {showDialog && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-[#2c2a3a] p-6 rounded-lg shadow-xl text-white max-w-md w-full mx-4">
            <h2 className="text-lg font-semibold mb-4">Update Project Image</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  value={editedImgSrc}
                  onChange={(e) => setEditedImgSrc(e.target.value)}
                  placeholder="Enter image URL"
                  className="w-full p-2 bg-gray-800 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
                <button
                  onClick={handleUrlSubmit}
                  className="cursor-pointer mt-2 w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                >
                  Use URL
                </button>
              </div>

              <div className="flex items-center">
                <div className="flex-1 h-px bg-gray-600"></div>
                <span className="px-3 text-gray-400 text-sm">or</span>
                <div className="flex-1 h-px bg-gray-600"></div>
              </div>

              <div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors"
                >
                  <FaRegEdit className="w-4 h-4" />
                  Upload Image
                </button>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowDialog(false)}
                className="cursor-pointer px-4 py-2 rounded bg-gray-600 hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectImage;
