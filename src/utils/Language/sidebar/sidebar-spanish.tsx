import { v4 as uuidv4 } from "uuid";
import {
  HomeIcon,
  ExperienceIcon,
  SkillIcon,
  ProjectIcon,
  CertificatesIcon,
  ContactIcon,
} from "../../../components/Icons";

interface SidebarInfo {
  id: string | number;
  name: string;
  icon: React.ReactNode;
  path: string;
}

export const sidebarSpanish: SidebarInfo[] = [
  {
    id: uuidv4(),
    name: "Acerca de mi",
    icon: <HomeIcon />,
    path: "#about",
  },
  {
    id: uuidv4(),
    name: "Experiencia",
    icon: <ExperienceIcon />,
    path: "#experience",
  },
  {
    id: uuidv4(),
    name: "Habilidades",
    icon: <SkillIcon />,
    path: "#skills",
  },
  {
    id: uuidv4(),
    name: "Proyectos",
    icon: <ProjectIcon />,
    path: "#projects",
  },
  {
    id: uuidv4(),
    name: "Certificados",
    icon: <CertificatesIcon />,
    path: "#certificates",
  },
  {
    id: uuidv4(),
    name: "Contacto",
    icon: <ContactIcon />,
    path: "#contact",
  },
];
