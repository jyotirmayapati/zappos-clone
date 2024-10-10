import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ImageSwitcher from "./components/ImageSwitcher";
import TrendingNow from "./components/TrendingNow";
import AutumnFeeling from "./components/AutumnFeeling";
import PointsPromotion from "./components/PointsPromotion";
import WorkoutSection from "./components/WorkoutSection";
import ShoeSelection from "./components/ShoeSelection";

const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <Header />
    <ImageSwitcher />
    <TrendingNow />
    <AutumnFeeling />
    <PointsPromotion />
    <WorkoutSection />
    <ShoeSelection />
  </>
);

export default App;
