import React from "react";
import { Link } from "react-router-dom";

const JoinVideo = () => {
  return (
    <div className="mb-[80px]">
      <div className="video-container padding-inline">
        <div className="video-banner">
          <div className="video-div">
            <video autoPlay loop muted>
              <source
                src="/image/join-video.mp4"
                type="video/mp4"
                alt="background video"
              />
            </video>
          </div>
          <div className="video-text-content">
            <div className="content">
              <div className="title">Join the Movement</div>
              <div className="text">
                Curious? Intrigued? Stay updated with Qwikio Inc. Sign up now
                and be the first to witness the future of mobility unfold.
              </div>
              <div className="button">
                <Link to="/contact" className="btn-video-contact">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinVideo;
