import React, { useCallback, useRef } from "react";

import Image from "next/image";

import image from "../../../../public/assests/projects/img.png";
import image1 from "../../../../public/assests/projects/img1.png";
import image2 from "../../../../public/assests/projects/img2.png";
import image3 from "../../../../public/assests/projects/img3.png";
import image4 from "../../../../public/assests/projects/img4.png";
import image5 from "../../../../public/assests/projects/img5.png";

import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";
import { Swiper, SwiperSlide } from "swiper/react";

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
    image: image2,
    heading: "Excellent Consulting Service to Build your Company",
    para: "Our Healthtech Consulting and Software Development Services have Empowered B...",
  },
  {
    image: image3,
    heading: "Excellent Consulting Service to Build your Company",
    para: "Our Healthtech Consulting and Software Development Services have Empowered B...",
  },
  {
    image: image4,
    heading: "Excellent Consulting Service to Build your Company",
    para: "Our Healthtech Consulting and Software Development Services have Empowered B...",
  },
  {
    image: image5,
    heading: "Excellent Consulting Service to Build your Company",
    para: "Our Healthtech Consulting and Software Development Services have Empowered B...",
  },
];

export default function TechProjects() {
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
    <section className="relative max-h-fit">
      <div
        className="flex items-center ml-10 sm:ml-10 md:ml-28 md:mt-24 mt-10 md:mb-8 text-[#FF5500]"
        data-aos={"fade-right"}
      >
        <hr className="w-40 h-1  bg-[#FF5500] " />
        <div className=" sm:text-2xl md:text-3xl lg:text-4xl ml-4 font-bold">
          Our Projects
        </div>
      </div>

      <section className="relative min-h-screen max-h-fit md:my-10">
        <div className=" w-full text-center gap-10">
          <Swiper
            ref={sliderRef}
            breakpoints={{
              987: {
                slidesPerView: 3,
              },
              767: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 1,
              },
            }}
            spaceBetween={450}
            pagination={{ clickable: true }}
            className=" mt-16"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="justify-center w-fit flex mx-4 bg-[#FAFAFA]"
                  data-aos={"zoom-out"}
                  data-aos-duration={1600}
                  data-aos-delay={`${index}00`}
                >
                  <div className="border-4 border-[#FF5500] rounded-md min-h-[90vh] max-h-max sm:w-[600px] sm:min-w-[380px] md:w-[600px] md:min-w-[380px] ">
                    <div className="h-1/2">
                      <Image
                        src={item.image}
                        alt={`image ${index + 1}`}
                        className="h-full"
                      />
                    </div>
                    <div className="mx-11 flex flex-col justify-center py-3 ">
                      <div className="text-[#838181] font-semibold text-lg md:text-3xl my-2 md:my-3 lg:my-3">
                        {item.heading}
                      </div>
                      <div className="text-[#FF5500] text-sm md:text-2xl my-3 md:my-5 lg:my-5">
                        {item.para}
                      </div>
                      <button className="border-2 border-[#FF5500] bg-white hover:bg-[#ff5500] w-40 px-4 py-1 md:px-5 md:py-3 rounded-md text-[#FF5500] flex justify-between self-center">
                        <div className="h-8 flex items-center ">View More</div>{" "}
                        <ArrowSmallRightIcon className="h-8" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className="flex justify-center max-h-fit mt-14"
          data-aos={"fade-down"}
          data-aos-duration={1600}
        >
          <button
            className="cursor-pointer"
            onClick={handlePrev}
            data-aos-delay={100}
          >
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

          <button
            className="cursor-pointer"
            onClick={handleNext}
            data-aos-delay={100}
          >
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
    </section>
  );
}
