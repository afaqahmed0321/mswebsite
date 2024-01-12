"use client";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
// import BGIMG from "../../../../../public/assests/teckStack/bg (1).png";
import PageHeading from "../../pageHerdings";
import "./index.css";
import ProjectCard from "../ProjectCard";
import REACTICON from "../../../../../public/assests/teckStack/react.png";
import SwiperButton from "@/app/src/components/SwiperButtons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

const TABITEMS = [
  {
    id: 1,
    title: "Reactive Applications",
  },
  {
    id: 2,
    title: "UI Component",
  },
  {
    id: 3,
    title: "Testing",
  },
  {
    id: 4,
    title: "Data Visualization",
  },
  {
    id: 5,
    title: "Architecture",
  },
  {
    id: 6,
    title: "Documentation",
  },
];
const CARDITMES = [
  { img: REACTICON, title: "RxJS" },
  { img: REACTICON, title: "NgRx" },
  { img: REACTICON, title: "Akita" },
  { img: REACTICON, title: "RXAngular" },
  { img: REACTICON, title: "RxJS" },
  { img: REACTICON, title: "NgRx" },
  { img: REACTICON, title: "Akita" },
  { img: REACTICON, title: "RXAngular" },
];
const Hero = () => {
  const [active, setActive] = useState(1);
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
    <section className="relative hero-bg" data-aos="fade-left">
      <div className="px-8 md:pt-32 py-0">
        <div className="">
          <h2
            className="font-sans drop-shadow-lg z-10 font-bold  md:text-6xl text-2xl  md:text-white text-[#FF5500] text-center md:py-14 py-8"
            data-aos="fade-down"
            data-aos-duration="1400"
          >
            Angular Development Services
          </h2>
          <PageHeading
            heading={
              <span className="2xl:text drop-shadow-lg 2xl:text-white xl:text-white lg:text-white md:text-white sm:text-white text-[#FF5500]">
                Angular developers with a proven track record
              </span>
            }
            lineClesses={
              "2xl:bg-white xl:bg-white lg:bg-white md:bg-white sm:bg-white"
            }
          />
        </div>
      </div>
      <div
        className="flex justify-around gap-7 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-nowrap flex-wrap px-8 md:pt-20 pt-8"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div
          data-aos-delay={100}
          className=" bg-[#FF5500] flex justify-center items-center text-white space-y-8 flex-col w-full md:min-h-[25rem] min-h-[16rem] rounded-sm shadow-lg ease-in-out hover:scale-105 hover:shadow-xl duration-300 delay-200 transition-all hover:cursor-pointer hover:rounded-lg"
        >
          <h6 className="md:text-6xl text-3xl text-white font-sans font-bold md:leading-7 leading-7">
            128
          </h6>
          <p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-xl  font-normal text-white md:pt-8 pt-4">
            Angular IT Projects
          </p>
        </div>
        <div
          data-aos-delay={200}
          className=" bg-white border-b-8 border-[#FF5500] flex justify-center items-center  space-y-8 flex-col w-full md:min-h-[25rem] min-h-[16rem] shadow-xl ease-in-out hover:scale-105 hover:shadow-xl duration-300 delay-200 transition-all hover:cursor-pointer hover:rounded-lg"
        >
          <h6 className="md:text-6xl text-2xl text-[#FF5500] font-sans font-bold md:leading-7 leading-7">
            128
          </h6>
          <p className="md:text-5xl text-xl font-normal text-[#FF5500] md:pt-8 pt-4">
            Angular IT Projects
          </p>
        </div>
        <div
          data-aos-delay={300}
          className=" bg-[#FF5500] flex justify-center items-center flex-col w-full md:min-h-[25rem]  space-y-8 min-h-[16rem] rounded-sm shadow-lg ease-in-out hover:scale-105 hover:shadow-xl duration-300 delay-200 transition-all hover:cursor-pointer hover:rounded-lg"
        >
          <h6 className=" md:text-6xl text-xl text-white font-sans font-bold md:leading-7 leading-7">
            128
          </h6>
          <p className=" md:text-5xl text-xl  font-normal text-white md:pt-8 pt-4">
            Angular IT Projects
          </p>
        </div>
      </div>
      <div className="md:pt-20 pt-10  px-8 transition-transform">
        <PageHeading
          heading={"Mettle Sol's Angular Development Scope"}
          parhaOne={
            <div className="2xl:pl-40 xl:pl-40 lg:px-36 text-[#838181]">
              {
                "  Mettle Sol's highly qualified Angular Development team is made of dedicated software experts who employ the latest technologies and approaches to build powerful and reliable Angular solutions."
              }
            </div>
          }
        />
        <div className="flex justify-end items-center gap-x-4 gap-y-8 flex-wrap md:pt-16 pt-9 md:pb-5">
          {TABITEMS.map((items, index) => {
            return (
              <div
                key={index}
                data-aos-delay={`${index}00`}
                data-aos="fade-left"
                data-aos-duration="1400"
              >
                <div
                  className={
                    "transition-all hover:scale-105 duration-300 ease-in-out cursor-pointer "
                  }
                >
                  <span
                    className={
                      (active == items.id
                        ? `bg-[#FF5500] text-white `
                        : `bg-[#BCBFC2] text-[#212121] `) +
                      `font-sans font-normal  md:text-lg text-sm hover:font-medium leading-10 2xl:px-8 xl:px-8 lg:px-7 md:px-6 px-4  py-3 rounded-full hover:text-white duration-300 ease-in-out delay-100`
                    }
                    onClick={() => setActive(items.id)}
                  >
                    {items.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div data-aos={"zoom-in"} data-aos-duration="1400">
          <Swiper
            ref={sliderRef}
            slidesPerView={"auto"}
            spaceBetween={30}
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
                spaceBetween: 30,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {CARDITMES.map((items, index) => {
              return (
                <SwiperSlide key={index} className="md:py-10">
                  <div data-aos-delay={`${index}00`}>
                    <ProjectCard
                      img={items.img}
                      title={items.title}
                      delay={`${index}00`}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="flex justify-center">
            <SwiperButton rightClick={handleNext} leftClick={handlePrev} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
