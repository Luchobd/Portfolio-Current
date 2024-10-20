import { v4 as uuidv4 } from "uuid";

export interface NavbarInfo {
  id: string | number;
  name: string;
  path: string;
}

export const navbarEnglish: NavbarInfo[] = [
  {
    id: uuidv4(),
    name: "About",
    path: "#about",
  },
  {
    id: uuidv4(),
    name: "Experience",
    path: "#experience",
  },
  {
    id: uuidv4(),
    name: "Skills",
    path: "#skills",
  },
  {
    id: uuidv4(),
    name: "Projects",
    path: "#projects",
  },
  {
    id: uuidv4(),
    name: "Certificates",
    path: "#certificates",
  },
  {
    id: uuidv4(),
    name: "Contact",
    path: "#contact",
  },
];
