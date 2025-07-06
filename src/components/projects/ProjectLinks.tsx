import { IoPlayCircleOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
interface ProjectLinksProps {
  isEditing: boolean;
  editedLiveDemo: string;
  setEditedLiveDemo: React.Dispatch<React.SetStateAction<string>>;
  editedRepo: string;
  setEditedRepo: React.Dispatch<React.SetStateAction<string>>;
  liveDemo: string;
  repo: string;
}
const ProjectLinks = ({
  isEditing,
  editedLiveDemo,
  setEditedLiveDemo,
  editedRepo,
  setEditedRepo,
  liveDemo,
  repo,
}: ProjectLinksProps) => {
  return (
    <>
      {isEditing ? (
        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={editedLiveDemo}
            onChange={(e) => setEditedLiveDemo(e.target.value)}
            placeholder="Live demo URL"
            className="p-2 bg-gray-800 text-white rounded"
          />
          <input
            type="text"
            value={editedRepo}
            onChange={(e) => setEditedRepo(e.target.value)}
            placeholder="GitHub repository URL"
            className="p-2 bg-gray-800 text-white rounded"
          />
        </div>
      ) : (
        <div className="flex gap-3 mt-4">
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white rounded-xl transition-all relative overflow-hidden"
            >
              <IoPlayCircleOutline className="w-5 h-5" />
              <span className="font-semibold tracking-wide">Live Demo</span>
            </a>
          )}

          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white rounded-xl transition-all relative overflow-hidden"
            >
              <FaGithub className="w-5 h-5" />
              <span className="font-semibold tracking-wide">GitHub</span>
            </a>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectLinks;
