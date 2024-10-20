interface Props {
  href: string;
  title: string;
}

export function NavbarLink({ href, title }: Props) {
  return (
    <li className="navbar-nav-link">
      <a href={href}>
        <span>{title}</span>
      </a>
    </li>
  );
}
