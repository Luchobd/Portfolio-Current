import { GithubIcon } from "../../components/Icons";
import { MyProjects } from "../../interfaces/portfolio";
import { projectsImages } from "./projects-images";

const { project1, project2 } = projectsImages;

export const myProjectsEnglish: MyProjects[] = [
  {
    id: 1,
    title: "Details with love",
    subtitle: "(E-commerce)",
    link: "https://github.com/Luchobd/Portfolio-Current",
    description: "project description",
    image: project1,
    github: <GithubIcon />,
  },
  {
    id: 2,
    title: "My Money App",
    subtitle: "(Personal finance)",
    link: "https://github.com/Luchobd/Portfolio-Current",
    description: "project description ",
    image: project2,
    github: <GithubIcon />,
  },
];
