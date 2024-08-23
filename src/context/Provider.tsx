import { useReducer } from "react";
import { PortfolioContext } from "./Context";
import { PorfolioReducer, PortfolioState } from "./Reducer";

const INITIAL_STATE: PortfolioState = {
  isResponsive: false,
  language: "en",
  darkLight: "light",
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

  const toggleDarkLight = (darkLight: string) => {
    dispatch({ type: "SET_CHANGE_DARK_LIGHT", payload: { darkLight } });
  };

  return (
    <PortfolioContext.Provider
      value={{
        portfolioState,
        toggleResponsive,
        changeLanguage,
        toggleDarkLight,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
