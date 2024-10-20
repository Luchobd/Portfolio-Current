import { useContext } from "react";
import { Cards } from "../../components/Skills";
import { PortfolioContext } from "../../context/Context";
import "./styles.css";

export function Skills() {
  const { portfolioState } = useContext(PortfolioContext);

  const homeSpanishLanguage = portfolioState.language === "es";

  const title = homeSpanishLanguage ? "Habilidades Técnicas" : "Tech Skills";
  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-title">{title}</h2>
      <br />
      <Cards />
    </div>
  );
}
