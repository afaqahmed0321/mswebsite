// components/MySection.js
import React from "react";
import { Box } from "../BoxComponent/BoxComponent";

const IntroHeading = ({ IntroData, technology }) => {
  return (
    <section
      className="relative min-h-screen max-h-fit flex items-center "
      data-aos={"fade-down"}
    >
      <div className="w-full relative z-10">
        <h1
          className="text-2xl md:text-5xl text-center text-white drop-shadow-xl font-bold md:mb-8 font-sans"
          data-aos-delay={100}
        >
          {technology} Development Services
        </h1>
        <div className="flex  items-center ml-10 sm:ml-10 md:ml-28 md:mt-24 my-10 md:mb-16  ">
          <hr className="w-40 h-1 text-black bg-white" />
          <div
            className=" sm:text-2xl md:text-3xl lg:text-4xl ml-4 text-white font-bold"
            data-aos-delay={200}
          >
            {technology} Developers with a proven track record
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:gap-28 gap-12">
          {IntroData.map((item, index) => (
            <div key={index} data-aos-delay={index}>
              <Box
                firstText={item.firstText}
                secondText={item.secondText}
                bottomBorder={item.bottomBorder}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroHeading;
