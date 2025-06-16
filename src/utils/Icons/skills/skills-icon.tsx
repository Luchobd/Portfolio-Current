import {
  HtmlIcon,
  CssIcon,
  JavascriptIcon,
  TypescriptIcon,
  ReactIcon,
  NodeIcon,
  FigmaIcon,
  MongoIcon,
  GitIcon,
  PgsqlIcon,
  NextIcon,
  VtexIcon,
  NestIcon,
  ExpressIcon,
  JestIcon
} from "../../../components/Icons";
import { v4 as uuidv4 } from "uuid";

export interface SkillsIcons {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export const skillIcons: SkillsIcons[] = [
  {
    id: uuidv4(),
    name: "HTML",
    icon: <HtmlIcon />,
  },
  {
    id: uuidv4(),
    name: "CSS",
    icon: <CssIcon />,
  },
  {
    id: uuidv4(),
    name: "JavaScript",
    icon: <JavascriptIcon />,
  },
  {
    id: uuidv4(),
    name: "TypeScript",
    icon: <TypescriptIcon />,
  },
  {
    id: uuidv4(),
    name: "React",
    icon: <ReactIcon />,
  },
  {
    id: uuidv4(),
    name: "React Native",
    icon: <ReactIcon />,
  },
  {
    id: uuidv4(),
    name: "Next",
    icon: <NextIcon />,
  },
  {
    id: uuidv4(),
    name: "Figma",
    icon: <FigmaIcon />,
  },
  {
    id: uuidv4(),
    name: "Node",
    icon: <NodeIcon />,
  },
  {
    id: uuidv4(),
    name: "Express",
    icon: <ExpressIcon />,
  },
  {
    id: uuidv4(),
    name: "Nest",
    icon: <NestIcon />,
  },
  {
    id: uuidv4(),
    name: "Jest",
    icon: <JestIcon />,
  },
  {
    id: uuidv4(),
    name: "Git",
    icon: <GitIcon />,
  },
  {
    id: uuidv4(),
    name: "MongoDB",
    icon: <MongoIcon />,
  },
  {
    id: uuidv4(),
    name: "PostgreSQL",
    icon: <PgsqlIcon />,
  },
  {
    id: uuidv4(),
    name: "Vtex IO",
    icon: <VtexIcon />,
  },
];
