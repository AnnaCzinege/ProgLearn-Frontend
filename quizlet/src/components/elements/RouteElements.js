import React from "react";
import { Route } from "react-router-dom";
import SiteIndex from "../SiteIndex";

export const indexRoute = (
  <Route
    exact
    path="/"
    render={() => (
      <React.Fragment>
        <SiteIndex url="/" />
      </React.Fragment>
    )}
  />
);
