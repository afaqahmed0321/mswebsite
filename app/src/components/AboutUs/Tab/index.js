import Image from "next/image";
import React, { useState } from "react";
import SKILLIMG from "../../../../../public/assests/aboutus/Rectangle 3030 (1).png";
import WEBIMG from "../../../../../public/assests/aboutus/Rectangle 3075 (1).png";

const Tab = () => {
  const [tab, setTab] = useState(0);
  return (
    <section className="py-10 mx-10">
      <div className="flex justify-between items-start lg:gap-32 md:gap-18 gap-10">
        <div className="md:basis-3/6">
          <h6
            className="text-[#FF5500] text-center flex justify-center items-center font-[Poppins] md:text-5xl text-xl font-semibold leading-10 border-b-2 border-[#FF5500] py-1"
            data-aos="fade-right"
            data-aos-dutration="1300"
          >
            Our vision
          </h6>
          <p
            className="font-light text-[#838181] text-justify font-sans text-sm py-2"
            data-aos="fade-down"
            data-aos-dutration="1800"
          >
            {
              "  Our Vision is to be a top software solution company in IT sector and progress in our ongoing situation in market. We realize that Client's development is our development, so we commit our clients to help in accomplishing their business objectives. We trust in work with the precision and best quality. We need to be known as the solid, creative and easy to use software solution provider in IT industry."
            } 
          </p>
        </div>
        <div className="md:basis-3/6">
          <h6
            className="text-[#838181] text-center font-[Poppins] md:text-5xl text-xl font-semibold leading-10  py-1"
            data-aos="fade-left"
            data-aos-dutration="1200"
          >
            Our Mission
          </h6>
          <p
            className="font-light text-[#838181] text-justify font-sans text-sm py-2"
            data-aos="fade-down"
            data-aos-dutration="1800"
          >
            To keep a harmony between technology and feasibilities items with a
            strong obligation to give a huge scope of software services
            according to the client focus and competence.
          </p>
        </div>
      </div>
      <div className="flex justify-center 2xl:gap-14 xl:gap-12 lg:gap-10 gap-4 py-10  2xl:px-40 xl:px-36 lg:px-28">
        <Image src={WEBIMG} alt="" className="w-3/6 md:h-2/3" />
        <Image src={SKILLIMG} alt="" className="w-3/6 md:h-2/3" />
      </div>
    </section>
  );
};

export default Tab;
