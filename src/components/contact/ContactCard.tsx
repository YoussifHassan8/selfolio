import { motion } from "framer-motion";
import {
  FaEdit,
  FaCheck as FaSolidCheck,
  FaTimes as FaSolidTimes,
} from "react-icons/fa";
import { ContactCardProps } from "./types";

const ContactCard = ({
  title,
  icon,
  value,
  isEditing,
  tempValue,
  onEdit,
  onSave,
  onCancel,
  onChange,
  color,
  link,
  additionalInfo,
}: ContactCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ scale: isEditing ? 1 : 1.03 }}
      className="relative flex flex-col items-center justify-center p-8 rounded-xl bg-[#1a191e] hover:bg-[#25242a] transition-all h-full"
    >
      {!isEditing && (
        <button
          onClick={onEdit}
          className={`absolute top-3 right-3 p-2 ${color.secondary} rounded-full hover:${color.hover} transition-colors cursor-pointer`}
          title={`Edit ${title}`}
        >
          <FaEdit className={color.primary} />
        </button>
      )}

      <div className={`p-5 ${color.secondary} rounded-full mb-5`}>{icon}</div>

      <h3 className="text-2xl font-bold mb-2">{title}</h3>

      {isEditing ? (
        <div className="w-full space-y-3">
          <input
            type="text"
            value={tempValue}
            onChange={(e) => onChange(e.target.value)}
            className={`w-full bg-[#2d2c33] border ${color.secondary} rounded-md px-3 py-2 text-center focus:outline-none focus:ring-2 focus:ring-${color.primary}`}
            placeholder={`Enter your ${title.toLowerCase()}`}
          />

          <div className="flex justify-center gap-3">
            <button
              onClick={onSave}
              className="p-1.5 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center gap-1"
            >
              <FaSolidCheck className="text-sm" />
              Save
            </button>
            <button
              onClick={onCancel}
              className="p-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center gap-1"
            >
              <FaSolidTimes className="text-sm" />
              Cancel
            </button>
          </div>
        </div>
      ) : link ? (
        <a
          href={link.href}
          className={`text-gray-300 hover:${color.primary} transition-colors flex items-center gap-2 justify-center`}
        >
          {value}
          {link.icon}
        </a>
      ) : (
        <>
          <p className="text-gray-300 text-center">{value}</p>
          {additionalInfo && (
            <p className="text-gray-400 text-sm mt-2 text-center">
              {additionalInfo}
            </p>
          )}
        </>
      )}
    </motion.div>
  );
};

export default ContactCard;
