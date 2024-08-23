interface Props {
  isSidebarClose: boolean;
  href: string;
  title: string;
}

export function SidebarLink({ isSidebarClose, href, title }: Props) {
  return (
    <li className="sidebar-nav-link">
      <a href={href}>
        <i className="bx bx-home-alt sidebar-icon" />
        <span
          className={isSidebarClose ? "sidebar-nav-text-none" : "sidebar-text"}
        >
          {title}
        </span>
      </a>
    </li>
  );
}
