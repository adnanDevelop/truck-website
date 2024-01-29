import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_section py-[50px] padding-inline border-t border-t-[#58585A] ">
      <div className="footer_bar flex items-center justify-between flex-wrap gap-y-[20px]  mb-[20px]">
        {/* FOOTER LOGO SECTION */}
        <div className="logo_section">
          <img
            src="/image/logo.png"
            className="lg:w-[200px] sm:w-[180px] w-[160px]   h-auto object-cover"
            alt=""
          />
        </div>
        {/* FOOTER LINKS SECTION */}
        <div>
          <ul className="list-unstyled flex items-center flex-wrap gap-x-[20px] ">
            <li>
              <Link
                to="/about"
                className="footer_link text-[14px] font-normal text-gray transition duration-500 hover:text-red focus:text-red  "
              >
                About Qwikio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="footer_link text-[14px] font-normal text-gray transition duration-500 hover:text-red focus:text-red  "
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="footer_link text-[14px] font-normal text-gray transition duration-500 hover:text-red focus:text-red  "
              >
                Term of Use
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="footer_link text-[14px] font-normal text-gray transition duration-500 hover:text-red focus:text-red  "
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="footer_link text-[14px] font-normal text-gray transition duration-500 hover:text-red focus:text-red  "
              >
                Cookies Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* SUBFOOTER SECTION */}
      <div className="flex items-center justify-between">
        <p className="text-[14px] font-secondary fw-[400] ">© Copyright 2023</p>
        <div className="flex items-center gap-[18px] ">
          <a
            rel="noreferrer"
            href="https://www.facebook.com/qwikio"
            target="_blank"
            className="no-underline"
          >
            {" "}
            <img
              src="/image/footer/img-1.svg"
              className="cursor-pointer"
              alt=""
            />
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/company/viadrop/"
            target="_blank"
            className="no-underline"
          >
            {" "}
            <img
              src="/image/footer/img-2.svg"
              className="cursor-pointer"
              alt=""
            />
          </a>
          <a
            rel="noreferrer"
            href="https://www.instagram.com/qwikioev"
            target="_blank"
            className="no-underline"
          >
            {" "}
            <img
              src="/image/footer/img-3.svg"
              className="cursor-pointer"
              alt=""
            />
          </a>
          <a
            rel="noreferrer"
            href="https://twitter.com/qwikiomotors"
            target="_blank"
            className="no-underline"
          >
            {" "}
            <img
              src="/image/footer/img-4.svg"
              className="cursor-pointer"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
