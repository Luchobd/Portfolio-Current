import { useContext, useState } from "react";
import { PortfolioContext } from "../../context/Context";

export function DarkLightMode({ isSidebarClose }: { isSidebarClose: boolean }) {
  const [isDarkLight, setIsDarkLight] = useState("dark");
  const { toggleDarkLight } = useContext(PortfolioContext);

  const onModeDarkLight = () => {
    setIsDarkLight((prev) => (prev === "dark" ? "light" : "dark"));
    toggleDarkLight(isDarkLight)
  };

  return (
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
  );
}
