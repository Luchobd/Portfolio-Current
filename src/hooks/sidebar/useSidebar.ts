import { useContext, useState } from "react";
import { PortfolioContext } from "../../context/Context";

export function useSidebar() {
  const [isSidebarClose, setIsSidebarClose] = useState(true);

  const { toggleResponsive } = useContext(PortfolioContext);

  const onSidebar = () => {
    setIsSidebarClose(!isSidebarClose);
    toggleResponsive(isSidebarClose);
  };
  return {
    isSidebarClose,

    onSidebar,
  };
}
