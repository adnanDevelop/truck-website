import React from "react";

const Hero = () => {
  return (
    <div className="hero_section w-full lg:flex items-center lg:justify-between lg:flex-row flex-col lg:gap-[30px]  ">
      <div className="hero_content xl:ps-[160px] lg:ps-[100px] md:ps-[50px] lg:px-0 px-[20px]  lg:mt-0 mt-[80px] lg:mb-0 mb-[40px]  flex-auto   ">
        <p className="font-primary font-[500]  md:text-[30px] text-[24px]  leading-none ">
          Welcome to <span className="text-red">Qwikio</span>
        </p>
        <h1 className="xl:text-[50px] sm:text-[40px] text-[35px]  uppercase  font-[700] font-primary text-light-black leading-none my-[20px]  ">
          Electrify <br className="lg:block sm:hidden" /> Your Journey
        </h1>
        <p className="lg:max-w-[400px] text-justify">
          We pioneer self-powering electric vehicles for underserved
          communities. Our designs and technology smartly bypass electricity
          infrastructure challenges, making sustainable mobility universally
          accessible. Join our revolution in eco-friendly transportation!
        </p>
      </div>
      <div className="hero_img  flex lg:justify-end justify-center items-center">
        {/* <img src="/image/hero-img.png" className="block ms-auto" alt="" /> */}
        <img src="/image/hero-img.png" className="" alt="" />
      </div>
    </div>
  );
};

export default Hero;
