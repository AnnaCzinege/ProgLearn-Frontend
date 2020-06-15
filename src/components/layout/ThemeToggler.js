import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { StyledLabel, StyledSpan } from "../elements/ThemeTogglerElements";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <StyledLabel
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <StyledSpan title="switch theme" theme={themeMode} />
    </StyledLabel>
  );
};

export default ThemeToggler;
