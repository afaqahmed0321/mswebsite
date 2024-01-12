import React, { useCallback, useRef } from "react";
import Collapse from "../../Collapse";
import { COLLPASEDATA } from "../../../api/Collapse";
import PageHeading from "../../pageHerdings";
import SwiperButtons from "../../SwiperButtons";
import image from "../../../../../public/assests/projects/img.png";
import image1 from "../../../../../public/assests/projects/img1.png";
import image2 from "../../../../../public/assests/projects/img2.png";
import image3 from "../../../../../public/assests/projects/img3.png";
import image4 from "../../../../../public/assests/projects/img4.png";
import image5 from "../../../../../public/assests/projects/img5.png";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "../../ProjectCard";
const data = [
  {
    image: image,
    heading: "Excellent Consulting Service to Build your Company",
    para: "Our Healthtech Consulting and Software Development Services have Empowered B...",
  },
  {
    image: image1,
    heading: "Excellent Consulting Service to Build your Company",
    para: "Our Healthtech Consulting and Software Development Services have Empowered B...",
  },
  {
    image: image1,
    heading: "Excellent Consulting Service to Build your Company",
    para: "Our Healthtech Consulting and Software Development Services have Empowered B...",
  },
  {
    image: image1,
    heading: "Excellent Consulting Service to Build your Company",
    para: "Our Healthtech Consulting and Software Development Services have Empowered B...",
  },
  {
    image: image1,
    heading: "Excellent Consulting Service to Build your Company",
    para: "Our Healthtech Consulting and Software Development Services have Empowered B...",
  },
];
const Index = ({ collapse : boolean, heading : string }) => {
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
    <section className="2xl:px-14 xl:px-14 lg:px-12 md:px-10 px-5 md:py-12 ">
      {collapse && (
        <div className="2xl:space-y-10 xl:space-y-9 lg:space-y-8 md:space-y-7 space-y-5">
          {COLLPASEDATA.map((item) => {
            return (
              <Collapse
                key={item.id}
                heanding={item.heading}
                discription={item.description}
                delayIndex={item.id + 300}
              />
            );
          })}
        </div>
      )}
      <section className=" md:pt-12 pt-5">
        <PageHeading heading={heading ? heading : "Recent Projects"} />
        <Swiper
          ref={sliderRef}
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          // modules={[Pagination]}
          className="mySwiper md:my-20"
        >
          {data.map((items, index) => {
            return (
              <SwiperSlide key={index}>
                <ProjectCard
                  heading={items.heading}
                  para={items.para}
                  image={items.image}
                  index={index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          className="flex justify-center items-center md:pt-10 pt-4"
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay={500}
        >
          <SwiperButtons rightClick={handleNext} leftClick={handlePrev} />
        </div>
      </section>
    </section>
  );
};

export default Index;
