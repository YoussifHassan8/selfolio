import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface UserGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserGuideModal = ({ isOpen, onClose }: UserGuideModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Welcome to Template One! 🎉",
      description:
        "Let's get you started with customizing your portfolio. This guide will walk you through the key features.",
      icon: "👋",
      content:
        "Template One is a modern, responsive portfolio template with smooth animations and professional design. You can customize every section to match your personal brand.",
    },
    {
      title: "About Section",
      description:
        "Start by personalizing your About section with your information.",
      icon: "👤",
      content:
        "• Update your name, profile picture, and bio\n• Add your availability status\n• Customize your social media links\n• Add professional tags\n• Set up your resume link",
    },
    {
      title: "Projects Section",
      description: "Showcase your best work with the Projects section.",
      icon: "💼",
      content:
        "• Add your projects with descriptions\n• Upload project images\n• Include tech stack for each project\n• Add live demo and GitHub links\n• Customize project colors and gradients",
    },
    {
      title: "Skills Section",
      description: "Highlight your technical skills and expertise.",
      icon: "🛠️",
      content:
        "• Add your programming languages\n• Include frameworks and tools\n• Customize skill colors\n• Organize skills by categories\n• Add skill descriptions",
    },
    {
      title: "Experience Section",
      description: "Display your professional experience and achievements.",
      icon: "📈",
      content:
        "• Add your work experience\n• Include company names and dates\n• Write detailed descriptions\n• Add company icons\n• Customize timeline layout",
    },
    {
      title: "Contact Section",
      description: "Make it easy for people to reach you.",
      icon: "📧",
      content:
        "• Add your email address\n• Include your phone number\n• Set your location\n• Customize contact form\n• Add additional contact methods",
    },
    {
      title: "Customization Tips",
      description:
        "Make your portfolio unique with these customization options.",
      icon: "🎨",
      content:
        "• Change color gradients for each section\n• Toggle sections on/off\n• Customize text and descriptions\n• Upload your own images\n• Adjust layout and spacing",
    },
    {
      title: "Export & Deploy",
      description: "Ready to share your portfolio with the world!",
      icon: "🚀",
      content:
        "• Click 'Export React Project' to download\n• Deploy to platforms like Vercel, Netlify, or GitHub Pages\n• Your portfolio is fully responsive and optimized\n• All animations and interactions are included",
    },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
      setCurrentStep(0);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipGuide = () => {
    onClose();
    setCurrentStep(0);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{steps[currentStep].icon}</div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {steps[currentStep].title}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Step {currentStep + 1} of {steps.length}
                  </p>
                </div>
              </div>
              <button
                onClick={skipGuide}
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

            <div className="p-6">
              <div className="mb-6">
                <p className="text-gray-300 text-lg mb-4">
                  {steps[currentStep].description}
                </p>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-white/10">
                  <pre className="text-gray-200 text-sm whitespace-pre-line font-sans">
                    {steps[currentStep].content}
                  </pre>
                </div>
              </div>

              <div className="mb-6">
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((currentStep + 1) / steps.length) * 100}%`,
                    }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className={`cursor-pointer px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    currentStep === 0
                      ? "text-gray-500 cursor-not-allowed"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Previous
                </button>

                <button
                  onClick={nextStep}
                  className="cursor-pointer px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  {currentStep === steps.length - 1 ? "Get Started!" : "Next"}
                </button>
              </div>
            </div>

            <div className="p-4 border-t border-white/10 text-center">
              <button
                onClick={skipGuide}
                className="cursor-pointer text-gray-400 hover:text-white text-sm transition-colors"
              >
                Skip guide
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserGuideModal;
