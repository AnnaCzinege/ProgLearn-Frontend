import React from "react";
import "./App.css";
import ResponsiveHeader from "./components/layout/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveHeader></ResponsiveHeader>
      </Router>
    </div>
  );
}

export default App;
