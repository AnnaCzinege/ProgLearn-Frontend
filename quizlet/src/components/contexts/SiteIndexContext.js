import React, { useState, createContext } from "react";

export const SiteIndexContext = createContext();

export const SiteIndexProvider = (props) => {
  const [spanTitle, setSpanTitle] = useState("Title");
  return (
    <SiteIndexContext.Provider value={{ spanTitle, setSpanTitle }}>
      {props.children}
    </SiteIndexContext.Provider>
  );
};
