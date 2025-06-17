import { useContext } from "react";
import { PortfolioContext } from "../../../context/Context";
import EnglishCV from "../../../assets/CV/CV-LB-English.pdf";
import SpanishCV from "../../../assets/CV/CV-LB-Spanish.pdf";
import DevComic from "../../../assets/home/LuchoDev.png";

interface Props {
  hi: string;
  name: string;
  dev: string;
  phrase: string;
  view: string;
  download: string;
  description: string;
}

export function LanguageHome({ hi, name, dev, phrase, view, download }: Props) {
  const { portfolioState } = useContext(PortfolioContext);
  const isLanguageEnglish = portfolioState.language === "en";

  const downloadCV = isLanguageEnglish ? EnglishCV : SpanishCV;

  const viewEnglishCV =
    "https://drive.google.com/file/d/1mgAcfahL0NbnzD0ccyCDGy8qdSc6TwSF/view?usp=drive_link";
  const viewSpanishCV =
    "https://drive.google.com/file/d/1hmA8JfrVGNtZ4bQlFLhhJfC3kii526Kr/view?usp=drive_link";

  const showCV = isLanguageEnglish ? viewEnglishCV : viewSpanishCV;
  return (
    <>
      <aside className="home-title home-space">
        <div className="home-hi-name">
          <span className="home-hi">{hi}</span>
          <h2 className="home-name">{name}</h2>
        </div>
        <h1 className="home-dev">{dev}</h1>
        <small className="home-phrase">{phrase}</small>
        <div className="home-view-download">
          <a className="home-button-cv" href={showCV} target="_blank">
            {view}
          </a>
          <a
            className="home-button-cv"
            href={downloadCV}
            download="curriculum_luis_blanco"
          >
            {download}
          </a>
        </div>
      </aside>
      <aside className="home-content">
        <picture className="home-picture">
          <img src={DevComic} alt="Luis-Blanco-Dev" className="home-image" />
        </picture>
      </aside>
    </>
  );
}
