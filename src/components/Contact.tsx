import { useContext, useState } from "react";
import { motion } from "framer-motion";
import TitleTwo from "./ui/TitleTwo";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import ContactCard from "./contact/ContactCard";
import { ContactInfo, EditingState } from "./contact/types";
import { contactsContext } from "./about/context/contactContext";

const Contact = () => {
  const contactContext = useContext(contactsContext);
  const contactGradient = contactContext?.contactGradient || "";
  const setContactGradient = contactContext?.setContactGradient || (() => {});
  const defaultContactInfo: ContactInfo = {
    email: "youssifh383@gmail.com",
    phone: "+2011 4962 6908",
    location: "Cairo, Egypt",
  };

  const contactInfo = contactContext?.contactInfo || defaultContactInfo;
  const setContactInfo = contactContext?.setContactInfo || (() => {});
  const [editing, setEditing] = useState<EditingState>({
    email: false,
    phone: false,
    location: false,
  });

  const [tempValues, setTempValues] = useState<ContactInfo>({ ...contactInfo });

  const handleChange = (field: keyof ContactInfo, value: string) => {
    setTempValues({
      ...tempValues,
      [field]: value,
    });
  };

  const startEditing = (field: keyof EditingState) => {
    setEditing({ ...editing, [field]: true });
    setTempValues({ ...contactInfo });
  };

  const saveField = (field: keyof ContactInfo) => {
    setContactInfo({
      ...contactInfo,
      [field]: tempValues[field],
    });
    setEditing({ ...editing, [field]: false });
  };

  const cancelEditing = (field: keyof EditingState) => {
    setEditing({ ...editing, [field]: false });
  };

  return (
    <section
      id="contact"
      className="relative my-32 mx-auto max-w-6xl px-4 space-y-10"
    >
      <TitleTwo gradient={contactGradient} setGradient={setContactGradient}>
        Get In Touch
      </TitleTwo>

      <p className="text-lg font-medium text-white/60 max-w-3xl text-center mx-auto mb-12">
        I'm always open to new opportunities and collaborations. Feel free to
        reach out through any of these channels.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <ContactCard
          title="Email"
          icon={<FiMail className="text-4xl text-blue-500" />}
          value={contactInfo.email}
          isEditing={editing.email}
          tempValue={tempValues.email}
          onEdit={() => startEditing("email")}
          onSave={() => saveField("email")}
          onCancel={() => cancelEditing("email")}
          onChange={(value) => handleChange("email", value)}
          color={{
            primary: "text-blue-400",
            secondary: "bg-blue-500/20",
            hover: "bg-blue-500/30",
          }}
          link={{
            href: `mailto:${contactInfo.email}`,
          }}
        />

        <ContactCard
          title="Phone & WhatsApp"
          icon={<FiPhone className="text-4xl text-green-500" />}
          value={contactInfo.phone}
          isEditing={editing.phone}
          tempValue={tempValues.phone}
          onEdit={() => startEditing("phone")}
          onSave={() => saveField("phone")}
          onCancel={() => cancelEditing("phone")}
          onChange={(value) => handleChange("phone", value)}
          color={{
            primary: "text-green-400",
            secondary: "bg-green-500/20",
            hover: "bg-green-500/30",
          }}
          link={{
            href: `https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, "")}`,
            icon: <FaWhatsapp className="text-green-500 text-xl" />,
          }}
        />

        <ContactCard
          title="Location"
          icon={<FiMapPin className="text-4xl text-purple-500" />}
          value={contactInfo.location}
          isEditing={editing.location}
          tempValue={tempValues.location}
          onEdit={() => startEditing("location")}
          onSave={() => saveField("location")}
          onCancel={() => cancelEditing("location")}
          onChange={(value) => handleChange("location", value)}
          color={{
            primary: "text-purple-400",
            secondary: "bg-purple-500/20",
            hover: "bg-purple-500/30",
          }}
          additionalInfo="Available for remote work worldwide"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold mb-4">
          Looking Forward to Hearing from You!
        </h3>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Whether you have a project in mind, a job opportunity, or just want to
          say hello, don't hesitate to reach out. I typically respond within 24
          hours.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
