import "./styles.css";
import { useContext } from "react";
import { PortfolioContext } from "../../context/Context";
import { homeEnglish } from "../../utils/Language/home/home-english";
import { homeSpanish } from "../../utils/Language/home/home-spanish";
import { LanguageHome } from "../../components/Home/Language/LanguageHome";

export function Home() {
  const { portfolioState } = useContext(PortfolioContext);
  const {
    hi,
    name,
    dev,
    phrase,
    view,
    download,
    description,
  } = homeEnglish;

  const {
    hiSpanish,
    nameSpanish,
    devSpanish,
    phraseSpanish,
    viewSpanish,
    downloadSpanish,
    descriptionSpanish,
  } = homeSpanish;

  const homeEnglishLanguage = portfolioState.language === "en";
  const homeSpanishLanguage = portfolioState.language === "es";

  return (
    <main className="home">
      <section className="home-about">
        {homeEnglishLanguage && (
          <LanguageHome
            hi={hi}
            name={name}
            dev={dev}
            phrase={phrase}
            view={view}
            download={download}
            description={description}
          />
        )}
        {homeSpanishLanguage && (
          <LanguageHome
            hi={hiSpanish}
            name={nameSpanish}
            dev={devSpanish}
            phrase={phraseSpanish}
            view={viewSpanish}
            download={downloadSpanish}
            description={descriptionSpanish}
          />
        )}
      </section>
    </main>
  );
}
