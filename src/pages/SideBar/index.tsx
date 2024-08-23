import { useSidebar } from "../../hooks/sidebar/useSidebar";
import { DarkLightMode, Languages } from "../../components/index";
import "boxicons/css/boxicons.min.css";
import logo from "../../assets/sidebar/logo/logoLB.png";
import "./styles.css";
import { SidebarLink } from "../../components/SidebarLink";

export function SideBar() {
  const { isSidebarClose, onSidebar } = useSidebar();

  return (
    <nav
      className={
        isSidebarClose ? "sidebar sidebar-close" : "sidebar sidebar-open"
      }
    >
      <header>
        <div className="sidebar-image-text">
          <span className="sidebar-image">
            <img src={logo} alt="logo" />
          </span>

          {!isSidebarClose && (
            <div className="sidebar-text sidebar-header-text">
              <span className="sidebar-name">Luis Blanco</span>
              <br />
              <span className="sidebar-profession">Software Developer</span>
            </div>
          )}
        </div>

        <Languages isSidebarClose={isSidebarClose} />

        <i
          className={
            isSidebarClose
              ? "bx bx-chevron-right sidebar-toggle-open"
              : "bx bx-chevron-right sidebar-toggle-close"
          }
          onClick={onSidebar}
        />
      </header>

      <div className="sidebar-menu-bar">
        <div className="sidebar-menu">
          <ul className="sidebar-menu-links">
            <SidebarLink
              href="#"
              isSidebarClose={isSidebarClose}
              title={"About me"}
            />

            <SidebarLink
              href="#"
              isSidebarClose={isSidebarClose}
              title={"Skills"}
            />

            <SidebarLink
              href="#"
              isSidebarClose={isSidebarClose}
              title={"Projects"}
            />

            <SidebarLink
              href="#"
              isSidebarClose={isSidebarClose}
              title={"Certificates"}
            />

            <SidebarLink
              href="#"
              isSidebarClose={isSidebarClose}
              title={"Contact form"}
            />
          </ul>
        </div>

        <DarkLightMode isSidebarClose={isSidebarClose} />
      </div>
    </nav>
  );
}
