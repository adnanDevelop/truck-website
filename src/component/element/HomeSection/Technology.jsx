import React from "react";

const Technology = () => {
  const techPartContent = [
    {
      icon: "/image/technology/icon-1.svg",
      title: "Hybrid Power Technology",
      content: `Imagine a world where your vehicle is powered by the sun and the latest in battery innovation. That's our promise – efficient, eco-friendly, and powerful.`,
    },
    {
      icon: "/image/technology/icon-2.svg",
      title: "Modular Design",
      content: `Our unique modular approach to vehicle design means versatility like never before. It's the future of personal and commercial transportation, tailored to your needs.`,
    },
    {
      icon: "/image/technology/icon-3.svg",
      title: "Smart Energy Solutions",
      content: `With Qwikio vehicles, every drive contributes to a greener world. Our Kinetic Energy Recovery System turns motion into energy, setting new standards in efficiency.`,
    },
  ];

  return (
    <div className="technology_section padding-block padding-inline grid lg:grid-cols-2 grid-cols-1  gap-[60px] lg:place-items-center bg-color">
      {/* FIRST SECTION */}
      <div className="tech_img">
        <h2 className="2xl:text-[50px] lg:text-[40px] text-[30px]  font-[600]  lg:leading-[55px] leading-none  mb-[15px] ">
          Where Technology Meets Sustainability
        </h2>
        <p className="text-gray text-[16px] font-normal font-primary mb-[40px] text-justify">
          Our design philosophy merges sustainability and cutting-edge
          technology, creating products that not only reinforce our commitment
          but also position us as global pioneers in championing a shift towards
          a more sustainable way of living.
        </p>
        <img src="/image/technology/img.png" alt="" />
      </div>
      {/* SECOND SECTION */}
      <div className="tech_content">
        {techPartContent.map((element, index) => {
          return (
            <div className="flex md:flex-row flex-col md:items-center gap-[20px] mb-[50px]" key={index} >
              <img src={element.icon} className="w-[60px] h-auto object-cover" alt="" />
              <div className="feature_content">
                <h4 className="text-light-black  text-[24px] font-[600] ">
                  {element.title}
                </h4>
                <p className="text-[16px] text-gray md:text-start text-justify " >{element.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technology;
