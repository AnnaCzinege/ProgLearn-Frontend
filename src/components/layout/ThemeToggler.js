import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { StyledLabel, StyledSpan } from "../elements/ThemeTogglerElements";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  const changeTheme = () => {
    document.body.style.backgroundColor === "white"
      ? (document.body.style.backgroundColor = "#0b0c10")
      : (document.body.style.backgroundColor = "white");
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  return (
    <StyledLabel onClick={changeTheme}>
      <StyledSpan title="switch theme" theme={themeMode} />
    </StyledLabel>
  );
};

export default ThemeToggler;
