import { v4 as uuidv4 } from "uuid";

export interface SkillsIcons {
  id: string;
  name: string;
  icon: string;
}

export const skillIcons: SkillsIcons[] = [
  {
    id: uuidv4(),
    name: "HTML",
    icon: "bx bxl-html5",
  },
  {
    id: uuidv4(),
    name: "CSS",
    icon: "bx bxl-css3",
  },
  {
    id: uuidv4(),
    name: "JavaScript",
    icon: "bx bxl-javascript",
  },
  {
    id: uuidv4(),
    name: "TypeScript",
    icon: "bx bxl-typescript",
  },
  {
    id: uuidv4(),
    name: "React",
    icon: "bx bxl-react",
  },
  {
    id: uuidv4(),
    name: "React Native",
    icon: "bx bxl-react",
  },
  {
    id: uuidv4(),
    name: "Node",
    icon: "bx bxl-nodejs",
  },
  {
    id: uuidv4(),
    name: "Figma",
    icon: "bx bxl-figma",
  },
  {
    id: uuidv4(),
    name: "MongoDB",
    icon: "bx bxl-mongodb",
  },
  {
    id: uuidv4(),
    name: "PostgreSQL",
    icon: "bx bxl-postgresql",
  },
  {
    id: uuidv4(),
    name: "Git",
    icon: "bx bxl-git",
  },
  {
    id: uuidv4(),
    name: "GraphQL",
    icon: "bx bxl-graphql",
  },
];
