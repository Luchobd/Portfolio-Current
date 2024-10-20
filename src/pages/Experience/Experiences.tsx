import { useContext } from "react";
import { PortfolioContext } from "../../context/Context";

interface Props {
  title: string;
  subtitle: string;
  date?: number;
  description: string;
  technologies?: string;
}

export function Experiences({
  description,
  subtitle,
  title,
  date,
  technologies,
}: Props) {
  const { portfolioState } = useContext(PortfolioContext);
  const homeSpanishLanguage = portfolioState.language === "es";

  const TechText = homeSpanishLanguage
    ? "Tecnologías utilizadas"
    : "Technologies used";

  return (
    <div>
      <h2 className="experience-component-title">{title}</h2>
      <h3 className="experience-component-subtitle">{subtitle}</h3>
      <small className="experience-component-date">{date}</small>
      <p className="experience-component-description">{description}</p>
      <span className="experience-component-subtitle">
        <strong>{TechText}:</strong> {technologies}
      </span>
    </div>
  );
}
