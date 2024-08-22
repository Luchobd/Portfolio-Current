export type PortfolioState = {
  isResponsive: boolean;
  language: string;
};

type PorfolioAction =
  | { type: "SET_RESPONSIVE_SIDEBAR"; payload: { isResponsive: boolean } }
  | { type: "SET_CHANGE_LANGUAGE"; payload: { language: string } };

export const PorfolioReducer = (
  state: PortfolioState,
  action: PorfolioAction
): PortfolioState => {
  switch (action.type) {
    case "SET_RESPONSIVE_SIDEBAR":
      return {
        ...state,
        isResponsive: action.payload.isResponsive,
      };

    case "SET_CHANGE_LANGUAGE":
      return {
        ...state,
        language: action.payload.language,
      };

    default:
      return state;
  }
};
