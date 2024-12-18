import {
  HtmlIcon,
  CssIcon,
  JavascriptIcon,
  TypescriptIcon,
  ReactIcon,
  ReactNativeIcon,
  NodeIcon,
  FigmaIcon,
  MongoIcon,
  GitIcon,
  PgsqlIcon,
  GraphqlIcon,
} from "../../../components/Icons";
import { v4 as uuidv4 } from "uuid";
import { NextIcon } from "../../../components/Icons/library/skills/NextIcon";
import { VtexIcon } from "../../../components/Icons/library/skills/VtexIcon";

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
    icon: <ReactNativeIcon />,
  },
  {
    id: uuidv4(),
    name: "Node",
    icon: <NodeIcon />,
  },
  {
    id: uuidv4(),
    name: "Figma",
    icon: <FigmaIcon />,
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
  // {
  // id: uuidv4(),
  // name: "GraphQL",
  // icon: <GraphqlIcon />,
  // },
  {
    id: uuidv4(),
    name: "Next",
    icon: <NextIcon />,
  },
  {
    id: uuidv4(),
    name: "Vtex IO",
    icon: <VtexIcon />,
  },
];
