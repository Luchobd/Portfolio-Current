import { useContext } from "react";
import { PortfolioContext } from "../../context/Context";
import { useSidebar } from "../../hooks/sidebar/useSidebar";
import { DarkLightMode, Languages } from "../../components/index";
import "boxicons/css/boxicons.min.css";
import logo from "../../assets/sidebar/logo/logoLB.png";
import "./styles.css";
import { SidebarLink } from "../../components/SidebarLink";
import {
  sidebarEnglish,
  SidebarInfo,
} from "../../utils/Language/sidebar/sidebar-english";
import { sidebarSpanish } from "../../utils/Language/sidebar/sidebar-spanish";

export function SideBar() {
  const { portfolioState } = useContext(PortfolioContext);
  const { isSidebarClose, onSidebar } = useSidebar();
  const sidebarLanguage =
    portfolioState.language === "en" ? sidebarEnglish : sidebarSpanish;
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
            {sidebarLanguage.map((info: SidebarInfo) => (
              <div key={info.id}>
                <SidebarLink
                  href={info.path}
                  icon={info.icon}
                  title={info.name}
                  isSidebarClose={isSidebarClose}
                />
              </div>
            ))}
          </ul>
        </div>

        <DarkLightMode isSidebarClose={isSidebarClose} />
      </div>
    </nav>
  );
}
