import { useContext, useState } from "react";
import { PortfolioContext } from "../../context/Context";

interface Props {
  isSidebarClose?: boolean;
  isShowText?: boolean;
}

export function DarkLightMode({ isSidebarClose, isShowText = true }: Props) {
  const [isDarkLight, setIsDarkLight] = useState("dark");
  const { toggleDarkLight, portfolioState } = useContext(PortfolioContext);

  const lightModeText =
    portfolioState.language === "en" ? "Light Mode" : "Modo Claro";
  const darkModeText =
    portfolioState.language === "en" ? "Dark Mode" : "Modo Oscuro";

  const onModeDarkLight = () => {
    setIsDarkLight((prev) => (prev === "dark" ? "light" : "dark"));
    toggleDarkLight(isDarkLight);
  };

  return (
    <div className="sidebar-bottom-content">
      <li
        className="sidebar-mode"
        onClick={onModeDarkLight}
        style={{ cursor: "pointer" }}
      >
        <div className="sidebar-moon-sun">
          {isDarkLight === "dark" ? (
            <i className="bx bx-sun sidebar-icon sun" />
          ) : (
            <i className="bx bx-moon sidebar-icon moon" />
          )}
        </div>
        {isDarkLight === "dark" ? (
          <span
            style={{ userSelect: "none" }}
            className={
              isSidebarClose
                ? "sidebar-nav-text-none"
                : "sidebar-mode-text sidebar-text"
            }
          >
            {isShowText && lightModeText}
          </span>
        ) : (
          <span
            style={{ userSelect: "none" }}
            className={
              isSidebarClose
                ? "sidebar-nav-text-none"
                : "sidebar-mode-text sidebar-text"
            }
          >
            {isShowText && darkModeText}
          </span>
        )}
      </li>
    </div>
  );
}
