import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import ImageSwitcher from "./components/ImageSwitcher";
import TrendingNow from "./components/TrendingNow";
import AutumnFeeling from "./components/AutumnFeeling";
import PointsPromotion from "./components/PointsPromotion";
import WorkoutSection from "./components/WorkoutSection";
import ShoeSelection from "./components/ShoeSelection";
import StyleRoom from "./components/StyleRoom";
import Footer from "./components/Footer";
import Product from "./components/Product";
import SignInPopup from "./components/SignInPopup";
import SignInPage from "./components/SigninPage";
import CreateAccountPage from "./components/CreateAccountPage"; // Import CreateAccountPage

const AppContent = () => {
  const location = useLocation();

  // Hide Navbar and Footer on specific pages
  const hideNavbarFooter = 
    location.pathname === "/signin" || 
    location.pathname === "/signin-popup" || 
    location.pathname === "/create-account"; // Adjusted to "/create-account"

  return (
    <>
      <GlobalStyle />
      {/* Conditionally render Navbar */}
      {!hideNavbarFooter && <Navbar />}

      <Routes>
        {/* Main page content */}
        <Route
          path="/"
          element={
            <>
              <ImageSwitcher />
              <TrendingNow />
              <AutumnFeeling />
              <PointsPromotion />
              <WorkoutSection />
              <ShoeSelection />
              <StyleRoom />
              <Product />
            </>
          }
        />
        {/* Popup sign-in route */}
        <Route path="/signin-popup" element={<SignInPopup />} />
        {/* Full sign-in page route */}
        <Route path="/signin" element={<SignInPage />} />
        {/* Create account page route */}
        <Route path="/create-account" element={<CreateAccountPage />} /> {/* New route */}
      </Routes>

      {/* Conditionally render Footer */}
      {!hideNavbarFooter && <Footer />}
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
