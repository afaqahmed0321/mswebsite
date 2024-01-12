import React from "react";
import Image from "next/image";
import CALENDLY from "../../../../../public/assests/icon/logo.png";
import FACEBOOK from "../../../../../public/assests/icon/Facebook.png";
import TWITTER from "../../../../../public/assests/icon/Twitter.png";
import INSTAGRAM from "../../../../../public/assests/icon/Instagram.png";
import MettleSolFrom from "../../MettleSolFrom";

const index = () => {
  return (
    <section>
      <div className="grid 2xl:grid-flow-col xl:grid-flow-col lg:grid-flow-col md:grid-flow-col grid-flow-row 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <div className="2xl:px-44 xl:px-40 lg:px-28 md:px-16 sm:px-16 px-8  2xl:py-24 xl:py-24 lg:py-20 md:py-16  py-12">
          <div
            className="text-[#838181] font-normal  md:text-3xl text-lg font-sans "
            data-aos-delay={0}
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            REACH US
          </div>
          <h2
            className="md:text-5xl text-2xl font-sans text-[#ff5500] font-semibold leading-10 py-2"
            data-aos-delay={100}
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            Get in touch
          </h2>
          <p
            className="text-[#838181] font-normal md:text-xl text-lg font-sans text-left"
            data-aos-delay={200}
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            Give us a call or drop by anytime, we endeavor to answer all
            enquiries within 24 hours on business days.
          </p>
          <div className="flex justify-between 2xl:items-start xl:items-start lg:items-start md:items-start items-center flex-wrap 2xl:flex-col xl:flex-col lg:flex-col md:flex-col flex-row py-2">
            <div
              className="py-2 "
              data-aos-delay={300}
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <Image
                src={CALENDLY}
                alt=""
                className="border-b-2 border-[#ff5500] md:pr-10 pr-5 w-32 "
              />
            </div>
            <div>
              <div
                className="text-[#ff5500] font-[Poppins] font-semibold leanding-10 py-2 md:text-lg text-md"
                data-aos-delay={400}
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                Follow Us :
              </div>
              <div className="flex justify-start items-center space-x-3">
                <Image
                  src={FACEBOOK}
                  alt=""
                  className=" md:w-6 w-5 h-auto cursor-pointer"
                  data-aos-delay={700}
                  data-aos="fade-right"
                  data-aos-duration="1200"
                />
                <Image
                  src={TWITTER}
                  alt=""
                  className=" md:w-6 w-5 h-auto cursor-pointer"
                  data-aos-delay={600}
                  data-aos="fade-right"
                  data-aos-duration="1200"
                />
                <Image
                  src={INSTAGRAM}
                  alt=""
                  className=" md:w-6 w-5 h-auto cursor-pointer"
                  data-aos-delay={500}
                  data-aos="fade-right"
                  data-aos-duration="1200"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <MettleSolFrom />
        </div>
      </div>
    </section>
  );
};

export default index;
