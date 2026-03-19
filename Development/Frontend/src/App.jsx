import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Adopt from "./pages/adopt";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />      {/* Home page */}
        <Route path="/adopt" element={<Adopt />} /> {/* Adopt page */}
      </Routes>
    </Router>
  );
}

export default App;