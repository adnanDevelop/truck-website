import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrollAnimation, setScrollAnimation] = useState(false);

  /* class for animation is [nav-scroll] */
  window.addEventListener("scroll", () => {
    window.scrollY > 100 ? setScrollAnimation(true) : setScrollAnimation(false);
  });

  return (
    <div
      className={`navbar_section w-full py-[16px] flex items-center justify-between   padding-inline  shadow bg-white ${
        scrollAnimation ? "nav-scroll" : ""
      } `}
    >
      <div className="logo_section">
        <Link to="/">
          <img
            src="/image/logo.png"
            className="lg:w-[200px] sm:w-[180px] w-[160px]   h-auto object-cover"
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link to="/contact" className="btn-primary">
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
