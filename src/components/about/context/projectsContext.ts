import { createContext, useContext } from "react";
interface Tech {
  name: string;
  color: string;
}
interface Project {
  title: string;
  description: string;
  tech: Tech[];
  imgSrc: string;
  liveDemo: string;
  repo: string;
}
type projectsType = {
  projectsGradient: string;
  setProjectsGradient: React.Dispatch<React.SetStateAction<string>>;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
};

export const projectsContext = createContext<projectsType | undefined>(
  undefined
);

// Custom hook for cleaner access
export const useSocialLinks = () => {
  const context = useContext(projectsContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
