import { useContext } from "react";
import { PortfolioContext } from "../../../context/Context";
import { v4 as uuidv4 } from "uuid";
import { CVIcon, LinkedInIcon, GithubIcon } from "../../../components/Icons";
import { NetworkIconsProps } from "../../../interfaces/networking";

export const useNetworkIcons = () => {
  const { portfolioState } = useContext(PortfolioContext);
  
  const EnglishCV =
  "https://drive.google.com/file/d/1mgAcfahL0NbnzD0ccyCDGy8qdSc6TwSF/view?usp=drive_link";
  const SpanishCV =
  "https://drive.google.com/file/d/1hmA8JfrVGNtZ4bQlFLhhJfC3kii526Kr/view?usp=drive_link";

  const isLanguageEnglish = portfolioState.language === "en";
  const showCV = isLanguageEnglish ? EnglishCV : SpanishCV;

  const networkIcons: NetworkIconsProps[] = [
    {
      id: uuidv4(),
      href: showCV,
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

  return { networkIcons };
};
