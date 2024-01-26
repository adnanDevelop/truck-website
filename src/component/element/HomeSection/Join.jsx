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
      <div className="video-container">
            <div className="video-banner">
                <div className="video-div">
                    <video autoplay loop muted> 
                        <source src="/image/join-video.mp4" type="video/mp4" alt="background video" />
                    </video>
                </div>
                <div className="video-text-content">
                    <div className="content">
                        <div className="title">Join the Movement</div>
                        <div className="text">Curious? Intrigued? Stay updated with Qwikio Inc. Sign up now and be the first to witness the future of mobility unfold.</div>
                        <div className="button">
                            <Link to="/contact" className="btn-video-contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Join;
