import { FaFileExport } from "react-icons/fa";

interface ExportButtonProps {
  onExport: () => void;
}

const ExportButton = ({ onExport }: ExportButtonProps) => {
  return (
    <button
      onClick={onExport}
      className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
    >
      <FaFileExport className="text-xl" />
      <span>Export Portfolio</span>
    </button>
  );
};

export default ExportButton;
