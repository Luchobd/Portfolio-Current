import YO from "../../../assets/home/luis-w-blanco.png";

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
          <a
            className="home-button-cv"
            href="../../../../public/CV/CV-Luis-Blanco.pdf"
            target="_blank"
          >
            {view}
          </a>
          <a
            className="home-button-cv"
            href="../../../../public/CV/CV-Luis-Blanco.pdf"
            download="Curriculum-Luis-Blanco"
          >
            {download}
          </a>
        </div>
      </aside>
      <aside className="home-content">
        <picture className="home-picture">
          <img src={YO} alt="YO" className="home-image" />
        </picture>
      </aside>
    </>
  );
}
