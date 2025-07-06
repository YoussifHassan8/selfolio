import { project } from "../types/projects";

interface ShowDeleteModalProps {
  projects: project[];
  setProjects: React.Dispatch<React.SetStateAction<project[]>>;
  projectToDelete: number | null;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  setProjectToDelete: React.Dispatch<React.SetStateAction<number | null>>;
}

const ShowDeleteModal = ({
  projects,
  setProjects,
  projectToDelete,
  setShowDeleteModal,
  setProjectToDelete,
}: ShowDeleteModalProps) => {
  const deleteProject = () => {
    if (projectToDelete !== null) {
      const updatedProjects = [...projects];
      updatedProjects.splice(projectToDelete, 1);
      setProjects(updatedProjects);
      setShowDeleteModal(false);
      setProjectToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setProjectToDelete(null);
  };
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-[#2c2a3a] p-6 rounded-lg shadow-xl text-white max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">
          Are you sure you want to delete{" "}
          <span className="text-red-500">
            {projectToDelete !== null ? projects[projectToDelete].title : ""}
          </span>
          ?
        </h2>
        <p className="mb-4 text-gray-300">This action cannot be undone.</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={cancelDelete}
            className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={deleteProject}
            className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 transition-all duration-300 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowDeleteModal;
