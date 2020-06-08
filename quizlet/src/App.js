import React from "react";
import "./App.css";
import ResponsiveHeader from "./components/layout/Header";
import { BrowserRouter as Router } from "react-router-dom";
import {
  indexRoute,
  generalKnowledgeRoute,
} from "./components/elements/RouteElements";
import { AppContainer } from "./components/elements/AppContainerElements";
import { SiteIndexProvider } from "./components/contexts/SiteIndexContext";
import { QuestionProvider } from "./components/contexts/QuestionContext";

function App() {
  return (
    <AppContainer>
      <Router>
        <SiteIndexProvider>
          <QuestionProvider>
            <ResponsiveHeader></ResponsiveHeader>
            <div className="App">{indexRoute}</div>
            <div className="App">{generalKnowledgeRoute}</div>
          </QuestionProvider>
        </SiteIndexProvider>
      </Router>
    </AppContainer>
  );
}

export default App;
