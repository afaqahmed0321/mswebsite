import React from "react";
import Button from "../Button";
const index = () => {
  return (
    <div
      className=" max-w-full mx-auto flex justify-between items-center bg-white md:rounded-xl rounded-lg overflow-hidden"
      style={{ boxShadow: " 0px 4px 14px 0px #00000040" }}
      data-aos="zoom-out-right"
      data-aos-duration="1800"
      data-aos-delay={100}
    >
      <div
        className="flex-grow-0 2xl:m-3 xl:m-3 lg:m-3 md:m-2 m-0 border-r-2 basis-2/5"
        data-aos-delay={200}
      >
        <select className="text-[#838181] font-sans  md:text-xl text-xs bg-white p-2 outline-none font-light transition-all duration-500 w-fit 2xl:px-3 xl:px-3 lg:px-2.5 md:px-2 sm:px-2 px-1.5  py-0.5">
          <option
            defaultValue={"Job title"}
            className=" transition-all duration-300 ease-in-out delay-100 text-lg"
          >
            Job title
          </option>
        </select>
      </div>

      <div
        className=" flex-1 flex justify-center items-center basis-3/5"
        data-aos-delay={300}
      >
        <select className="text-[#838181] l md:text-xl sm:text-xs  font-light bg-none outline-none transition-all duration-500 w-fit 2xl:px-3 xl:px-3 lg:px-2.5 md:px-2 sm:px-2 py-0.5">
          <option
            defaultValue={"Job title"}
            className=" transition-all duration-300 ease-in-out delay-100 text-lg "
          >
            Select Country
          </option>
        </select>
      </div>
      <div
        className="  flex-grow-0 basis-2/5 h-auto"
        data-aos-delay={400}
      >
        <button className="w-full h-full 2xl:py-6 xl:py-6 lg:py-5 md:4 py-3 md:text-lg sm:text-xs px-2 bg-[#ff5500] text-white font-sans font-semibold transition-all duration-300 hover:scale-105 active:scale-110  delay-300  ease-in">
          Search
        </button>
      </div>
    </div>
  );
};

export default index;
