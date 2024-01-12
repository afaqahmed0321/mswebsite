import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const index = ({ index, heading, para, onClick, image }) => {
  return (
    <div
      className="justify-center flex mx-5 "
      data-aos-delay={`${index}00`}
      data-aos="zoom-out"
      data-aos-duration="1600"
    >
      <div className="border-4 border-[#FF5500] rounded-md min-h-[90vh] max-w-full md:pb-10">
        <div className="lg:h-auto h-1/2">
          <Image src={image} alt={`image ${index + 1}`} className="h-full" />
        </div>
        <div className="h-1/2 md:px-11 px-2 flex flex-col justify-center max-md:py-3 md:pb-16">
          <div className="text-[#838181] font-semibold md:text-3xl text-xl my-2 md:my-3">
            {heading}
          </div>
          <div className="text-[#FF5500] text-lg md:text-2xl my-3 md:my-5 lg:my-5">
            {para}
          </div>
          <button className="bg-[#FF5500] w-40 px-4 py-2 md:px-5 md:py-3 hover:bg-white hover:text-[#ff5500] border-2 border-[#ff5500] ease-in-out duration-300  rounded-md text-white flex justify-between self-center items-center">
            <div className=" flex items-center " onClick={onClick}>
              View More
            </div>
            <ArrowSmallRightIcon className="h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
