import { ChangeEvent, useContext } from "react";
import { PortfolioContext } from "../../context/Context";

interface Props {
  isSidebarClose?: boolean;
  isShowText?: boolean;
}

export function Languages({ isSidebarClose, isShowText = true }: Props) {
  const { changeLanguage } = useContext(PortfolioContext);

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

  return (
    <select
      name="languages"
      className="sidebar-select"
      onChange={handleLanguageChange}
    >
      <option value="english" className="sidebar-select-option">
        {!isSidebarClose && isShowText ? <>English</> : "🇺🇸"}
      </option>
      <option value="spanish" className="sidebar-select-option">
        {!isSidebarClose && isShowText ? <>Español</> : "🇪🇸"}
      </option>
    </select>
  );
}
