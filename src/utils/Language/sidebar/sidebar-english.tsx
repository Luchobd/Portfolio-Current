// import React from "react"
import { v4 as uuidv4 } from "uuid";
import {
  HomeIcon,
  ExperienceIcon,
  SkillIcon,
  ProjectIcon,
  CertificatesIcon,
  ContactIcon,
} from "../../../components/Icons";

export interface SidebarInfo {
  id: string | number;
  name: string;
  icon: React.ReactNode;
  path: string;
}

export const sidebarEnglish: SidebarInfo[] = [
  {
    id: uuidv4(),
    name: "About me",
    icon: <HomeIcon />,
    path: "#about",
  },
  {
    id: uuidv4(),
    name: "Work Experience",
    icon: <ExperienceIcon />,
    path: "#experience",
  },
  {
    id: uuidv4(),
    name: "Tech Skills",
    icon: <SkillIcon />,
    path: "#skills",
  },
  {
    id: uuidv4(),
    name: "Personal Projects",
    icon: <ProjectIcon />,
    path: "#projects",
  },
  {
    id: uuidv4(),
    name: "Certificates",
    icon: <CertificatesIcon />,
    path: "#certificates",
  },
  {
    id: uuidv4(),
    name: "Contact Form",
    icon: <ContactIcon />,
    path: "#contact",
  },
];
