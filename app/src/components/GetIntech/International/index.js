import Image from "next/image";
import React from "react";
import IMG1 from "../../../../../public/assests/getintech/Rectangle 2999.png";
import IMG2 from "../../../../../public/assests/getintech/Rectangle 2999.png";

const index = () => {
  return (
    <section className="2xl:px-14 xl:px-14 lg:px-12 md:px-10 px-5 2xl:py-20 xl:py-16 lg:py-14 md:py-8 py-6">
      <h4
        className="text-[#ff5500]  md:text-5xl text-xl leading-10 font-sans font-semibold "
        data-aos-delay={0}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Prefer to reach out directly?
      </h4>
      <p
        className="text-[#838181]  md:text-xl text-sm md:leading-8 leading-6 font-normal font-sans md:pt-5 pt-3"
        data-aos-delay={100}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        We collaborate proactively with our customers to provide them with the
        best available resources and solutions to IT-related market challenges.
        We are highly competitive, and bring value to our customers by meeting
        their core interests. Our core principle guide us to help our consumers
        in every aspect of their IT business journey.
      </p>
      <div className="flex justify-between items-center 2xl:gap-12 xl:gap-11 lg:gap-8 md:gap-6 gap-4  md:pt-10 pt-5">
        <div className=" basis-3/6">
          <Image
            alt=""
            src={IMG1}
            className="w-full h-auto"
            data-aos-delay={200}
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </div>
        <div className=" basis-3/6">
          <Image
            alt=""
            src={IMG2}
            className="w-full h-auto"
            data-aos-delay={300}
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
