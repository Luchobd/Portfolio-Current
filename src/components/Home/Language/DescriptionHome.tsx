interface Props {
  about: string;
  description: string;
}

export function DescriptionHome({ about, description }: Props) {
  return (
    <section className="home-content-under">
      <h2 className="home-title-under">{about}</h2>
      <br />
      <div className="home-space-under">
        <span className="home-border-under"></span>
        <p className="home-description-under">{description}</p>
      </div>
    </section>
  );
}
