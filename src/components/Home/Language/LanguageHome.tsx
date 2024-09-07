import YO from "../../../assets/home/luis-w-blanco.png";

interface Props {
  hi: string;
  name: string;
  dev: string;
  phrase: string;
  view: string;
  download: string;
  description_one: string;
  description_two: string;
  description_three: string;
}

export function LanguageHome({
  hi,
  name,
  dev,
  phrase,
  view,
  download,
  description_one,
  description_two,
  description_three,
}: Props) {
  return (
    <>
      <aside className="home-title home-space">
        <picture className="home-picture">
          <img src={YO} alt="YO" width={200} className="home-image"/>
        </picture>
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
      <aside className="home-content home-space">
        <p className="home-description">{description_one}</p>
        <br />
        <p className="home-description">{description_two}</p>
        <br />
        <p className="home-description">{description_three}</p>
      </aside>
    </>
  );
}
