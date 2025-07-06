import { createContext, useContext } from "react";

interface experience {
  date: string;
  title: string;
  foundation: string;
  description: string;
  left: boolean;
  iconName: string;
}
type experiencesContextType = {
  experience: experience[];
  setExperience: React.Dispatch<React.SetStateAction<experience[]>>;
  experienceGradient: string;
  setExperienceGradient: React.Dispatch<React.SetStateAction<string>>;
};

export const experiencesContext = createContext<
  experiencesContextType | undefined
>(undefined);

// Custom hook for cleaner access
export const useSocialLinks = () => {
  const context = useContext(experiencesContext);
  if (!context) {
    throw new Error("useSocialLinks must be used within a SocialLinksProvider");
  }
  return context;
};
