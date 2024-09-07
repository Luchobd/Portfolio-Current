import "boxicons/css/boxicons.min.css";
import "./styles.css";
import { Fragment, useContext } from "react";
import { HomeIcons, homeIcons } from "../../utils/Icons/home/home-icons";
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
    description_one,
    description_two,
    description_three,
  } = homeEnglish;

  const {
    hiSpanish,
    nameSpanish,
    devSpanish,
    phraseSpanish,
    viewSpanish,
    downloadSpanish,
    descriptionSpanish_one,
    descriptionSpanish_two,
    descriptionSpanish_three,
  } = homeSpanish;

  const homeEnglishLanguage = portfolioState.language === "en";
  const homeSpanishLanguage = portfolioState.language === "es";

  return (
    <main className="home">
      <section className="home-social-media">
        {homeIcons.map((social: HomeIcons) => (
          <Fragment key={social.id}>
            <a href={social.href} target="_blank" title={social.title}>
              <i className={`${social.icon} home-icon`} />
            </a>
          </Fragment>
        ))}
      </section>
      <section className="home-about">
        {homeEnglishLanguage && (
          <LanguageHome
            hi={hi}
            name={name}
            dev={dev}
            phrase={phrase}
            view={view}
            download={download}
            description_one={description_one}
            description_two={description_two}
            description_three={description_three}
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
            description_one={descriptionSpanish_one}
            description_two={descriptionSpanish_two}
            description_three={descriptionSpanish_three}
          />
        )}
      </section>
    </main>
  );
}
