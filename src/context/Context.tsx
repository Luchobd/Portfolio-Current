import { createContext } from "react";
import { PortfolioState } from "./Reducer";

export type PortfolioContextProps = {
  portfolioState: PortfolioState;
  toggleResponsive: (isResponsive: boolean) => void;
  changeLanguage: (language: string) => void;
};

export const PortfolioContext = createContext<PortfolioContextProps>(
  {} as PortfolioContextProps
);
