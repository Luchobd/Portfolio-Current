import { v4 as uuidv4 } from "uuid";

interface SidebarInfo {
  id: string | number;
  name: string;
  icon: string;
  path: string;
}

export const sidebarSpanish: SidebarInfo[] = [
  {
    id: uuidv4(),
    name: "Acerca de mi",
    icon: "bx bx-home-alt",
    path: "#about",
  },
  {
    id: uuidv4(),
    name: "Experiencia",
    icon: "bx bx-laptop",
    path: "#experience",
  },
  {
    id: uuidv4(),
    name: "Habilidades",
    icon: "bx bx-book",
    path: "#skills",
  },
  {
    id: uuidv4(),
    name: "Proyectos",
    icon: "bx bx-bar-chart-alt-2",
    path: "#projects",
  },
  {
    id: uuidv4(),
    name: "Certificados",
    icon: "bx bx-receipt",
    path: "#certificates",
  },
  {
    id: uuidv4(),
    name: "Contacto",
    icon: "bx bx-book-content",
    path: "#contact",
  },
];
