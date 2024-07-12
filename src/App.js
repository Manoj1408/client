import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ApplianceDetails from "./components/ApplianceDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/appliance/:id" element={<ApplianceDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
