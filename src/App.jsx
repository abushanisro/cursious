// src/App.jsx
import React from "react";

import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TestimonialsCarousel from "./components/design/TestimonialsCarousel";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import ChatBot from "./components/ChatBot"; // ⬅️ ChatBot added

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <TestimonialsCarousel />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />

      {/* ChatBot Widget */}
      <ChatBot />
    </>
  );
};

export default App;
