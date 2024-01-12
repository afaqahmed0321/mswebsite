import Image from "next/image";
import React, { useState } from "react";
import img1 from "../../../../public/assests/swip-icons/Notion.png";
import img2 from "../../../../public/assests/swip-icons/trello.png";
import img3 from "../../../../public/assests/swip-icons/logos_monday.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const SwiperComponent = () => {
  const [tab, setTab] = useState(0);
  const ImageList = [
    {
      img: img1,
    },
    {
      img: img3,
    },
    {
      img: img1,
    },
    {
      img: img3,
    },
    {
      img: img1,
    },
  ];
  return (
    <section
      className=" border-t-2 border-b-2 border-[#ff5500] b w-full h-auto  "
      data-aos="zoom-in-down"
      data-aos-duration="800"
    >
      <div className="flex justify-start 2xl:py-20 xl:py-20 lg:py-14 md:py-12 py-8 items-center 2xl:px-28 xl:px-28 lg:px-24 md:px-20 px-10 space-x-28  flex-nowrap flex-row">
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        // modules={[Pagination]}
        className="mySwiper"
        >
          {ImageList.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="w-40 h-12">
                  <Image
                    src={item.img}
                    alt=""
                    className="w-auto h-full"
                    priority
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex justify-center items-center gap-4 2xl:py-4 xl:py-4 lg:py-4 md:py-3 py-4">
        <div
          className={
            (tab == 0 ? "bg-[#ff5500] sacle-110" : "bg-slate-300") +
            " cursor-pointer w-5 2xl:h-2 xl:h-2 lg:h-2 md:h-2 h-1  rounded-md duration-300 delay-150 hover:bg-[#ff5500]"
          }
          onClick={() => setTab(0)}
        ></div>
        <div
          className={
            (tab == 1 ? "bg-[#ff5500] sacle-110" : "bg-slate-300") +
            " cursor-pointer w-5 2xl:h-2 xl:h-2 lg:h-2 md:h-2 h-1 rounded-md duration-300 delay-150 hover:bg-[#ff5500]"
          }
          onClick={() => setTab(1)}
        ></div>
        <div
          className={
            (tab == 2 ? "bg-[#ff5500] sacle-110" : "bg-slate-300") +
            " cursor-pointer w-5 2xl:h-2 xl:h-2 lg:h-2 md:h-2 h-1 rounded-md duration-300 delay-150 hover:bg-[#ff5500]"
          }
          onClick={() => setTab(2)}
        ></div>
      </div>
    </section>
  );
};

export default SwiperComponent;
