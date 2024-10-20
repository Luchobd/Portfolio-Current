import { useContext } from "react";
import { homeEnglish } from "../../utils/Language/home/home-english";
import { homeSpanish } from "../../utils/Language/home/home-spanish";
import { PortfolioContext } from "../../context/Context";
import { DescriptionHome } from "../../components/Home/Language/DescriptionHome";
// import { useScreenCurrent } from "../../hooks/screenCurrent/useScreenCurrent";

export function Description() {
  const { portfolioState } = useContext(PortfolioContext);

  // ! Screen Width => View screen from JavaScript.
  // const { screenWidth } = useScreenCurrent();
  // const screenCurrent = screenWidth <= 1024;

  const { description } = homeEnglish;

  const { descriptionSpanish } = homeSpanish;

  const homeEnglishLanguage = portfolioState.language === "en";
  const homeSpanishLanguage = portfolioState.language === "es";

  return (
    // screenCurrent && (
    <div className="home-container-description">
      {homeEnglishLanguage && (
        <DescriptionHome about={"About me"} description={description} />
      )}
      {homeSpanishLanguage && (
        <DescriptionHome about={"Sobre mi"} description={descriptionSpanish} />
      )}
    </div>
  );
  // );
}
