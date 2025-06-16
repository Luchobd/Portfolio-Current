import { Fragment, useContext } from "react";
import {
  NavbarInfo,
  navbarEnglish,
} from "../../utils/Language/navbar/navbar-english";
import { navbarSpanish } from "../../utils/Language/navbar/navbar-spanish";
import { PortfolioContext } from "../../context/Context";
import { NavbarLink } from "../../components/NavbarLink";
import logo from "../../assets/sidebar/logo/logoLB.png";
import { useNetworkIcons } from "../../utils/Icons/home/useNetworkIcons";
import { NetworkIconsProps } from "../../interfaces/networking";
import { DarkLightMode, Languages } from "../../components";
import "./styles.css";

export function NavBar() {
  const { portfolioState } = useContext(PortfolioContext);
  const sidebarLanguage =
    portfolioState.language === "en" ? navbarEnglish : navbarSpanish;
  const { networkIcons } = useNetworkIcons();

  return (
    <nav className="navbar-menu">
      <div className="navbar-menu-container">
        <a href="#home" className="navbar-logo">
          <img src={logo} alt="logo" />
        </a>

        <ul className="navbar-menu-links">
          {sidebarLanguage.map((info: NavbarInfo) => (
            <div key={info.id}>
              <NavbarLink href={info.path} title={info.name} />
            </div>
          ))}
        </ul>

        <section className="navbar-language-dark-light">
          <Languages isShowText={false} />
          <DarkLightMode isShowText={false} />
        </section>

        <section className="navbar-social-media">
          {networkIcons.map((social: NetworkIconsProps) => (
            <Fragment key={social.id}>
              <a href={social.href} target="_blank" title={social.title}>
                <i>{social.icon}</i>
              </a>
            </Fragment>
          ))}
        </section>
      </div>
    </nav>
  );
}
