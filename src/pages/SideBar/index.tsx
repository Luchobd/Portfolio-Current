import { Fragment, useContext } from "react";
import { PortfolioContext } from "../../context/Context";
import { useSidebar } from "../../hooks/sidebar/useSidebar";
import { DarkLightMode, Languages } from "../../components/index";
import logo from "../../assets/sidebar/logo/logoLB.png";
import "./styles.css";
import { SidebarLink } from "../../components/SidebarLink";
import {
  sidebarEnglish,
  SidebarInfo,
} from "../../utils/Language/sidebar/sidebar-english";
import { sidebarSpanish } from "../../utils/Language/sidebar/sidebar-spanish";
import { ChevronIcon } from "../../components/Icons";
import { useNetworkIcons } from "../../utils/Icons/home/useNetworkIcons";
import { NetworkIconsProps } from "../../interfaces/networking";

export function SideBar() {
  const { portfolioState } = useContext(PortfolioContext);
  const { isSidebarClose, onSidebar } = useSidebar();
  const sidebarLanguage =
    portfolioState.language === "en" ? sidebarEnglish : sidebarSpanish;
  const { networkIcons } = useNetworkIcons();

  return (
    <nav
      className={
        isSidebarClose ? "sidebar sidebar-close" : "sidebar sidebar-open"
      }
    >
      <header>
        <div className="sidebar-image-text">
          <a href="#home" className="sidebar-image">
            <img src={logo} alt="logo" />
          </a>

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
            isSidebarClose ? "sidebar-toggle-open" : "sidebar-toggle-close"
          }
          onClick={onSidebar}
        >
          <ChevronIcon />
        </i>
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

        <div
          className="navbar-social-media-sidebar"
          style={{ alignItems: isSidebarClose ? "center" : "flex-start" }}
        >
          {networkIcons.map((social: NetworkIconsProps) => (
            <Fragment key={social.id}>
              <a href={social.href} target="_blank" title={social.title}>
                <i>{social.icon}</i>
              </a>
            </Fragment>
          ))}
        </div>

        <DarkLightMode isSidebarClose={isSidebarClose} />
      </div>
    </nav>
  );
}
