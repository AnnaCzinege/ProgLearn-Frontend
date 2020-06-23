import React, { createContext } from "react";

export const SettingContext = createContext();

export const SettingProvider = (props) => {
  return <SettingContext.Provider>{props.children}</SettingContext.Provider>;
};
