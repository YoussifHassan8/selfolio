import { createContext, useContext } from "react";

interface SkillItem {
  icon: string;
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
