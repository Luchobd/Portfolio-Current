import React from "react";
import ReactDOM from "react-dom/client";
import { PorfolioProvider } from "./context/Provider.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PorfolioProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PorfolioProvider>
);
