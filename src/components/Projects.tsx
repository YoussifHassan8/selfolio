import { useContext, useState } from "react";
import ProjectCard from "./ui/ProjectCard";
import TitleTwo from "./ui/TitleTwo";
import AddNewProjectButton from "./projects/AddNewProjectButton";
import ShowDeleteModal from "./projects/ShowDeleteModal";
import { project, tech } from "./types/projects";
import { projectsContext } from "./about/context/projectsContext";
const Projects = () => {
  const projectContext = useContext(projectsContext);
  const projectsGradient = projectContext?.projectsGradient || "";
  const setProjectsGradient = projectContext?.setProjectsGradient || (() => {});
  const projects = projectContext?.projects ?? [];
  const setProjects = projectContext?.setProjects || (() => {});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<number | null>(null);

  const updateProject = (index: number, updatedProject: project) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = updatedProject;
    setProjects(updatedProjects);
  };

  const handleTechChange = (projectIndex: number, techArray: tech[]) => {
    const updatedProject = { ...projects[projectIndex], tech: techArray };
    updateProject(projectIndex, updatedProject);
  };

  const confirmDelete = (index: number) => {
    setProjectToDelete(index);
    setShowDeleteModal(true);
  };

  return (
    <section id="projects" className="my-32 mx-auto max-w-6xl px-4">
      <TitleTwo gradient={projectsGradient} setGradient={setProjectsGradient}>
        My Projects
      </TitleTwo>
      <p className="text-lg font-medium text-white/60 max-w-3xl text-center mx-auto mb-12">
        Discover my creative and innovative projects, spanning design to
        development, and see how I can add value to your next endeavor
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onUpdate={(updatedProject) => updateProject(index, updatedProject)}
            onTechChange={(techArray) => handleTechChange(index, techArray)}
            onDelete={() => confirmDelete(index)}
          />
        ))}

        <AddNewProjectButton projects={projects} setProjects={setProjects} />
      </div>

      {showDeleteModal && (
        <ShowDeleteModal
          projects={projects}
          setProjects={setProjects}
          projectToDelete={projectToDelete}
          setShowDeleteModal={setShowDeleteModal}
          setProjectToDelete={setProjectToDelete}
        />
      )}
    </section>
  );
};

export default Projects;
