import { motion, AnimatePresence } from "framer-motion";
import img from "../assets/templateOnePreview.png";
interface TemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTemplateSelect?: (templateId: string) => void;
}

interface Template {
  id: string;
  name: string;
  description: string;
  preview: string;
  category: string;
}

const templates: Template[] = [
  {
    id: "template-one",
    name: "Modern Portfolio",
    description:
      "A clean, modern portfolio template with smooth animations and professional design",
    preview: img,
    category: "Portfolio",
  },
  {
    id: "custom-portfolio",
    name: "Custom Portfolio",
    description:
      "Get a unique portfolio template designed specifically for your brand and requirements",
    preview: "🎨",
    category: "Custom",
  },
];

const TemplateModal = ({
  isOpen,
  onClose,
  onTemplateSelect,
}: TemplateModalProps) => {
  const handleTemplateSelect = (templateId: string) => {
    if (onTemplateSelect) {
      onTemplateSelect(templateId);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Choose a Template
                </h2>
                <p className="text-gray-400 mt-1">
                  Select a template to start building your portfolio
                </p>
              </div>
              <button
                onClick={onClose}
                className="cursor-pointer text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <motion.div
                    key={template.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`rounded-lg overflow-hidden border transition-all duration-300 cursor-pointer group ${
                      template.id === "custom-portfolio"
                        ? "bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30"
                        : "bg-slate-700 border-white/10 hover:border-white/20"
                    }`}
                    onClick={() => {
                      if (template.id === "custom-portfolio") {
                        const subject = encodeURIComponent(
                          "Custom Portfolio Request - Selfolio"
                        );
                        const body = encodeURIComponent(`Hi Youssif,

I'm interested in getting a custom portfolio template created for me.

My requirements:
- Design style: [Describe your preferred style]
- Color scheme: [Your preferred colors]
- Special features: [Any specific features you need]
- Timeline: [When you need it by]
- Budget: [Your budget range]

Additional details:
[Any other specific requirements or ideas]

Thank you!

Best regards,
[Your name]`);

                        window.open(
                          `mailto:youssifh383@gmail.com?subject=${subject}&body=${body}`,
                          "_blank"
                        );
                      } else {
                        handleTemplateSelect(template.id);
                      }
                    }}
                  >
                    <div
                      className={`aspect-video flex items-center justify-center relative overflow-hidden ${
                        template.id === "custom-portfolio"
                          ? "bg-gradient-to-br from-purple-500 to-blue-600"
                          : "bg-gradient-to-br from-blue-500 to-purple-600"
                      }`}
                    >
                      {typeof template.preview === 'string' && template.preview.startsWith('🎨') ? (
                        <div className="text-white text-6xl font-bold opacity-20">
                          {template.preview}
                        </div>
                      ) : (
                        <img 
                          src={template.preview} 
                          alt={`${template.name} preview`}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    </div>

                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          {template.name}
                        </h3>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            template.id === "custom-portfolio"
                              ? "bg-purple-500/20 text-purple-300"
                              : "bg-blue-500/20 text-blue-300"
                          }`}
                        >
                          {template.category}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">
                        {template.description}
                      </p>

                      <button
                        className={`cursor-pointer w-full py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                          template.id === "custom-portfolio"
                            ? "bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700"
                            : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
                        }`}
                      >
                        {template.id === "custom-portfolio"
                          ? "💬 Contact for Custom Work"
                          : "Use Template"}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-slate-700/50 rounded-lg border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">
                  More Templates Coming Soon
                </h3>
                <p className="text-gray-300 text-sm">
                  We're working on more beautiful templates. Stay tuned for
                  updates!
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TemplateModal;
