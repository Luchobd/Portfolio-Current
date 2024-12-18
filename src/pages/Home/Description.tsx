import { useContext } from "react";
import { homeEnglish } from "../../utils/Language/home/home-english";
import { homeSpanish } from "../../utils/Language/home/home-spanish";
import { PortfolioContext } from "../../context/Context";
import { DescriptionHome } from "../../components/Home/Language/DescriptionHome";

export function Description() {
  const { portfolioState } = useContext(PortfolioContext);

  const { description } = homeEnglish;

  const { descriptionSpanish } = homeSpanish;

  const homeEnglishLanguage = portfolioState.language === "en";
  const homeSpanishLanguage = portfolioState.language === "es";

  return (
    <div className="home-container-description" id="about">
      {homeEnglishLanguage && (
        <DescriptionHome about={"About me"} description={description} />
      )}
      {homeSpanishLanguage && (
        <DescriptionHome about={"Sobre mi"} description={descriptionSpanish} />
      )}
    </div>
  );
}
