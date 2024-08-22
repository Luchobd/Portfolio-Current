import "./styles.css";
import logo from "../../assets/sidebar/logo/logoLB.png";
import "boxicons/css/boxicons.min.css";
import { useContext, useState } from "react";
import { PortfolioContext } from "../../context/Context";

export function SideBar() {
  const [isDarkLight, setIsDarkLight] = useState("dark");
  const [isSidebarClose, setIsSidebarClose] = useState(true);

  const { toggleResponsive } = useContext(PortfolioContext);

  const onModeDarkLight = () => {
    setIsDarkLight((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const onSidebar = () => {
    setIsSidebarClose(!isSidebarClose);
    toggleResponsive(isSidebarClose);
  };

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

        <select id="options" name="options" className="sidebar-select">
          <option value="option1" className="sidebar-select-option">
            🇺🇸 {!isSidebarClose && <>English</>}
          </option>
          <option value="option2" className="sidebar-select-option">
            🇪🇸 {!isSidebarClose && <>Español</>}
          </option>
        </select>

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
            <li className="sidebar-nav-link">
              <a href="#">
                <i className="bx bx-home-alt sidebar-icon" />
                <span
                  className={
                    isSidebarClose ? "sidebar-nav-text-none" : "sidebar-text"
                  }
                >
                  About me
                </span>
              </a>
            </li>

            <li className="sidebar-nav-link">
              <a href="#">
                <i className="bx bx-book sidebar-icon" />
                <span
                  className={
                    isSidebarClose ? "sidebar-nav-text-none" : "sidebar-text"
                  }
                >
                  Skills
                </span>
              </a>
            </li>

            <li className="sidebar-nav-link">
              <a href="#">
                <i className="bx bx-bar-chart-alt-2 sidebar-icon" />
                <span
                  className={
                    isSidebarClose ? "sidebar-nav-text-none" : "sidebar-text"
                  }
                >
                  Projects
                </span>
              </a>
            </li>

            <li className="sidebar-nav-link">
              <a href="#">
                <i className="bx bx-receipt sidebar-icon" />
                <span
                  className={
                    isSidebarClose ? "sidebar-nav-text-none" : "sidebar-text"
                  }
                >
                  Certificates
                </span>
              </a>
            </li>

            <li className="sidebar-nav-link">
              <a href="#">
                <i className="bx bx-book-content sidebar-icon" />
                <span
                  className={
                    isSidebarClose ? "sidebar-nav-text-none" : "sidebar-text"
                  }
                >
                  Contact form
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar-bottom-content">
          <li className="sidebar-mode">
            <div className="sidebar-moon-sun" onClick={onModeDarkLight}>
              {isDarkLight === "dark" ? (
                <i className="bx bx-sun sidebar-icon sun" />
              ) : (
                <i className="bx bx-moon sidebar-icon moon" />
              )}
            </div>
            {isDarkLight === "dark" ? (
              <span
                className={
                  isSidebarClose
                    ? "sidebar-nav-text-none"
                    : "sidebar-mode-text sidebar-text"
                }
              >
                Light Mode
              </span>
            ) : (
              <span
                className={
                  isSidebarClose
                    ? "sidebar-nav-text-none"
                    : "sidebar-mode-text sidebar-text"
                }
              >
                Dark Mode
              </span>
            )}
          </li>
        </div>
      </div>
    </nav>
  );
}
