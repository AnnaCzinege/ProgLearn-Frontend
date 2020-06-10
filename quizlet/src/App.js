import React from "react";
import "./App.css";
import ResponsiveHeader from "./components/layout/Header";
import { BrowserRouter as Router } from "react-router-dom";
import {
  indexRoute,
  topicRoute,
  quizRoute,
} from "./components/elements/RouteElements";
import { AppContainer } from "./components/elements/AppContainerElements";
import { SiteIndexProvider } from "./components/contexts/SiteIndexContext";
import { QuestionProvider } from "./components/contexts/QuestionContext";
import { QuizProvider } from "./components/contexts/QuizContext";
import { ThemeProvider } from "./components/contexts/ThemeContext";
import { SettingProvider } from "./components/contexts/SettingContext";

function App() {
  return (
    <AppContainer>
      <Router>
        <ThemeProvider>
          <SiteIndexProvider>
            <QuestionProvider>
              <QuizProvider>
                <SettingProvider>
                  <ResponsiveHeader></ResponsiveHeader>
                  <div className="App">{indexRoute}</div>
                  <div className="App">{topicRoute}</div>
                  <div className="App">{quizRoute}</div>
                </SettingProvider>
              </QuizProvider>
            </QuestionProvider>
          </SiteIndexProvider>
        </ThemeProvider>
      </Router>
    </AppContainer>
  );
}

export default App;
