// ExperienceCardLeft.jsx
import { IoIosArrowBack } from "react-icons/io";
import { ReactElement } from "react";

interface ExperienceCardProps {
  date: string;
  title: string;
  foundation: string;
  description: string;
  logo: ReactElement;
  small: boolean;
}

const ExperienceCardLeft = ({
  date,
  title,
  foundation,
  description,
  logo,
  small,
}: ExperienceCardProps) => {
  return (
    <div className="relative">
      <div
        className={`absolute ${
          !small ? "left-1/2" : ""
        } -translate-x-1/2 bg-white/20 border-2 rounded-full p-2 z-10`}
      >
        {logo}
      </div>
      <div
        className={`relative bg-[#2a292f] p-4 rounded-2xl ${
          !small ? "ml-[620px] w-[380px]" : "ml-[60px] w-full"
        }`}
      >
        <IoIosArrowBack
          className="absolute left-[-22px] top-[6px]"
          fontSize={32}
        />
        <p className="text-sm text-gray-300">{date}</p>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400">{foundation}</p>
        <div className="text-gray-300 mt-2">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCardLeft;
