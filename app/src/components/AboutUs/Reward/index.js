import React from "react";
import PageHeading from "../../pageHerdings";
import Image from "next/image";
import IMG from "../../../../../public/assests/aboutus/unnamed-removebg-preview 7.png";
import SwiperButton from "../../SwiperButtons";

const RewardSection = () => {
  return (
    <section className="mx-8 md:pt-20 pt-7">
      <div className="flex 2xl:justify-between  xl:justify-between  lg:justify-between justify-center items-end flex-wrap gap-y-4 ">
        <PageHeading
          heading={"See Our Impressions"}
          parhaOne={
            <div className="2xl:ps-44 xl:ps-44 lg:ps-40">
              Problems trying to resolve the conflict between the two major
              realms
              <br className="2xl:block xl:block lg:block md:hidden sm:hidden hidden" />
              of classNameNameical physics: Newtonian mechanics
            </div>
          }
        />
        <div
          className="flex justify-start items-center gap-5 pb-3 "
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay={100}
        >
          <SwiperButton />
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className="flex justify-center flex-col md:mt-16 bg-[#BFBFBF] w-full h-auto rounded-md md:py-9 py-5 md:px-16 px-7 flex-wrap"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="grid md:grid-cols-6 sm:grid-cols-5 grid-cols-2 gap-x-10 md:gap-y-11 gap-y-5 place-content-around place-items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => {
              return (
                <div
                  key={index}
                  className="w-full max-h-fit"
                  data-aos="zoom-out-right"
                  data-aos-duration="1200"
                  data-aos-delay={`${index}00`}
                >
                  <Image
                    src={IMG}
                    alt=""
                    width={"auto"}
                    height={"auto"}
                    className="md:w-36"
                  />
                </div>
              );
            })}
          </div>

          {/* <button
            className="text-[#FF5500] font-semibold font-[Inter] md:mt-32 mt-8"
            data-aos="zoom-out-down"
            data-aos-duration="1200"
          >
            Readmore
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default RewardSection;
