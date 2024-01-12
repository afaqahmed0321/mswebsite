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
  delayIndex,
}) => {
  return (
    <div
      className={`w-full cursor-pointer hover:scale-105 transition-all ease-in-out duration-500 delay-200 h-full  md:px-10 px-4 md:py-16 py-5 bg-[${
        cardColor ? "#ff5500" : "#BCBFC2"
      }] hover:bg-[${
        cardColor === true ? "#BCBFC2" : "#ff5500"
      }] rounded-lg hadow-xl`}
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-delay={delayIndex}
      >
        {img && (
          <div className="flex items-center flex-col justify-center md:py-16 py-10  gap-10">
            <div className="flex justify-center items-center">
              <Image src={img} className={imgClasses} alt=""/>
            </div>
            <div className="text-white md:text-lg text-xs font-sans font-semibold leading-5">
              {imgTitle}
            </div>
          </div>
        )}

        {numberText && (
          <h4 className=" relative md:text-6xl text-4xl text-white font-sans font-bold min-heading flex justify-center items-end h-fit space-x-1">
            <span>{numberText} </span>
            <span
              className={`${
                circleColor ? "bg-white" : "bg-[#FF5500] "
              } rounded-full 2xl:w-4 xl:w-2 lg:w-2 md:w-2 w-2 2xl:h-4 xl:h-2 lg:h-2 md:h-2 h-2 2xl:mb-4 xl:mb-3 lg:mb-2 md:mb-2 mb-2`}
            />
          </h4>
        )}
        <h6 className=" text-center font-sans font-semibold md:text-2xl text-2xl py-2 text-white md-leading-9 leading-7">
          {title}
        </h6>
        <p className=" md:text-lg text-sm text-white text-left font-sans font-normal md:leading-9 leading-7 ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default index;
