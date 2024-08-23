interface Props {
  isSidebarClose: boolean;
  href: string;
  title: string;
  icon: string;
}

export function SidebarLink({ isSidebarClose, href, title, icon }: Props) {
  return (
    <li className="sidebar-nav-link">
      <a href={href}>
        <i className={`${icon} sidebar-icon`} />
        <span
          className={isSidebarClose ? "sidebar-nav-text-none" : "sidebar-text"}
        >
          {title}
        </span>
      </a>
    </li>
  );
}
