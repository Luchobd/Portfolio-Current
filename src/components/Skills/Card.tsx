interface CardProps {
  icon: React.ReactNode;
  name: string;
}

export function Card({ icon, name }: CardProps) {
  return (
    <div className="card-container">
      <div className="card-content">
        <i>{icon}</i>
        <p className="card-name">{name}</p>
      </div>
    </div>
  );
}
