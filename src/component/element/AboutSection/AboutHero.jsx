import React from "react";

const AboutHero = () => {
  return (
    <>
      <div className="padding-inline mt-[60px] ">
        <div className="about_hero flex items-center justify-center flex-col gap-[30px]">
          <img
            src="/image/about/hero-icon.png"
            className="w-[150px] h-auto object-cover"
            alt=""
          />
          <h2 className="uppercase font-primary lg:text-[44px] sm:text-[34px] text-[30px]  text-center  font-bold  text-light-black leading-none">
            Innovation Meets Accessibility
          </h2>
        </div>
      </div>

      {/* ABOUT MAP SECTION */}
      <div className="map_section my-[40px] lg:px-[140px] ">
        <img
          src="/image/about/hero-image.png"
          className="mx-auto"
          alt=""
        />

        <div className="map_content text-center mt-[40px] sm:max-w-[600px] mx-auto sm:px-0 px-[20px]  ">
          <h4 className="text-black text-[25px]  font-medium font-primary leading-none mb-2 " >
            Electric Vehicles that power themselves are Possible. Lets make them
            happen.
          </h4>
          <p className="text-black font-normal text-[16px] sm:px-[40px]">
            Founded in 2020, Our teams in Chicago, Dubai, Lagos and our Partners
            in Shanghai help achieve our mission.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
