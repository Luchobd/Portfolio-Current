interface CardProps {
  icon: string;
  name: string;
  indexIcon: number;
}

export function Card({ icon, name, indexIcon }: CardProps) {
  return (
    <div className="card-container">
      <div className="card-content">
        <i className={`${icon} card-icon card-icon-${indexIcon}`} />
        <p className="card-name">{name}</p>
      </div>
    </div>
  );
}
