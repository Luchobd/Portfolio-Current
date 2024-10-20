import { v4 as uuidv4 } from "uuid";

interface NavbarInfo {
  id: string | number;
  name: string;
  icon?: string;
  path: string;
}

export const navbarSpanish: NavbarInfo[] = [
  {
    id: uuidv4(),
    name: "Sobre mi",
    path: "#about",
  },
  {
    id: uuidv4(),
    name: "Experiencia",
    path: "#experience",
  },
  {
    id: uuidv4(),
    name: "Habilidades",
    path: "#skills",
  },
  {
    id: uuidv4(),
    name: "Proyectos",
    path: "#projects",
  },
  {
    id: uuidv4(),
    name: "Certificados",
    path: "#certificates",
  },
  {
    id: uuidv4(),
    name: "Contacto",
    path: "#contact",
  },
];
