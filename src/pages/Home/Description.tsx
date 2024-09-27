import { useContext } from "react";
import { homeEnglish } from "../../utils/Language/home/home-english";
import { homeSpanish } from "../../utils/Language/home/home-spanish";
import { PortfolioContext } from "../../context/Context";
import { DescriptionHome } from "../../components/Home/Language/DescriptionHome";
import { useScreenCurrent } from "../../hooks/screenCurrent/useScreenCurrent";

export function Description() {
  const { portfolioState } = useContext(PortfolioContext);
  const { screenWidth } = useScreenCurrent();
  const screenCurrent = screenWidth <= 1024;

  const { description_one, description_two, description_three } = homeEnglish;

  const {
    descriptionSpanish_one,
    descriptionSpanish_two,
    descriptionSpanish_three,
  } = homeSpanish;

  const homeEnglishLanguage = portfolioState.language === "en";
  const homeSpanishLanguage = portfolioState.language === "es";

  return (
    screenCurrent && (
      <div className="home-container-description">
        {homeEnglishLanguage && (
          <DescriptionHome
            description_one={description_one}
            description_two={description_two}
            description_three={description_three}
          />
        )}
        {homeSpanishLanguage && (
          <DescriptionHome
            description_one={descriptionSpanish_one}
            description_two={descriptionSpanish_two}
            description_three={descriptionSpanish_three}
          />
        )}
      </div>
    )
  );
}
