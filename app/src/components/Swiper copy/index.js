import Image from "next/image";
import React, { useState } from "react";
import img1 from "../../../../public/assests/home/icons (2).png";
import img2 from "../../../../public/assests/home/icons (3).png";
import img3 from "../../../../public/assests/home/icons (4).png";
import img4 from "../../../../public/assests/home/icons (5).png";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperTwoComponent = () => {
  const [tab, setTab] = useState(0);
  const ImageList = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img1,
    },
  ];
  return (
    <section
      className=" bg-[#ff5500] b w-full h-auto  "
      data-aos="fade-down"
      data-aos-duration="1200"
    >
      <div
        className="flex justify-around md:py-10 py-8 items-center 2xl:px-9 xl:px-9 lg:px-8 md:px-7 px-8 space-x-10"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
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
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          // modules={[Pagination]}
          className="mySwiper"
        >
          {ImageList.map((item, index) => {
            return (
              <SwiperSlide data-aos-delay={`${index}00`} key={index}>
                <div className=" bg-white shadow-xl flex justify-center items-center rounded-lg w-[12rem] min-h-[17rem]">
                  <Image
                    src={item.img}
                    alt=""
                    className=" object-cover w-auto h-auto"
                    priority
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex justify-center items-center gap-4 md:pt-3 md:pb-12 py-4">
        <div
          className={
            (tab == 0 ? "bg-slate-300 sacle-110" : "bg-white ") +
            " cursor-pointer w-5 2xl:h-2 xl:h-2 lg:h-2 md:h-2 h-1  rounded-md duration-300 delay-150 hover:bg-slate-100"
          }
          onClick={() => setTab(0)}
        ></div>
        <div
          className={
            (tab == 1 ? "bg-slate-300 sacle-110" : "bg-white ") +
            " cursor-pointer w-5 2xl:h-2 xl:h-2 lg:h-2 md:h-2 h-1 rounded-md duration-300 delay-150 hover:bg-slate-100"
          }
          onClick={() => setTab(1)}
        ></div>
        <div
          className={
            (tab == 2 ? "bg-slate-300 sacle-110 " : "bg-white") +
            " cursor-pointer w-5 2xl:h-2 xl:h-2 lg:h-2 md:h-2 h-1 rounded-md duration-300 delay-150 hover:bg-slate-200"
          }
          onClick={() => setTab(2)}
        ></div>
      </div>
    </section>
  );
};

export default SwiperTwoComponent;
