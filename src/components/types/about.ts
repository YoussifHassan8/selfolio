import { IconType } from "react-icons";

export interface Link {
  id: string;
  icon: IconType;
  link: string;
  preview: boolean;
}

export interface ResumeState {
  resumeLink: string;
  resumeGradient: string;
  resumeOriginalGradient: string;
  resumeColor1: string;
  resumeColor2: string;
}

export interface LinkDialogState {
  editingLink: string;
  linkInput: string;
  showDialog: boolean;
}

export interface ResumeDialogState {
  showDialog: boolean;
  isEditingColors: boolean;
}

export interface AboutProps {
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
  resumeState: ResumeState;
  setResumeState: React.Dispatch<React.SetStateAction<ResumeState>>;
  linkDialogState: LinkDialogState;
  setLinkDialogState: React.Dispatch<React.SetStateAction<LinkDialogState>>;
  resumeDialogState: ResumeDialogState;
  setResumeDialogState: React.Dispatch<React.SetStateAction<ResumeDialogState>>;
}
