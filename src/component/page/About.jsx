import React from "react";
import AboutHero from "../element/AboutSection/AboutHero";
import VisionSection from "../element/AboutSection/VisionSection";
import MissionSection from "../element/AboutSection/MissionSection";
import InnovationSection from "../element/AboutSection/InnovationSection";
import ComitmentSection from "../element/AboutSection/ComitmentSection";

const About = () => {
  return (
    <div>
      <AboutHero />
      <VisionSection />
      <MissionSection />
      <InnovationSection />
      <ComitmentSection />
    </div>
  );
};

export default About;
