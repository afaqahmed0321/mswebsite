import Image from "next/image";
import React from "react";
import BGIMG from "../../../../../public/assests/aboutus/client-bg.png";
import CLIENTEAM from "../../../../../public/assests/aboutus/Rectangle 3061 (1).png";

const ClientSay = () => {
  return (
    <section className="max-w-full " data-aos="flip-up" data-aos-duration="1500">
      <div className="flex relative  md:my-32 mt-5 ">
        <Image src={BGIMG} alt="" className="w-full h-auto static 2xl:block xl:block lg:block  hidden" />
        <div className="2xl:absolute xl:absolute lg:absolute z-10 flex justify-center items-start gap-10 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap flex-wrap mx-6">
          <div>
            <Image src={CLIENTEAM} alt=""  />
          </div>
          <div className="2xl:basis-3/6 xl:basis-3/6 lg:basis-3/6 md:basis-3/6">
            <h6 className="text-[#FF5500] font-semibold font-sans md:text-5xl text-xl">
              What Client Say?
            </h6>
            <p className="text-[#838181] md:text-xl font-sans font-medium md:pt-5">
              We collaborate proactively with our customers to provide them with
              the best available resources and solutions to IT-related market
              challenges. We are highly competitive, and bring value to our
              customers by meeting their core interests. Our core principle
              guide us to help our consumers in every aspect of their IT
              business journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSay;
