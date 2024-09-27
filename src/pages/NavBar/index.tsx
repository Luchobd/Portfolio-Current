import { Fragment, useContext } from "react";
import {
  NavbarInfo,
  navbarEnglish,
} from "../../utils/Language/navbar/navbar-english";
import { navbarSpanish } from "../../utils/Language/navbar/navbar-spanish";
import { PortfolioContext } from "../../context/Context";
import { NavbarLink } from "../../components/NavbarLink";
import logo from "../../assets/sidebar/logo/logoLB.png";
import { HomeIcons, homeIcons } from "../../utils/Icons/home/home-icons";
import "./styles.css";
import { DarkLightMode, Languages } from "../../components";

export function NavBar() {
  const { portfolioState } = useContext(PortfolioContext);
  const sidebarLanguage =
    portfolioState.language === "en" ? navbarEnglish : navbarSpanish;
  return (
    <nav className="navbar-menu">
      <div className="navbar-menu-container">
        <span className="navbar-logo">
          <img src={logo} alt="logo" />
        </span>

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
          {homeIcons.map((social: HomeIcons) => (
            <Fragment key={social.id}>
              <a href={social.href} target="_blank" title={social.title}>
                <i className={`${social.icon} navbar-icon`} />
              </a>
            </Fragment>
          ))}
        </section>
      </div>
    </nav>
  );
}
