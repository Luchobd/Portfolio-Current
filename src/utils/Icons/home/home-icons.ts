import { v4 as uuidv4 } from "uuid";

export interface HomeIcons {
  id: string;
  href: any;
  title: string;
  icon: string;
}

export const homeIcons: HomeIcons[] = [
  {
    id: uuidv4(),
    href: "../../../../public/CV/CV-Luis-Blanco.pdf",
    title: "Curriculum",
    icon: "bx bxs-file-pdf",
  },
  {
    id: uuidv4(),
    href: "https://www.linkedin.com/in/luis-wuilfredo-blanco-delgado-b47619207/",
    title: "LinkedIn",
    icon: "bx bxl-linkedin-square",
  },
  {
    id: uuidv4(),
    href: "https://github.com/Luchobd",
    title: "Github",
    icon: "bx bxl-github",
  },
];
