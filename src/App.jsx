import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx"; // Import the About page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   {/* Home Page */}
        <Route path="/about" element={<About />} />  About Page
      </Routes>
    </Router>
  );
};

export default App;
