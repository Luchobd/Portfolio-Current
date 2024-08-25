interface Props {
  href: string;
  title: string;
  icon: string;
  download: string;
  index: number;
}

export function SocialMediaIcons({
  href,
  icon,
  title,
}: Props) {
  return (
    <>
      <a
        href={href}
        target="_blank"
        title={title}
      >
        <i className={`${icon} home-icon`} />
      </a>
    </>
  );
}
