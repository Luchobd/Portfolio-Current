import { useContext } from "react";
import { PortfolioContext } from "./context/Context";
import { SideBar, Home } from "./pages";

export function Portfolio() {
  const { portfolioState } = useContext(PortfolioContext);
  return (
    <div
      className={`${
        portfolioState.isResponsive ? "open-side-bar" : "close-side-bar"
      } ${
        portfolioState.darkLight === "light"
          ? "bodyContainer mode-light-active"
          : "bodyContainer mode-dark-active"
      }`}
    >
      <Home />
      <SideBar />
    </div>
  );
}
