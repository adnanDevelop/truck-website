import React from "react";

const ComitmentSection = () => {
  return (
    <div className="comitment_section padding-block padding-inline flex lg:flex-row flex-col items-center gap-[60px]  ">
      <img src="/image/about/comitment-img.png" alt="" />
      <div className="comitment_content">
        <h2 className="lg:text-[44px] uppercase font-primary text-[34px] text-black font-bold leading-none mb-4">
          our commitment
        </h2>
        <p
          className="font-primary text-[18px] font-normal text-justify "
        >
          We are more than just a company; we are a movement. At Qwikio, we're
          dedicated to empowering communities through accessible, sustainable
          transportation solutions. Our commitment extends beyond vehicle
          manufacturing to fostering a global shift towards more sustainable
          living. We invite you to join us in this journey towards a cleaner,
          more equitable world.
        </p>
      </div>
    </div>
  );
};

export default ComitmentSection;
