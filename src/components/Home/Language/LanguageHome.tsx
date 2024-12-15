import { useContext } from "react";
import { PortfolioContext } from "../../../context/Context";
import EnglishCV from "../../../assets/CV/cv-luis-blanco-english.pdf";
import SpanishCV from "../../../assets/CV/cv-luis-blanco-spanish.pdf";
import Dev from "../../../assets/home/luis-w-blanco.png";

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
          <a className="home-button-cv" href={downloadCV} target="_blank">
            {view}
          </a>
          <a
            className="home-button-cv"
            href={downloadCV}
            download="Curriculum-Luis-Blanco"
          >
            {download}
          </a>
        </div>
      </aside>
      <aside className="home-content">
        <picture className="home-picture">
          <img src={Dev} alt="Luis-Blanco-Dev" className="home-image" />
        </picture>
      </aside>
    </>
  );
}
