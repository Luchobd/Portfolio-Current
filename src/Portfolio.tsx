import { useContext, useMemo } from "react";
import { PortfolioContext } from "./context/Context";
import { SideBar, Home, Footer, ContactForm } from "./pages";
import { Experience } from "./pages/Experience";
import { useScreenCurrent } from "./hooks/screenCurrent/useScreenCurrent";
import { Description } from "./pages/Home/Description";
import { NavBar } from "./pages/NavBar";
import { Skills } from "./pages/Skills";
import { Certificates } from "./pages/Certificates";
import { MyProjects } from "./pages/Projects";

export function Portfolio() {
  const { portfolioState } = useContext(PortfolioContext);
  const { screenWidth } = useScreenCurrent();

  const { screenMobile, screenDesktop } = useMemo(
    () => ({
      screenMobile: screenWidth <= 768,
      screenDesktop: screenWidth > 768,
    }),
    [screenWidth]
  );

  const mobileStyles = useMemo(
    () => ({
      paddingLeft: screenMobile ? 88 : 0,
    }),
    [screenMobile]
  );

  const containerClass = useMemo(
    () =>
      `bodyContainer ${
        portfolioState.darkLight === "light"
          ? "mode-light-active"
          : "mode-dark-active"
      }`,
    [portfolioState.darkLight]
  );

  return (
    <main className={containerClass} style={mobileStyles}>
      {screenDesktop && <NavBar />}
      <Home />
      <Description />
      <Experience />
      <Skills />
      <MyProjects />
      <Certificates />
      <ContactForm />
      <Footer />
      {screenMobile && <SideBar />}
    </main>
  );
}
