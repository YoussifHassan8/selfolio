import { createContext, useContext } from "react";
import { Link } from "../../types/about";
import { ResumeState } from "../../types/about";
interface HighlightRange {
  start: number;
  end: number;
  color: string;
}
type SocialLinksContextType = {
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
  resumeState: ResumeState;
  setResumeState: React.Dispatch<React.SetStateAction<ResumeState>>;
  availability: boolean;
  setAvailability: React.Dispatch<React.SetStateAction<boolean>>;
  imgUrl: string;
  setImgUrl: React.Dispatch<React.SetStateAction<string>>;
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  nameGradient: string;
  setNameGradient: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  highlights: HighlightRange[];
  setHighlights: React.Dispatch<React.SetStateAction<HighlightRange[]>>;
};

export const AboutContext = createContext<SocialLinksContextType | undefined>(
  undefined
);

// Custom hook for cleaner access
export const useSocialLinks = () => {
  const context = useContext(AboutContext);
  if (!context) {
    throw new Error("useSocialLinks must be used within a SocialLinksProvider");
  }
  return context;
};
