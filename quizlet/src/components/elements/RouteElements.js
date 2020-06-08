import React from "react";
import { Route } from "react-router-dom";
import SiteIndex from "../SiteIndex";
import LearningMode from "../LearningMode";

export const indexRoute = (
  <Route
    exact
    path="/"
    render={() => (
      <React.Fragment>
        <SiteIndex />
      </React.Fragment>
    )}
  />
);

export const generalKnowledgeRoute = (
  <Route path="/topic/general-knowledge" component={LearningMode} />
);
