import React from "react";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div className=" padding-inline bg-color text-center py-[100px]">
      <h1 className="font-[900] text-light-black 2xl:text-[120px] lg:text-[80px] text-[40px] uppercase  font-primary leading-none ">
        A Glimpse into Tomorrow
      </h1>
      <p className="text-gray text-[16px]  lg:max-w-[750px] mt-[30px] mx-auto ">
        Qwikio Inc is more than a brand; it's a beacon of progress. Our electric
        vehicles are designed to inspire, empower, and elevate your everyday
        journey. They're not just vehicles; they're your partners in paving the
        way for a cleaner, more exciting future.
      </p>

      {/* JOIN SECTION */}
      {/* <div className="flex items-center justify-center flex-col gap-[20px] py-[80px] px-[40px]  mt-[40px] relative join_section overflow-hidden  ">
        <video src="/image/join-video.mp4"  controls loop autoPlay className="w-full h-full block" ></video>
        <div className="join_content absolute top-[50%] left-[50%]   px-[40px] translate-x-[-50%] translate-y-[-50%] w-full h-auto flex items-center justify-center flex-col  ">
            <h3 className="text-white lg:text-[60px] text-[40px]  font-[600] leading-none ">Join the Movement</h3>
            <p className="lg:text-[20px] text-[16px]  text-white font-primary my-[20px] max-w-[650px] ">Curious? Intrigued? Stay updated with Qwikio Inc. Sign up now and be the first to witness the future of mobility unfold.</p>
            <Link to='/contact' className="btn-secondary" >Contact Us</Link>
        </div>
    </div> */}

      <div className="flex items-center justify-center flex-col gap-[20px] py-[80px] px-[40px] mt-[40px] relative join_section  ">
        <video
          src="/image/join-video.mp4"
          loop
          playsInline
          autoPlay
          muted
          className="w-full  h-auto block relative video " 
        >
        </video>
        <div className="join_content absolute top-[50%] left-[50%] px-[40px] translate-x-[-50%] translate-y-[-50%] w-full h-auto flex items-center justify-center flex-col">
          <h3 className="text-white lg:text-[60px] text-[40px] font-[600] leading-none">
            Join the Movement
          </h3>
          <p className="lg:text-[20px] text-[16px] text-white font-primary my-[20px] max-w-[650px]">
            Curious? Intrigued? Stay updated with Qwikio Inc. Sign up now and be
            the first to witness the future of mobility unfold.
          </p>
          {/* HERO SECTION */}
          <Link to="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
