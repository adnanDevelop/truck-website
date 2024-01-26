import React from "react";
import Hero from "../element/HomeSection/Hero";
import Mobility from "../element/HomeSection/Mobility";
import Technology from "../element/HomeSection/Technology";
import Join from "../element/HomeSection/Join";
import JoinVideo from "../element/HomeSection/JoinVideo";

const Home = () => {
  return (
    <div>
      <Hero />
      <Mobility />
      <Technology />
      <Join />
      <JoinVideo />
    </div>
  );
};

export default Home;
