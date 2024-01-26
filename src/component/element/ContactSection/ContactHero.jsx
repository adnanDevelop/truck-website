import React from "react";

const ContactHero = () => {
  return (
    <div className="flex flex-col">
      {/* FORM  HERO SECTION */}
      <div
        className="w-full h-[360px] bg-cover"
        style={{
          background: "url(/image/contact/hero-img.png) no-repeat center",
        }}
      ></div>

      {/*FORM  SECTION */}
      <div className="pb-[50px] md:mt-[-150px] mt-[-100px]  md:max-w-[950px] mx-auto bg-white px-[30px] pt-[50px]">
        <div className="contact-form_section grid lg:grid-cols-12 grid-cols-1 gap-[50px] bg-white  md:mb-[100px] mb-[60px]  ">
          {/* DETAILS SECTION */}
          <div className="contact_detail d-flex flex-col lg:col-span-5  ">
            <h3 className="leading-none font-bold text-[35px] uppercase text-light-black ">
              Connect with US
            </h3>
            <p className="text-[16px] text-gray font-normal mt-[20px] ">
              Join our mission to drive a greener, more equitable world.
            </p>
            <div className="flex items-center gap-[20px] mb-[20px] mt-[20px] ">
              <img src="/image/contact/icon-1.svg" alt="" />
              {/* <a href="tel:+1-773-530-3799" target="_blank"  rel="noreferrer" >+1 773-530-3799</a> */}
              <a href="tel:+1-773-530-3799" rel="noreferrer">
                +1 773-530-3799
              </a>
            </div>
            <div className="flex items-center gap-[20px] mb-[20px] ">
              <img src="/image/contact/icon-2.svg" alt="" />
              <a href="mailto:info@qwikio.com" rel="noreferrer" target="_blank">
                info@qwikio.com
              </a>
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
            <form action="https://formspree.io/f/mayrqdgd" method="POST">
              <div className="input_group mb-4">
                <p className="mb-2 text-[#374151] ">Name</p>
                <input
                  type="text"
                  required
                  name="name"
                  autoComplete="off"
                  className="w-full h-[50px] border border-[#D1D5DB] focus:border-red px-4  "
                />
              </div>
              <div className="input_group mb-4">
                <p className="mb-2 text-[#374151] ">Email</p>
                <input
                  type="email"
                  required
                  name="email"
                  autoComplete="off"
                  className="w-full h-[50px] border border-[#D1D5DB] focus:border-red px-4  "
                />
              </div>
              <div className="input_group mb-4">
                <p className="mb-2 text-[#374151] ">Company Name</p>
                <input
                  type="text"
                  required
                  name="CompanyName"
                  autoComplete="off"
                  className="w-full h-[50px] border border-[#D1D5DB] focus:border-red px-4  "
                />
              </div>

              <div className="input_group mb-4">
                <p className="mb-2 text-[#374151] ">Message</p>
                <textarea
                  name="message"
                  autoComplete="off"
                  required
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
