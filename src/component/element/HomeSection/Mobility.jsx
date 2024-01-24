import React from "react";

const Mobility = () => {
  return (
    <div className=" mobility_section padding-block padding-inline grid lg:grid-cols-2 grid-cols-1  place-items-center xl:gap-x-[110px] lg:gap-x-[50px]  ">
      <div className="">
        <h2 className="xl:text-[50px] lg:text-[40px] text-[30px]  font-[600]  xl:leading-[55px]  lg:leading-[50px] leading-none mb-[30px] ">
          Redefining Mobility with Innovation
        </h2>
        <p className="text-justify text-gray text-[20px] lg:hidden block lg:mb-0 mb-[30px] ">
          At Qwikio Inc, we're not just making electric vehicles; we're igniting
          a movement. Our vision? To transform how you travel with
          groundbreaking technology and sustainable design.
        </p>
        <img src="/image/section-2-img.png" className="lg:w-[500px] w-auto h-auto object-cover" alt="" />
      </div>
      <div className="mobility_content">
        <p className="text-justify text-gray text-[20px] lg:block hidden ">
          At Qwikio Inc, we're not just making electric vehicles; we're igniting
          a movement. Our vision? To transform how you travel with
          groundbreaking technology and sustainable design.
        </p>
      </div>
    </div>
  );
};

export default Mobility;
