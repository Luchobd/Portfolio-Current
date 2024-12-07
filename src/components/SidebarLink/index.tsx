interface Props {
  isSidebarClose: boolean;
  href: string;
  title: string;
  icon: React.ReactNode;
}

export function SidebarLink({ isSidebarClose, href, title, icon }: Props) {
  return (
    <li className="sidebar-nav-link">
      <a href={href}>
        <i className={`sidebar-icon`}>{icon}</i>
        <span
          className={isSidebarClose ? "sidebar-nav-text-none" : "sidebar-text"}
        >
          {title}
        </span>
      </a>
    </li>
  );
}
