import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./routes/main.router";

const App = () => {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
};

export default App;
