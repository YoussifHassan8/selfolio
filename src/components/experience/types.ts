import { IconType } from "react-icons";

export interface ExperienceItem {
  date: string;
  title: string;
  foundation: string;
  description: string;
  left: boolean;
  iconName: string;
}

export interface IconOption {
  name: string;
  component: IconType;
  label: string;
} 