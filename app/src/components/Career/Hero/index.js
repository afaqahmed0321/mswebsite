import React from "react";
import PageHeading from "../../pageHerdings";
import Image from "next/image";
import CareerIamge from "../../../../../public/assests/career/Rectangle 3887.png";
import CareerSearchInput from "../../CareerSeacrchInput";
import "./index.css";

const index = () => {
  return (
    <section
      className="2xl:px-14 xl:px-14 lg:px-12 md:px-10 px-5 2xl:py-8 xl:py-8 lg:py-5 md:py-6 py-10 career-hero-section duration-300"
      data-aos="fade-down"
      data-aos-duration="3000"
    >
      <div className="flex justify-between gap-y-8 gap-x-16 2xl:my-5 xl:my-5 lg:my-4">
        <div
          className="  2xl:pl-20 xl:pl-10 lg:pl-14 md:pl-10"
          data-aos="fade-right"
          data-aos-duration="100"
          data-aos-delay={100}
        >
          <PageHeading heading={"Services"} lineClesses={"ml-6"} />
          <div className="2xl:pl-20 xl:pl-20 lg:pl-10 md:pl-8   2xl:pt-10">
            <div className="flex justify-between items-start gap-3">
              <h3
                className="text-[#838181] self-end lg:text-5xl md:text-4xl text-xl font-sans font-bold"
                data-aos-delay={200}
                data-aos-duration="1500"
              >
                Find your <br />
                <span className="text-[#ff5500]" data-aos-delay={300}>
                  dream job{" "}
                </span>{" "}
                here
                <br data-aos-delay={400} />
                easily and quickly
              </h3>
              <Image
                src={CareerIamge}
                alt=""
                className=" sm:hidden block w-32 h-auto transition-all duration-300"
                data-aos-delay={500}
              />
            </div>
            <p
              className="text-[#838181]  lg:text-lg md:text-lg text-sm text-justify font-sans font-normal lg:leading-8 md:leading-7 leading-6 2xl:py-9 xl:py-9 lg:py-4 md:py-3 py-4"
              data-aos-delay={600}
            >
              {`The software development industry is growing bigger all the time, and it's easy to see why; in today's world, businesses great and small have an ever-increasing need for custom software solutions to help them keep up with the competition`}
            </p>
            <CareerSearchInput />
          </div>
        </div>
        <Image
          src={CareerIamge}
          alt=""
          className="z-20 sm:block  hidden 2xl:w-[38.375rem] xl:w-[33rem] lg:w-[28rem] md:w-96 2xl:h-[35.25rem] xl:h-[30rem] lg:h-[27rem] md:h-96 sm:h-80 transition-all duration-300 "
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay={800}
        />
      </div>
    </section>
  );
};

export default index;
