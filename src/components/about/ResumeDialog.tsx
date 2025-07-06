interface ResumeDialogProps {
  resumeLink: string;
  setResumeLink: (link: string) => void;
  onEditColors: () => void;
  onSave: () => void;
  onCancel: () => void;
}

const ResumeDialog = ({
  resumeLink,
  setResumeLink,
  onEditColors,
  onSave,
  onCancel,
}: ResumeDialogProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#1e293b] rounded-lg p-6 w-full max-w-md shadow-2xl border border-white/10">
        <h3 className="text-xl font-semibold mb-4 text-white">
          Edit Resume Button
        </h3>

        <div className="mb-4">
          <label
            htmlFor="resume-link"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Resume URL
          </label>
          <input
            id="resume-link"
            type="text"
            value={resumeLink}
            onChange={(e) => setResumeLink(e.target.value)}
            placeholder="https://example.com/resume.pdf"
            className="w-full p-3 bg-[#0f172a] border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>

        <div className="flex justify-between mb-4">
          <button
            onClick={onEditColors}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white transition-colors cursor-pointer"
          >
            Edit Colors
          </button>

          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="px-4 py-2 border border-gray-600 rounded-md text-white hover:bg-gray-700 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={onSave}
              className="px-4 py-2 bg-gradient-to-r from-[#2A7B9B] to-[#57C785] rounded-md text-white hover:shadow-[0_0_15px_-5px_#57C785] transition-all cursor-pointer"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDialog; 