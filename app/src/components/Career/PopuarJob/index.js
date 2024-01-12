import React from "react";
import PageHeading from "../../pageHerdings";
import { POPULARCARDDATA } from "../../../api/Career";
import Image from "next/image";

const index = () => {
  return (
    <section className="2xl:px-14 xl:px-14 lg:px-12 md:px-10 px-5 2xl:py-16 xl:py-8 lg:py-5 md:py-6 py-10">
      <PageHeading
        heading={"Popular job Categories"}
        parhaOne={
          <div className="2xl:pl-44 xl:44 lg:pl-44 md:pl-32">
            {
              "The software development industry is growing bigger all the time, and it's easy to see why; in today's world, businesses great and small have an ever-increasing need for custom software solutions to help them keep up with the competition"
            }
          </div>
        }
      />
      <div className="grid grid-flow-row  md:grid-cols-3 grid-cols-2 max-[375px]:grid-cols-1  2xl:gap-x-14 xl:gap-x-14 lg:gap-x-12 md:gap-x-10 2xl:gap-y-16 xl:gap-y-16 lg:gap-y-12 md:gap-y-10 sm:gap-7 gap-6 md:mt-20 mt-10 ">
        {POPULARCARDDATA.map((items, index) => {
          return (
            <div
              key={index}
              data-aos="zoom-out"
              data-aos-duration="1200"
              data-aos-delay={`${index}00`}
            >
              <div
                className="flex justify-start max-w-md md:py-10 py-6 md:px-5 px-3 lg:gap-x-4 gap-3  h-auto items-center bg-white p-2 shadow-2xl hover:bg-[#FF5500] hover:text-white duration-300 rounded-3xl transition-all hover:skew-x-2 hover:translate-x-2 hover:-translate-y-3 hover:scale-105 cursor-pointer ease-linear"
                style={{ boxShadow: "0px 4px 14px 0px #00000040" }}
              >
                <Image
                  src={items.icon}
                  className="lg:w-24 lg:h-24 w-12 h-12"
                  alt=""
                />
                <span className="lg:text-2xl sm:text-sm font-sans font-semibold">
                  {items.titile}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="flex justify-center items-center lg:mt-24 md:mt-18 mt-10"
        data-aos="zoom-out-right"
        data-aos-duration="1200"
      >
        <button className="lg:py-4  md:px-10 px-8 py-2 text-[#ff5500] duration-300 hover:skew-x-1 hover:scale-105 transition-all font-sans font-light md:text-lg text-sm bg-white border-2 md:rounded-xl rounded-md  hover:bg-[#ff5500] hover:text-white border-[#ff5500]">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default index;
