import React, { useState, createContext } from "react";

export const ThemeContext = createContext(["light", () => {}]);

export const ThemeProvider = (props) => {
  const themeHook = useState("light");

  return (
    <ThemeContext.Provider value={themeHook}>
      {props.children}
    </ThemeContext.Provider>
  );
};
