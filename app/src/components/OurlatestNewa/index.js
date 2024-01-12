import Image from "next/image";
import React from "react";

const index = ({ bgColor, image, heading, description, aosDelay }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay={aosDelay}>
      <div className="max-w-mdflex flex-col justify-center items-center bg-white space-y-6  hover:-translate-y-1 hover:rounded-md duration-300 transition-all ease-linear cursor-pointer hover:shadow-xl ">
        <div>
          <Image
            src={image}
            className="w-full md:h-80 object-cover border-4 border-[#ff5500]"
            alt=""
          />
        </div>
        <div
          className={` flex flex-col justify-center items-center h-min gap-4 p-5 bg-[${
            bgColor ? "#ff5500" : "#FFF"
          }] 
      border-4 border-[#ff5500]
       text-white`}
        >
          <h6
            className={`font-sans font-bold md:text-xl text-sm max-[374px]:text-xs text-center text-[${
              bgColor ? "#fff" : "#ff5500"
            }]`}
          >
            {heading}
          </h6>
          <p
            className={`text-[${
              bgColor ? "#fff" : "#838181"
            }] text-center md:text-lg text-sm max-[374px]:text-xs font-normal font-sans`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
