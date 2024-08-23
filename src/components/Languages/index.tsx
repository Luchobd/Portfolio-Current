import { ChangeEvent, useContext } from "react";
import { PortfolioContext } from "../../context/Context";

export function Languages({ isSidebarClose }: { isSidebarClose: boolean }) {
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
        🇺🇸 {!isSidebarClose && <>English</>}
      </option>
      <option value="spanish" className="sidebar-select-option">
        🇪🇸 {!isSidebarClose && <>Español</>}
      </option>
    </select>
  );
}
