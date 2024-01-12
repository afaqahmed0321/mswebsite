import React from "react";
import CALENDLY from "../../../../public/assests/icon/logo.png";
import Image from "next/image";
import Button from "../Button";
const index = () => {
  return (
    <div
      className="flex justify-between items-stretch w-full h-auto bg-[#ff5500] py-14 md:pl-14 md:pr-0 px-5"
      data-aos-delay={0}
      data-aos="fade-left"
      data-aos-duration="1200"
    >
      <from className="w-full">
        <fieldset className="text-white border-[3px] 2xl:border-r-0 xl:border-r-0 lg:border-r-0 md:border-r-0 border-white w-full">
          <legend
            className="2xl:ml-16 xl:ml-16  lg:ml-16 md:ml-14 ml-12 px-4 md:text-xl text-xl font-sans font-bold"
            data-aos-delay={100}
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            MettleSol
          </legend>
          <div className="md:px-10 md:py-10  px-5 py-9 flex flex-col space-y-6 ">
            <div>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Name"
                className=" w-full  md:py-4 py-3 px-1 border-none outline-none rounded-sm placeholder:pl-4 "
                data-aos-delay={800}
                data-aos="fade-right"
                data-aos-duration="1200"
              />
            </div>
            <div>
              <input
                name="phone_no"
                id="phone_no"
                placeholder="Phone No"
                type="tel"
                className=" w-full md:py-4 py-3 px-1 border-none outline-none rounded-sm placeholder:pl-4 "
                data-aos-delay={900}
                data-aos="fade-right"
                data-aos-duration="1200"
              />
            </div>{" "}
            <div>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Email"
                className=" w-full md:py-4 py-3 px-1 border-none outline-none rounded-sm placeholder:pl-4 "
                data-aos-delay={1000}
                data-aos="fade-right"
                data-aos-duration="1200"
              />
            </div>{" "}
            <div>
              <textarea
                name="massage"
                id="massage"
                placeholder="massage..."
                className=" w-full md:py-4 py-3 px-1 border-none outline-none rounded-sm placeholder:pl-4  md:h-36 h-32  "
                data-aos-delay={1100}
                data-aos="fade-right"
                data-aos-duration="1200"
              />
            </div>
            <div className="py-2">
              <Image
                src={CALENDLY}
                alt=""
                className="border-b-2 border-white 2xl:pr-14 xl:pr-14 lg:pr-12 md:pr-10 pr-5 md:w-40 "
                data-aos-delay={1200}
                data-aos="fade-right"
                data-aos-duration="1200"
              />
            </div>
            <div
              className="flex justify-center items-center"
              data-aos-delay={1300}
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <button className="bg-white text-[#ff5500] text-xl font-bold font-sans  md:py-3 py-2  md:px-16 px-8 border-none rounded-md hover:ring-2 ring-[#ff5500] hover:scale-105 active:scale-95 duration-300 delay-200 hover:bg-[#ff5502] hover:text-white hover:ring-white">
                Send
              </button>
            </div>
          </div>
        </fieldset>
      </from>
    </div>
  );
};

export default index;
