import { useEffect, useState } from "react";

export const useScreenCurrent = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  screenWidth <= 768;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return {
    screenWidth,
  };
};
