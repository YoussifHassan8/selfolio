import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportModal = ({ isOpen, onClose }: SupportModalProps) => {
  const [copiedMethod, setCopiedMethod] = useState<string | null>(null);

  const supportMethods = [
    {
      id: "airtm",
      name: "Airtm",
      description: "Send support via Airtm",
      account: "youssifh383@gmail.com",
      icon: "💳",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "vodafone-cash",
      name: "Vodafone Cash",
      description: "Send support via Vodafone Cash",
      account: "+201080498768",
      icon: "📱",
      color: "from-red-500 to-pink-500",
    },
  ];

  const copyToClipboard = async (text: string, methodId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMethod(methodId);
      setTimeout(() => setCopiedMethod(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
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
            className="relative bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Support Selfolio
                </h2>
                <p className="text-gray-400 mt-1">
                  Help us keep this tool free and improve it
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
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

            <div className="p-6 space-y-4">
              {supportMethods.map((method) => (
                <motion.div
                  key={method.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-700 rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{method.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {method.name}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-600 rounded-lg p-3 mb-3">
                    <p className="text-white font-mono text-sm break-all">
                      {method.account}
                    </p>
                  </div>

                  <button
                    onClick={() => copyToClipboard(method.account, method.id)}
                    className={`w-full bg-gradient-to-r ${method.color} text-white py-2 px-4 rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2`}
                  >
                    {copiedMethod === method.id ? (
                      <>
                        <span>✓</span>
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <span>📋</span>
                        <span>Copy {method.name} Account</span>
                      </>
                    )}
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="p-6 border-t border-white/10 bg-slate-700/50">
              <p className="text-gray-300 text-sm text-center">
                Thank you for supporting Selfolio! Your contribution helps us
                maintain and improve this free tool.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SupportModal;
