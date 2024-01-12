import Image from "next/image";
import React from "react";
const index = ({
  circleColor,
  cardColor,
  numberText,
  title,
  description,
  img,
  imgClasses,
  imgTitle,
  delayIndex
}) => {
  return (
    <div
      className={`w-full cursor-pointer hover:scale-105 transition-all ease-in-out duration-500 delay-200 h-auto 2xl:px-10 xl:px-8 lg:px-6 md-px-4 px-4 py-4 bg-[${
        cardColor ? "#ff5500" : "#BCBFC2"
      }] hover:bg-[${
        cardColor === true
          ? "#BCBFC2"
          : "#ff5500"
      }] rounded-xl shadow-xl`}
      data-aos="fade-right"
     data-aos-duration="2000"
     data-aos-delay={`${delayIndex}00`}
    >
      {img && (
        <div className="flex items-center flex-col justify-center 2xl:py-60 xl:py-56 lg:py-48 md:py-32 py-20  gap-10">
          <div className="flex justify-center items-center">
            <Image src={img} className={imgClasses} alt="" />
          </div>
          <div className="text-white 2xl:text-3xl xl:text-3xl lg:text-xl md:text-lg text-xs font-sans font-semibold 2xl:leading-[4rem] xl:leading-[3.5rem] lg:leading-10 md:leading-9  leading-5">
            {imgTitle}
          </div>
        </div>
      )}

      {numberText && (
        <h4 className=" relative 2xl:text-[6.4rem] xl:text-6xl lg:text-5xl md:text-4xl text-4xl text-white font-sans font-bold min-heading flex justify-center items-end h-fit 2xl:space-x-0 xl:space-x-0 lg:space-x-0 md:space-x-0 sm:space-x-0 space-x-2">
          <span>{numberText} </span>
          <span
            className={`${
              circleColor ? "bg-white" : "bg-[#FF5500] "
            } rounded-full 2xl:w-4 xl:w-2 x lg:w-2 md:w-2 w-2 2xl:h-4 xl:h-2 lg:h-2 md:h-2 h-2 2xl:mb-4 xl:mb-3 lg:mb-2 md:mb-2 mb-2`}
          />
        </h4>
      )}
      <h6 className=" text-center font-sans font-normal 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl text-2xl py-2 text-white 2xl:leading-[5rem] xl:leading-[4rem] lg:leading-10 md-leading-9 leading-7">
        {title}
      </h6>
      <p className="2xl:text-2xl xl:text-xl lg:text-lg md:text-md text-md text-white font-sans font-normal 2xl:leading-10 xl:leading-8 lg:leading-6 md:leading-7 leading-7 ">
        {description}
      </p>
    </div>
  );
};

export default index;
