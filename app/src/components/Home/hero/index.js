import Image from "next/image";
import React from "react";
import Dots from "../../../../../public/assests/home/circles.png";
import Colorline from "../../ColorLine";
import Button from "../../Button";
import Dots2 from "../../../../../public/assests/home/circles (1).png";
import massage from "../../../../../public/assests/home/ic_chat.png";
import "./index.css";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <section className=" min-w-full" data-aos="fade-up" data-aos-duration="600">
      <div className="header-box relative md:h-[35rem] h-60 flex items-center">
        <Colorline
          classes={
            "rotate-[35deg] md:-left-20  -left-20 2xl:top-36 xl:top-32 lg:top-28 md:top-24"
          }
        />

        <Image
          src={Dots}
          alt=""
          data-aos="zoom-in-down"
          data-aos-duration="1600"
          className=" md:w-32 md:h-36 w-20 h-20 absolute lg:left-64 md:left-48 sm:left-28 left-[16vw] md:top-80 top-36 z-30"
        />
      </div>
      <div className="flex justify-between md:items-start items-center  2xl:px-14 xl:px-14 lg:px-12 md:px-10 px-5 md:pt-14 pt-6 2xl:pb-20 xl:pb-20 lg-pb-16 md:pb-14 pb-10 gap-4 ">
        <div
          className="md:basis-3/4"
          data-aos="fade-right"
          data-aos-duration="600"
        >
          <h2 className="text-[#FF5500] font-sans font-bold  md:text-5xl text-2xl max-[375px]:text-xs md:leading-[4.5rem]">
            Where Vision Meets Innovation
          </h2>
          <p className="text-[#838181] font-sans font-normal md:text-2xl text-sm md:leanding-[3rem] leading-5 py-3">
            MettleSol has 20 years of experience in creating and keeping up with
            custom software development and full tech support for industries
            around the world.
          </p>
          <Button
            label={"Get in Touch"}
            classes={"md:text-xl text-sm md:px-5 px-3 md:py-3 py-1 md:mt-2"}
            icon={<ChevronRightIcon className="h-6" />}
          />
        </div>
        <div
          className="self-end flex items-end flex-col gap-16"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          <div className="bg-[#ff5500] md:h-20 md:w-20 md:p-3 p-2  w-14 h-14 max-[375px]:w-10 max-[375px]:h-10 rounded-full flex justify-center items-center ">
            <Image src={massage}  className="" alt=""/>
          </div>
          <div>
            <Image src={Dots2} className="md:w-28 md:h-28 w-auto h-auto" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
