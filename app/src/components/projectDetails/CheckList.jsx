import React from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import LaptopIcon from "../../../../public/assests/projectDetails/laptopIcon.png";
import DurationIcon from "../../../../public/assests/projectDetails/durationIcon.png";
import Image from "next/image";
import { ChipsComponent } from "../ChipsComponent/ChipsComponent";

const CheckList = ({ data }) => {
  return (
    <div
      className="min-h-[15vh] max-h-fit flex justify-center my-5"
      data-aos="fade-right"
    >
      <div className="w-[90vw] bg-[#21212105] md:p-14 p-6">
        <div className="flex items-center">
          <hr className="w-20 sm:w-28 md:w-36 h-[3px] md:h-1 mb-5 bg-[#FF5500] " />
          <div
            className=" sm:text-xl md:text-2xl lg:text-3xl ml-4 mb-5 font-normal text-[#FF5500]"
            data-aos-delay={100}
            data-aos-duration="1400"
          >
            {data.heading}
          </div>
        </div>
        {data.checks.map((items, index) => (
          <div
            className="flex md:mt-6 mt-3 items-start gap-2"
            key={index}
            data-aos-delay={`{${index}00}`}
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            {items.tick && (
              <div
                className="md:w-8 w-5 md:h-8 h-5 flex justify-center pt-1.5"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <CheckCircleIcon className=" text-xl text-[#FF5500]" />
              </div>
            )}
            <div className="md:ml-5 text-[#838181] md:text-lg text-sm  md:leading-10 leading-7 self-start">
              {items.line}
            </div>
          </div>
        ))}
        {data.chips && (
          <>
            <div
              className="my-10"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="flex items-center">
                <Image src={LaptopIcon} alt="LaptopIcon" />
                <div
                  className="text-[#FF5500] md:text-xl text-lg font-semibold"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  Technologies
                </div>
              </div>
              <div className="flex flex-wrap md:gap-7 gap-4">
                <ChipsComponent
                  content={"Java"}
                  color={"bg-[#BCBFC2] text-black"}
                />
                <ChipsComponent
                  content={"Kotlin"}
                  color={"bg-[#BCBFC2] text-black"}
                />
                <ChipsComponent
                  content={"HTML"}
                  color={"bg-[#BCBFC2] text-black"}
                />
                <ChipsComponent
                  content={"CSS"}
                  color={"bg-[#BCBFC2] text-black"}
                />
              </div>
            </div>
            <div className="my-5">
              <div className="flex items-center">
                <Image src={DurationIcon} alt="DurationIcon" />
                <div
                  className="text-[#FF5500] md:text-xl text-lg font-semibold"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  Duration
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6 gap-2">
                <ChipsComponent
                  content={"11 Weeks"}
                  color={"bg-[#BCBFC2] text-black"}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckList;
