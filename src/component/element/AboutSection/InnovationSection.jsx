import React from "react";

const InnovationSection = () => {
  return (
    <div className=" innovation_section padding-block padding-inline bg-[#F4F4F4]  ">
      <div className="innovation_content flex items-center justify-center flex-col max-w-[780px] mx-auto ">
        <h2 className="lg:text-[44px] uppercase font-primary text-[34px] text-black font-bold leading-none mb-4">
          our innovation
        </h2>
        <p className="font-primary text-[18px] font-normal text-justify mb-[30px]" style={{textAlignLast : 'center'}} >
          At the heart of Qwikio's groundbreaking approach is our self-powering
          EV technology. We believe in vehicles that are as independent as they
          are efficient, harnessing renewable energy sources to power
          themselves. This not only ensures uninterrupted mobility but also
          significantly reduces the ecological footprint of transportation. Our
          team of experts tirelessly innovates to make this vision a reality,
          pushing the boundaries of what's possible in EV technology.
        </p>
      </div>
    </div>
  );
};

export default InnovationSection;
