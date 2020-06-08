import React, { useState, createContext } from "react";

export const SiteIndexContext = createContext();

export const Bubbles = () => {
  return (
    <div className="circles">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export const SiteIndexProvider = (props) => {
  const [spanTitle, setSpanTitle] = useState("Title");
  return (
    <SiteIndexContext.Provider value={{ spanTitle, setSpanTitle }}>
      {props.children}
    </SiteIndexContext.Provider>
  );
};
