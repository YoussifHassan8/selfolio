import AboutImage from "../ui/AboutImage";
import AvailableForHire from "../ui/AvailableForHire";
import UnavailableForHire from "../ui/UnavailableForHire";
import LeftTopBorder from "../ui/LeftTopBorder";
import BottomRightBorder from "../ui/BottomRightBorder";
import { useContext } from "react";
import { AboutContext } from "./context/aboutContext";

const LeftSide = () => {
  const availabilityContext = useContext(AboutContext);
  const availability: boolean = availabilityContext?.availability ?? false;
  const setAvailability = availabilityContext?.setAvailability || (() => {});

  return (
    <>
      <div className="absolute w-full h-full inset-0 bg-gradient-to-br from-[#3b82f6] to-[#22c55e] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
      <AboutImage />
      {availability ? (
        <AvailableForHire setAvailability={setAvailability} />
      ) : (
        <UnavailableForHire setAvailability={setAvailability} />
      )}
      <LeftTopBorder />
      <BottomRightBorder />
    </>
  );
};

export default LeftSide;
