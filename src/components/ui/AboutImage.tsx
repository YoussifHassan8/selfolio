import { useRef, useContext } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AboutContext } from "../about/context/aboutContext";
import { uploadImageToImgBB } from "../utils/imageUpload";

const defaultImageUrl = "https://placehold.co/400x600";

const AboutImage = () => {
  const imgContext = useContext(AboutContext);
  const imgUrl: string = imgContext?.imgUrl || defaultImageUrl;
  const setImgUrl = imgContext?.setImgUrl || (() => {});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const uploadedUrl = await uploadImageToImgBB(file);
      setImgUrl(uploadedUrl);
    } catch (err) {
      console.error("Image upload failed:", err);
      // You might want to show a user-friendly error message here
    }
  };

  return (
    <div className="relative max-w-[320px] rounded-2xl overflow-hidden">
      <img
        src={imgUrl}
        alt="Profile"
        className="scale-125 group-hover:scale-135 transition-all duration-500"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = defaultImageUrl;
        }}
      />
      <FaRegEdit
        className="absolute top-2 right-2 cursor-pointer"
        fontSize={28}
        onClick={handleIconClick}
      />
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default AboutImage;
