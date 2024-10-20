import { useContext } from "react";
import { PortfolioContext } from "./context/Context";
import { SideBar, Home } from "./pages";
import { Experience } from "./pages/Experience";
import { useScreenCurrent } from "./hooks/screenCurrent/useScreenCurrent";
import { Description } from "./pages/Home/Description";
import { NavBar } from "./pages/NavBar";
import { Skills } from "./pages/Skills";

export function Portfolio() {
  const { portfolioState } = useContext(PortfolioContext);
  const { screenWidth } = useScreenCurrent();
  const screenMobile = screenWidth <= 768;
  const screenDesktop = screenWidth > 768;

  return (
    <main
      className={
        portfolioState.darkLight === "light"
          ? "bodyContainer mode-light-active"
          : "bodyContainer mode-dark-active"
      }
      style={screenMobile ? { paddingLeft: 88 } : { paddingLeft: 0 }}
    >
      {screenDesktop && <NavBar />}
      <Home />
      <Description />
      <Experience />
      <Skills />
      {screenMobile && <SideBar />}
    </main>
  );
}
