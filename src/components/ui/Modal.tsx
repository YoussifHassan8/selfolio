interface SectionsState {
  About: boolean;
  Projects: boolean;
  Skills: boolean;
  Experience: boolean;
  Contact: boolean;
}

interface ModalProps {
  deleteConfirmation: string;
  setDeleteConfirmation: React.Dispatch<React.SetStateAction<string>>;
  setSections: React.Dispatch<React.SetStateAction<SectionsState>>;
}

const Modal = ({
  deleteConfirmation,
  setDeleteConfirmation,
  setSections,
}: ModalProps) => {
  const deleteSection = (section: string) => {
    setSections((prev) => ({
      ...prev,
      [section]: false,
    }));
    setDeleteConfirmation("");
  };
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-[#2c2a3a] p-6 rounded-lg shadow-xl text-white max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">
          Are you sure you want to delete{" "}
          <span className="text-red-500">{deleteConfirmation} </span>
          section and its content?
        </h2>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => setDeleteConfirmation("")}
            className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => deleteSection(deleteConfirmation)}
            className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 transition-all duration-300 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
