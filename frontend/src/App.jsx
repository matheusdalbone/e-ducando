import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import BenefitsItem from "./components/BenefitsItem";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <BenefitsItem />
    </div>
    
  );
}