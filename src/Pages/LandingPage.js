import React from "react";
import Header from "../Components/Header";
import "../App.css";
import HeroSection from "../Components/HeroSection";
import Features from "../Components/Features";
import Work from "../Components/Work";
import Footer from "../Components/Footer";

function LandingPage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <Work />
      <Footer />
    </div>
  );
}

export default LandingPage;
