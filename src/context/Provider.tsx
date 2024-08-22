import { useReducer } from "react";
import { PortfolioContext } from "./Context";
import { PorfolioReducer, PortfolioState } from "./Reducer";

const INITIAL_STATE: PortfolioState = {
  isResponsive: false,
  language: "en",
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PorfolioProvider = ({ children }: Props) => {
  const [portfolioState, dispatch] = useReducer(PorfolioReducer, INITIAL_STATE);

  const toggleResponsive = (isResponsive: boolean) => {
    dispatch({ type: "SET_RESPONSIVE_SIDEBAR", payload: { isResponsive } });
  };

  const changeLanguage = (language: string) => {
    dispatch({ type: "SET_CHANGE_LANGUAGE", payload: { language } });
  };

  return (
    <PortfolioContext.Provider
      value={{ portfolioState, toggleResponsive, changeLanguage }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
