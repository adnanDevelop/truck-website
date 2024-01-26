import React from "react";
import AboutHero from "../element/AboutSection/AboutHero";
import VisionSection from "../element/AboutSection/VisionSection";
import MissionSection from "../element/AboutSection/MissionSection";
import InnovationSection from "../element/AboutSection/InnovationSection";
import ComitmentSection from "../element/AboutSection/ComitmentSection";
import JoinVideo from "../element/HomeSection/JoinVideo";

const About = () => {
  document.title='Qwikio About page'

  return (
    <div>
      <AboutHero />
      <VisionSection />
      <MissionSection />
      <InnovationSection />
      <ComitmentSection />
      <JoinVideo />
    </div>
  );
};

export default About;
