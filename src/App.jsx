import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import LandingPage from "./components/LandingPage";
import OriginPage from "./components/clickable/OriginPage";
import SolarwindPage from "./components/clickable/SolarwindPage";
import EffectsPage from "./components/clickable/EffectsPage";
import AboutUs from "./components/AboutUs";

// If you want to use the inline component definition:
// const RegisterPage = () => <h1>Register Page</h1>;

const App = () => {
  return (
    <Router>
      <div className="max-w-full overflow-x-hidden">
        <nav>
          <ul className="flex flex-wrap justify-center">
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/register"></Link>
            </li>
            <li>
              <Link to="/origin"></Link>
            </li>
            <li>
              <Link to="/solarwind"></Link>
            </li>
            <li>
              <Link to="/effects"></Link>
            </li>
            <li>
              <Link to="/aboutus"></Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/origin" element={<OriginPage />} />
          <Route path="/solarwind" element={<SolarwindPage />} />
          <Route path="/effects" element={<EffectsPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
