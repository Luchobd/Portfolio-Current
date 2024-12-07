import { v4 as uuidv4 } from "uuid";
import { CVIcon, LinkedInIcon, GithubIcon } from "../../../components/Icons";

export interface HomeIcons {
  id: string;
  href: string;
  title: string;
  icon: React.ReactNode;
}

export const homeIcons: HomeIcons[] = [
  {
    id: uuidv4(),
    href: "../../../../public/CV/CV-Luis-Blanco.pdf",
    title: "Curriculum",
    icon: <CVIcon className={`navbar-icon`} />,
  },
  {
    id: uuidv4(),
    href: "https://www.linkedin.com/in/luis-wuilfredo-blanco-delgado-b47619207/",
    title: "LinkedIn",
    icon: <LinkedInIcon className={`navbar-icon`} />,
  },
  {
    id: uuidv4(),
    href: "https://github.com/Luchobd",
    title: "Github",
    icon: <GithubIcon className={`navbar-icon`} />,
  },
];
