import React from "react";

const ContactHero = () => {
  return (
    <div className="flex flex-col gap-[-300px]">
      {/* FORM  HERO SECTION */}
      <div
        className="w-full h-[360px] bg-cover"
        style={{
          background: "url(/image/contact/hero-img.png) no-repeat center",
        }}
      ></div>

      {/*FORM  SECTION */}
      <div className="py-[50px]">
        <div className="contact-form_section grid lg:grid-cols-12 grid-cols-1 gap-[50px] padding-inline  bg-white   mb-[100px]">
          {/* DETAILS SECTION */}
          <div className="contact_detail d-flex flex-col   lg:col-span-5  ">
            <h3 className="leading-none font-bold text-[35px] uppercase text-light-black ">
              Connect with US
            </h3>
            <p className="text-[16px] text-gray font-normal mt-[20px] ">
              Join us in our mission to drive a greener, more equitable world.{" "}
            </p>
            <div className="flex items-center gap-[20px] mb-[20px] mt-[20px] ">
              <img src="/image/contact/icon-1.svg" alt="" />
              <p>+1 773-530-3799</p>
            </div>
            <div className="flex items-center gap-[20px] mb-[20px] ">
              <img src="/image/contact/icon-2.svg" alt="" />
              <p>info@qwikio.com</p>
            </div>
            <div className="flex items-center gap-[20px] ">
              <img src="/image/contact/icon-3.svg" alt="" />
              <p>
                Qwikio Inc, 1 East Erie St, Suite 525-4619, Chicago, IL 60611,
                United States
              </p>
            </div>
          </div>

          {/* FORM SECTION */}
          <div className="form_section sm:p-[50px] p-[20px]  bg-white shadow-xl  lg:col-span-7 ">
            <div className="input_group mb-4">
              <p className="mb-2 text-[#374151] ">Name</p>
              <input
                type="text"
                required
                className="w-full h-[50px] border border-[#D1D5DB] focus:border-red px-4  "
              />
            </div>
            <div className="input_group mb-4">
              <p className="mb-2 text-[#374151] ">Email</p>
              <input
                type="email"
                required
                className="w-full h-[50px] border border-[#D1D5DB] focus:border-red px-4  "
              />
            </div>
            <div className="input_group mb-4">
              <p className="mb-2 text-[#374151] ">Company Name</p>
              <input
                type="text"
                required
                className="w-full h-[50px] border border-[#D1D5DB] focus:border-red px-4  "
              />
            </div>

            <div className="input_group mb-4">
              <p className="mb-2 text-[#374151] ">Message</p>
              <textarea
                name="textfield"
                className="text_area px-4 pt-2 resize-none w-full h-[120px] border border-[#D1D5DB] "
              >
                {" "}
              </textarea>
            </div>
            <div>
              <button
                type="submit"
                className="block w-full py-[15px] capitalize font-semibold mt-5 bg-red text-white  "
              >
                contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
