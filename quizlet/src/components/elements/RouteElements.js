import React from "react";
import { Route } from "react-router-dom";
import SiteIndex from "../SiteIndex";
import QuizSettings from "../QuizSettings";

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

export const topicRoute = <Route path="/topic/" component={QuizSettings} />;

export const quizRoute = <Route path="/quiz/" />;
