import React from "react";
import Image from "next/image";
import PageHeading from "../../pageHerdings";
import USER from "../../../../../public/assests/aboutus/aboutus-user.png";
import USER1 from "../../../../../public/assests/aboutus/img 7.png";
import OFFICEGROUP from "../../../../../public/assests/aboutus/Group 1000003390.png";
import "./index.css";

const Hero = () => {
  return (
    <section className=" about-bg object-contain  bg-contain bg-right-top  overflow-visible max-sm:my-10 ">
      <div className="bg-img md:px-20 px-8 md:py-48 py-56 my-2 grid 2xl:grid-flow-row xl:grid-flow-row lg:grid-flow-row md:grid-flow-col sm:grid-flow-col 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 place-items-center md:gap-x-14">
        <div className="md:pt-16">
          <PageHeading
            heading={
              <span className="text-white drop-shadow-md">About Us</span>
            }
            headingColor={"#FFF"}
          />
          <div className="flex flex-col justify-center drop-shadow-md text-white">
            <div>
              <Image
                src={USER}
                alt=""
                className="float-right 2xl:hidden xl:hidden lg:hidden md:hidden flex justify-center items-center px-3"
                data-aos="fade-"
              />
              <div
                className="md:text-xl text-sm md:leading-8 leading-6"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                At mettlesol software solutions, we accept that the best worth
                comes from offering clients a complete software solution. As
                well as giving high-geared solutions that are seriously costly,
                our predominant service and support abilities, add to
                synergistic outcomes that makes mettlesol the reasonable choice
                for sensitive clients. By choosing mettlesol software solutions,
                clients gain an accomplished and committed company with the
                capacity to convey a complete solution. Our exceptional
                capabilities incorporate corporate security, specialized and
                business qualities and involvement with serving innovation
                markets for throughout the long term.
              </div>
            </div>

            <button
              className=" mt-5 text-sm shadow-lg text-white md:w-40 w-28 ease-in-out  duration-200 delay-300 hover:scale-105 hover:bg-white hover:text-[#ff5500] border-none rounded-lg h-8 flex justify-center items-center font-sans py-5 bg-[#FF5500] transition-all font-bold leading-[5rem]"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              Learn More
            </button>
          </div>
        </div>
        <div
          className="overflow-visible 2xl:block xl:block lg:block md:block hidden"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          <Image
            src={USER1}
            className="lg:w-full md:w-80 w-auto lg:h-[40rem] h-auto"
            data-aos="fade-left"
            data-aos-duration="1200"
            alt=""
          />
        </div>
      </div>
      <div
        className="flex justify-center items-start 2xl:mx-14 xl:mx-14 lg:mx-12 2xl:pb-48 xl:pb-44 lg:pb-36 md:pb-28 sm:pb-10 pb-8 mx-5 flex-wrap gap-10"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        <div className="2xl:basis-2/4 xl:basis-2/4 lg:basis-2/4 md:basis-1/2 basis-full">
          <Image src={OFFICEGROUP} alt="" />
        </div>
        <div className=" relative flex-1">
          <div className="lg:absolute lg:-left-40 md:-left-28  -top-3">
            <PageHeading
              lineStyle={"lg:w-52 w-28 py-0.5"}
              heading={"Superior Development Process and Support"}
            />
          </div>
          <div className="lg:pt-28">
            <p
              className="text-[#838181] md:text-xl text-sm md:leading-10 leading-6 font-sans md:py-5 max-md:pb-5"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              Conveying the first-class development process and support that
              matches or surpasses client expectations is a first concern for
              MettleSol. To ensure that each task deals with is tried and
              maintains the most significant levels of value, we have a tough
              quality assurance setup. You can get various benefits by
              re-appropriating your development prerequisites to MettleSol,
              including information and experience, cost-adequacy, versatile
              commitment models, and quality affirmation. To figure out more
              about how we can help you with your app development needs, reach
              out to us immediately.
            </p>
          </div>
          <button
            className=" mt-5 text-sm shadow-lg text-white md:w-40 w-28 ease-in-out  duration-200 delay-300 hover:scale-105 hover:bg-white hover:text-[#ff5500] border-none rounded-lg h-8 flex justify-center items-center font-sans py-5 bg-[#FF5500] transition-all font-bold leading-[5rem]"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
