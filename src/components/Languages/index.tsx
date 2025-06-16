import { ChangeEvent, useContext, useMemo } from "react";
import { PortfolioContext } from "../../context/Context";
import { EnglishFlagIcon } from "../Icons/library/header/EnglishFlag";
import { SpanishFlagIcon } from "../Icons/library/header/SpanishFlag";
import { useScreenCurrent } from "../../hooks/screenCurrent/useScreenCurrent";

interface Props {
  isSidebarClose?: boolean;
  isShowText?: boolean;
}

export function Languages({ isSidebarClose, isShowText = true }: Props) {
  const { changeLanguage, portfolioState } = useContext(PortfolioContext);
  const { screenWidth } = useScreenCurrent();

  const currentLanguage =
    portfolioState.language === "en" ? (
      <EnglishFlagIcon />
    ) : (
      <SpanishFlagIcon />
    );

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    if (selectedValue === "english") {
      changeLanguage("en");
    } else if (selectedValue === "spanish") {
      changeLanguage("es");
    } else {
      changeLanguage("en");
    }
  };

  const { screenDesktop } = useMemo(
    () => ({
      screenDesktop: screenWidth > 768,
    }),
    [screenWidth]
  );

  return (
    <div className="sidebar-language-container">
      <span className="sidebar-language-flag">
        {screenDesktop && currentLanguage}
      </span>
      <select
        name="languages"
        className="sidebar-select"
        onChange={handleLanguageChange}
      >
        <option value="spanish" className="sidebar-select-option">
          {!isSidebarClose && isShowText ? <>Español</> : <>ES</>}
        </option>
        <option value="english" className="sidebar-select-option">
          {!isSidebarClose && isShowText ? <>English</> : <>US</>}
        </option>
      </select>
    </div>
  );
}
