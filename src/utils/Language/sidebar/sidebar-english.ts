import { v4 as uuidv4 } from "uuid";

export interface SidebarInfo {
  id: string | number;
  name: string;
  icon: string;
  path: string;
}

export const sidebarEnglish: SidebarInfo[] = [
  {
    id: uuidv4(),
    name: "About me",
    icon: "bx bx-home-alt",
    path: "#about",
  },
  {
    id: uuidv4(),
    name: "Work Experience",
    icon: "bx bx-laptop",
    path: "#experience",
  },
  {
    id: uuidv4(),
    name: "Tech Skills",
    icon: "bx bx-book",
    path: "#skills",
  },
  {
    id: uuidv4(),
    name: "Personal Projects",
    icon: "bx bx-bar-chart-alt-2",
    path: "#projects",
  },
  {
    id: uuidv4(),
    name: "Certificates",
    icon: "bx bx-receipt",
    path: "#certificates",
  },
  {
    id: uuidv4(),
    name: "Contact Form",
    icon: "bx bx-book-content",
    path: "#contact",
  },
];
