import "./styles.css";
import logo from "../../assets/sidebar/logo/logoLB.png";
import "boxicons/css/boxicons.min.css";
import { useState } from "react";

export const SideBar = () => {
  const [isDarkLight, setIsDarkLight] = useState("dark");
  const [isSidebarClose, setIsSidebarClose] = useState(false);
  const [isArrowClose, setIsArrowClose] = useState(false);

  const onModeDarkLight = () => {
    if (isDarkLight === "dark") {
      setIsDarkLight("light");
    } else {
      setIsDarkLight("dark");
    }
  };

  const onSidebar = () => {
    setIsSidebarClose(!isSidebarClose);
    // setIsArrowClose(!isArrowClose);
  };

  console.log(isSidebarClose);

  return (
    <nav className={isSidebarClose ? "sidebar sidebar-close": "sidebar sidebar-open" }>
      <header>
        <div className="sidebar-image-text">
          <span className="sidebar-image">
            <img src={logo} alt="logo" />
          </span>

          <div className="sidebar-text sidebar-header-text">
            <span className="sidebar-name">Luis Blanco</span>
            <span className="sidebar-profession">Software Developer</span>
          </div>
        </div>

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
          {/* <li className="sidebar-search-box">
            <i className="bx bx-search sidebar-icon" />
            <input
              type="search"
              placeholder="Search..."
              className="sidebar-search"
            />
          </li> */}
          <ul className="sidebar-menu-links">
            <li className="sidebar-nav-link">
              <a href="#">
                <i className="bx bx-home-alt sidebar-icon" />
                <span className="sidebar-text sidebar-nav-text">Dashboard</span>
              </a>
            </li>

            <li className="sidebar-nav-link">
              <a href="#">
                <i className="bx bx-bar-chart-alt-2 sidebar-icon" />
                <span className="sidebar-text sidebar-nav-text">Revenue</span>
              </a>
            </li>

            <li className="sidebar-nav-link">
              <a href="#">
                <i className="bx bx-bell sidebar-icon" />
                <span className="sidebar-text sidebar-nav-text">
                  Notifications
                </span>
              </a>
            </li>

            <li className="sidebar-nav-link">
              <a href="#">
                <i className="bx bx-pie-chart-alt sidebar-icon" />
                <span className="sidebar-text sidebar-nav-text">Analytics</span>
              </a>
            </li>

            <li className="sidebar-nav-link">
              <a href="#">
                <i className="bx bx-heart sidebar-icon" />
                <span className="sidebar-text sidebar-nav-text">Likes</span>
              </a>
            </li>

            <li className="sidebar-nav-link">
              <a href="#">
                <i className="bx bx-wallet sidebar-icon" />
                <span className="sidebar-text sidebar-nav-text">Wallets</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar-bottom-content">
          {/* <li className="">
            <a href="#">
              <i className="bx bx-log-out sidebar-icon" />
              <span className="sidebar-text sidebar-nav-text">Logout</span>
            </a>
          </li> */}

          <li className="sidebar-mode">
            <div className="sidebar-moon-sun">
              {isDarkLight === "dark" ? (
                <i className="bx bx-sun sidebar-icon sun" />
              ) : (
                <i className="bx bx-moon sidebar-icon moon" />
              )}
            </div>
            {isDarkLight === "dark" ? (
              <span className="sidebar-mode-text sidebar-text">Light Mode</span>
            ) : (
              <span className="sidebar-mode-text sidebar-text">Dark Mode</span>
            )}

            <div className="sidebar-toggle-switch" onClick={onModeDarkLight}>
              <span
                className={
                  isDarkLight === "dark"
                    ? "sidebar-switch sidebar-switch-light"
                    : "sidebar-switch sidebar-switch-dark"
                }
              ></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
};
