interface Props {
  description_one: string;
  description_two: string;
  description_three: string;
}

export function DescriptionHome({
  description_one,
  description_two,
  description_three,
}: Props) {
  return (
    <section className="home-content-under">
      <p className="home-description-under home-description-1">
        {description_one}
      </p>
      <br />
      <p className="home-description-under home-description-2">
        {description_two}
      </p>
      <br />
      <p className="home-description-under home-description-3">
        {description_three}
      </p>
    </section>
  );
}
