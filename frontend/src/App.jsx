import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Navbar
import Navbar from "./Components/Navbar";

// Public Components
import Features from "./Components/Features";
import HowItWorks from "./Components/HowItWorks";
import ScoreEngine from "./Components/ScoreEngine";
import Modules from "./Components/Modules";

// Landing Page
import LandingPage from "./Pages/Landing Page/LandingPage";

// Authentication
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";

// Dashboard Layout
import DashboardLayout from "./Dashboard/DashboardLayout";

// Dashboard Pages
import UserDashboard from "./Dashboard/Userdashboard";
import Profile from "./Dashboard/Profile";
import Skills from "./Dashboard/Skills";
import DSATracker from "./Dashboard/DSATracker";
import Projects from "./Dashboard/Projects";
import PlacementTracker from "./Dashboard/PlacementTracker";
import ReadinessScore from "./Dashboard/ReadinessScore";
import Certifications from "./Dashboard/Certifications";

//AI Insight Page
import AIPlacementInsights from "./Dashboard/AI Placement Insights/AIPlacementInsights";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================================================= */}
        {/* PUBLIC PAGES                                      */}
        {/* ================================================= */}

        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
            </>
          }
        />

        <Route
          path="/features"
          element={
            <>
              <Navbar />
              <Features />
            </>
          }
        />

        <Route
          path="/how-it-works"
          element={
            <>
              <Navbar />
              <HowItWorks />
            </>
          }
        />

        <Route
          path="/score-engine"
          element={
            <>
              <Navbar />
              <ScoreEngine />
            </>
          }
        />

        <Route
          path="/modules"
          element={
            <>
              <Navbar />
              <Modules />
            </>
          }
        />

        {/* ================================================= */}
        {/* AUTHENTICATION                                    */}
        {/* ================================================= */}

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        {/* ================================================= */}
        {/* LOGGED-IN / DASHBOARD PAGES                      */}
        {/* ================================================= */}

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<UserDashboard />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/dsa-tracker" element={<DSATracker />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/certifications" element={<Certifications />} />

          <Route path="/placements" element={<PlacementTracker />} />

          <Route path="/readiness-score" element={<ReadinessScore />} />
          <Route path="/ai-insights" element={<AIPlacementInsights />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
