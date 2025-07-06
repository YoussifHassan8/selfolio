import { createContext, useContext } from "react";
import { IconType } from "react-icons";

interface SkillItem {
  icon: IconType;
  name: string;
  color: string;
}

type SkillsContextType = {
  skills: SkillItem[];
  setSkills: React.Dispatch<React.SetStateAction<SkillItem[]>>;
  skillsGradient: string;
  setSkillsGradient: React.Dispatch<React.SetStateAction<string>>;
};

export const skillsContext = createContext<SkillsContextType | undefined>(
  undefined
);

// Custom hook for cleaner access
export const useSkills = () => {
  const context = useContext(skillsContext);
  if (!context) {
    throw new Error("useSkills must be used within a skillsContext Provider");
  }
  return context;
};
