import { createContext, useContext } from "react";
import { ContactInfo } from "../../contact/types";

type contactsContextType = {
  contactInfo: ContactInfo;
  setContactInfo: React.Dispatch<React.SetStateAction<ContactInfo>>;
  contactGradient: string;
  setContactGradient: React.Dispatch<React.SetStateAction<string>>;
};

export const contactsContext = createContext<contactsContextType | undefined>(
  undefined
);

// Custom hook for cleaner access
export const useSocialLinks = () => {
  const context = useContext(contactsContext);
  if (!context) {
    throw new Error("useSocialLinks must be used within a SocialLinksProvider");
  }
  return context;
};
