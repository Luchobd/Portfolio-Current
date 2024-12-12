import { GithubIcon } from "../../components/Icons";
import { MyProjects } from "../../interfaces/portfolio";
import { projectsImages } from "./projects-images";

const { project1, project2 } = projectsImages;

export const myProjectsSpanish: MyProjects[] = [
  {
    id: 1,
    title: "Detallitos con amor",
    subtitle: "(comercio electrónico)",
    link: "https://github.com/Luchobd/Portfolio-Current",
    description: "Descripción del proyecto",
    image: project1,
    github: <GithubIcon />,
  },
  {
    id: 2,
    title: "Mi Dinero App",
    subtitle: "(Finanzas personales)",
    link: "https://github.com/Luchobd/Portfolio-Current",
    description: "Descripción del proyecto",
    image: project2,
    github: <GithubIcon />,
  },
];
