import React, { useState, useContext } from "react";
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
import { QuizProvider } from "./components/contexts/QuizContext";
import { ThemeProvider } from "./components/contexts/ThemeContext";

function App() {
  return (
    <AppContainer>
      <Router>
        <ThemeProvider>
          <SiteIndexProvider>
            <QuestionProvider>
              <QuizProvider>
                <ResponsiveHeader></ResponsiveHeader>
                <div className="App">{indexRoute}</div>
                <div className="App">{generalKnowledgeRoute}</div>
              </QuizProvider>
            </QuestionProvider>
          </SiteIndexProvider>
        </ThemeProvider>
      </Router>
    </AppContainer>
  );
}

export default App;
