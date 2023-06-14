import React, { useState } from "react";
import "./styles.css";

export const isDarkModeContext = React.createContext();

const DayNight = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const switchMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark");
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-theme", isDarkMode ? "light" : "dark");
  };

  return (
    <div
      className={`night-toggle ${isDarkMode ? "night" : ""} `}
      onClick={switchMode}
    >
      <div id="moon" className={`moon ${isDarkMode ? "sun" : ""}`}></div>
    </div>
  );
};

export default DayNight;
