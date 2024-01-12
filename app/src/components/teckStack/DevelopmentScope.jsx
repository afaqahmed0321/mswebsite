import React, { useRef, useCallback } from "react";
import { ChipsComponent } from "../ChipsComponent/ChipsComponent";
import { Box } from "../BoxComponent/BoxComponent";
import reactImage from "../../../../public/assests/tech-stacks/ic_vue.png";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DevelopmentScope = ({
  chipsData,
  cardData,
  technology,
  activeCard,
  handleCardClick,
}) => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="relative max-h-fit " data-aos={"fade-right"}>
      <div className="flex items-center ml-10 sm:ml-10 md:ml-28 md:mt-24 mt-10 md:mb-8 mb-4 text-[#FF5500]">
        <hr className="w-40 h-1  bg-[#FF5500] " />
        <div
          className=" sm:text-2xl md:text-3xl lg:text-4xl ml-4 font-bold"
          data-aos-delay={100}
        >
          {` Mettle Sol's ${technology} Development Scope`}
        </div>
      </div>
      <div
        className="ml-10 sm:ml-10 md:ml-72 text-[#838181]"
        data-aos-delay={200}
      >
        {`Mettle Sol's highly qualified ${technology} Development team is made of dedicated software experts who employ the latest technologies and approaches to build powerful and reliable ${technology} solutions.`}
      </div>
      <div className="flex justify-center">
        <div className=" space-x-6 space-y-10 " data-aos={"fade-down"}>
          {chipsData.map((item, index) => (
            <ChipsComponent
              key={index}
              content={item}
              color={index !== activeCard ? "bg-[#BCBFC2] text-black" : false}
              onChipClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>
      <Swiper
        ref={sliderRef}
        slidesPerView={4}
        pagination={{ clickable: true }}
        className="w-[86vw] md:mt-16"
      >
        <div className="space-x-5 justify-center" data-aos={"fade-down"}>
          {cardData.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                firstText={reactImage}
                secondText={item}
                bottomBorder={true}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div
        className="flex justify-center max-h-fit md:mt-14 mt-7"
        data-aos-delay={300}
      >
        <button className="cursor-pointer" onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            fill="#FF5500"
            className="w-20 h-20"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button className="cursor-pointer" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            fill="#FF5500"
            className="w-20 h-20"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default DevelopmentScope;
