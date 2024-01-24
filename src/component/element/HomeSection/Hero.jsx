import React from "react";

const Hero = () => {
  return (
    <div className="hero_section w-full lg:flex items-center lg:justify-between lg:flex-row flex-col " >
      <div className="hero_content xl:ps-[160px] lg:ps-[100px] md:ps-[50px] px-[20px] lg:mt-0 mt-[80px] lg:mb-0 mb-[40px] ">
        <p className="font-primary font-[500]  md:text-[30px] text-[24px]  leading-none ">Welcome to <span className="text-red">Qwikio</span></p>
        <h1 className="xl:text-[60px] text-[44px]   font-[700] font-primary text-light-black leading-none my-[20px]  ">Electrify <br className="xl:block sm:hidden" /> Your Journey</h1>
      </div>
      <div className="hero_img  ">
        {/* <img src="/image/hero-img.png" className="block ms-auto" alt="" /> */}
        <img src="/image/hero-img.png" className="block ms-auto" alt="" />
      </div>
    </div>
  );
};

export default Hero;
