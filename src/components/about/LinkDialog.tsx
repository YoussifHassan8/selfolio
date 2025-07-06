interface LinkDialogProps {
  linkInput: string;
  setLinkInput: (input: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

const LinkDialog = ({
  linkInput,
  setLinkInput,
  onSave,
  onCancel,
}: LinkDialogProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#1e293b] rounded-lg p-6 w-full max-w-md shadow-2xl border border-white/10">
        <h3 className="text-xl font-semibold mb-4 text-white">Edit Link</h3>

        <div className="mb-4">
          <label
            htmlFor="link-input"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            URL
          </label>
          <input
            id="link-input"
            type="text"
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
            placeholder="https://example.com"
            className="w-full p-3 bg-[#0f172a] border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            autoFocus
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-600 rounded-md text-white hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-gradient-to-r from-[#2A7B9B] to-[#57C785] rounded-md text-white hover:shadow-[0_0_15px_-5px_#57C785] transition-all"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkDialog; 