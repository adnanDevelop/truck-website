import React from "react";

const MissionSection = () => {
  return (
    <div className="mission_section padding-inline padding-block flex items-start lg:flex-row flex-col gap-[20px] ">
      <div className="heading_section lg:basis-1/3 ">
        <h2 className="lg:text-[44px] uppercase font-primary text-[34px] text-black font-bold leading-none">
          Our Mission
        </h2>
      </div>
      <div className="content-section lg:basis-3/5   ">
        <p className="font-primary text-[18px] font-normal text-justify mb-[30px]">
          Qwikio is committed to crafting electric vehicles that are a beacon of
          hope for underserved communities. We challenge the conventional by
          creating EVs that generate their own power, eliminating reliance on
          local electricity grids. Our mission is two-fold: to bring
          revolutionary mobility solutions to those who need them most and to
          pave the way for an environmentally responsible future.
        </p>
        <img src="/image/about/mission-img.png" className="w-full h-auto" alt="" />
      </div>
    </div>
  );
};

export default MissionSection;
