import { useContext } from "react";
import { PortfolioContext } from "./context/Context";
import { SideBar, Home } from "./pages";
import "./App.css";

function App() {
  const { portfolioState } = useContext(PortfolioContext);
  return (
    <div
      className={
        portfolioState.isResponsive ? "open-side-bar" : "close-side-bar"
      }
    >
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
