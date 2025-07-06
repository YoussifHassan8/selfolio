import { useState, useEffect } from "react";
import ProjectTechStack from "../projects/ProjectTechStack";
import { project, tech } from "../types/projects";
import ProjectImage from "../projects/ProjectImage";
import ProjectText from "../projects/ProjectText";
import ProjectLinks from "../projects/ProjectLinks";
import ProjectsEditingIcons from "../projects/ProjectsEditingIcons";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: Array<{ name: string; color: string }>;
  imgSrc: string;
  liveDemo: string;
  repo: string;
  onUpdate: (project: project) => void;
  onTechChange: (techArray: tech[]) => void;
  onDelete: () => void;
}

const ProjectCard = ({
  title,
  description,
  tech,
  imgSrc,
  liveDemo,
  repo,
  onUpdate,
  onTechChange,
  onDelete,
}: ProjectCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedImgSrc, setEditedImgSrc] = useState(imgSrc);
  const [editedLiveDemo, setEditedLiveDemo] = useState(liveDemo);
  const [editedRepo, setEditedRepo] = useState(repo);
  const [editedTech, setEditedTech] = useState(tech);

  useEffect(() => {
    setEditedTitle(title);
    setEditedDescription(description);
    setEditedImgSrc(imgSrc);
    setEditedLiveDemo(liveDemo);
    setEditedRepo(repo);
    setEditedTech(tech);
  }, [title, description, imgSrc, liveDemo, repo, tech]);

  return (
    <div className="relative group h-full">
      <div className="relative h-full p-[2px] bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl group transform transition-all duration-500 hover:-translate-y-2">
        <div className="bg-[#1a191e] p-6 rounded-3xl h-full space-y-4 relative overflow-hidden">
          <ProjectsEditingIcons
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            title={title}
            description={description}
            imgSrc={imgSrc}
            liveDemo={liveDemo}
            repo={repo}
            tech={tech}
            editedTitle={editedTitle}
            editedDescription={editedDescription}
            editedImgSrc={editedImgSrc}
            editedLiveDemo={editedLiveDemo}
            editedRepo={editedRepo}
            editedTech={editedTech}
            setEditedTitle={setEditedTitle}
            setEditedDescription={setEditedDescription}
            setEditedImgSrc={setEditedImgSrc}
            setEditedLiveDemo={setEditedLiveDemo}
            setEditedRepo={setEditedRepo}
            setEditedTech={setEditedTech}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />

          <ProjectImage
            isEditing={isEditing}
            editedImgSrc={editedImgSrc}
            setEditedImgSrc={setEditedImgSrc}
            imgSrc={imgSrc}
            editedTitle={editedTitle}
            title={title}
          />

          <div className="flex flex-col justify-between space-y-6">
            <ProjectText
              isEditing={isEditing}
              editedTitle={editedTitle}
              setEditedTitle={setEditedTitle}
              title={title}
              description={description}
              editedDescription={editedDescription}
              setEditedDescription={setEditedDescription}
            />

            <div className="flex flex-wrap gap-2">
              <ProjectTechStack
                tech={tech}
                isEditing={isEditing}
                onTechChange={(techArray) => {
                  setEditedTech(techArray);
                  onTechChange(techArray);
                }}
              />
            </div>

            <ProjectLinks
              isEditing={isEditing}
              editedLiveDemo={editedLiveDemo}
              setEditedLiveDemo={setEditedLiveDemo}
              editedRepo={editedRepo}
              setEditedRepo={setEditedRepo}
              liveDemo={liveDemo}
              repo={repo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
