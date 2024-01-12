import React, { useCallback, useRef } from "react";
import PageHeading from "../pageHerdings";
import SwiperButtons from "../SwiperButtons";
import RettingCard from "../Blog/RettingCard";
import { Swiper, SwiperSlide } from "swiper/react";

const Index = () => {
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
    <section
      className="2xl:px-14 xl:px-14 lg:px-12 md:px-10 px-5 2xl:py-12 xl:py-10 lg:py-10 md:py-8 py-6"
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="1700"
    >
      <div className="flex justify-between items-start">
        <PageHeading
          heading={"See Our Impressions"}
          parhaOne={
            <div className="2xl:pl-44 xl:pl-44 lg:pl-40 md:pl-32 ">
              Problems trying to resolve the conflict between the two major
              realms
              <br className=" hidden 2xl:block xl:block lg:block md:block" /> of
              Classical physics: Newtonian mechanics
            </div>
          }
        />
        <SwiperButtons rightClick={handleNext} leftClick={handlePrev} />
      </div>
      {/* <div className=" flex justify-start items-center flex-nowrap no-scrollbar overflow-x-scroll py-20 gap-20"> */}
      <Swiper
        ref={sliderRef}
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        // modules={[Pagination]}
        className="mySwiper md:my-20"
      >
        <SwiperSlide>
          <RettingCard />
        </SwiperSlide>
        <SwiperSlide>
          <RettingCard />
        </SwiperSlide>
        <SwiperSlide>
          <RettingCard />
        </SwiperSlide>
        <SwiperSlide>
          <RettingCard />
        </SwiperSlide>
        <SwiperSlide>
          <RettingCard />
        </SwiperSlide>
      </Swiper>
      {/* </div> */}
    </section>
  );
};

export default Index;
