import React from "react";
import "./App.css";
import ResponsiveHeader from "./components/layout/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { indexRoute } from "./components/elements/RouteElements";
import { AppContainer } from "./components/elements/AppContainerElements";

function App() {
  return (
    <AppContainer>
      <Router>
        <ResponsiveHeader></ResponsiveHeader>

        <div className="App">{indexRoute}</div>
      </Router>
    </AppContainer>
  );
}

export default App;
