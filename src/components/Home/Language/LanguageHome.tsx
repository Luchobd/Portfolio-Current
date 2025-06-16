import { useContext } from "react";
import { PortfolioContext } from "../../../context/Context";
import EnglishCV from "../../../assets/CV/cv-luis-blanco-english.pdf";
import SpanishCV from "../../../assets/CV/cv-luis-blanco-spanish.pdf";
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
    "https://drive.google.com/file/d/1vUFMqJkOlXqmGGmYRsK-dH1zZRGaw4X9/view?usp=drive_link";
  const viewSpanishCV =
    "https://drive.google.com/file/d/1WQmAF865jTCWL5MYaUIMfx7NKAwz1zV5/view?usp=drive_link";

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
            download="Curriculum-Luis-Blanco"
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
