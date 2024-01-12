import React from "react";

const PageHeading = ({
  heading,
  parhaOne,
  parhaTwo,
  headingColor,
  lineStyle,
  headingClesses,
  lineClesses,
}) => {
  return (
    <div
      className="flex flex-col flex-nowrap items-besline font-[Nunito Sans]"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className=" flex md:space-x-8 space-x-5 items-center">
        <div
          className={
            (lineStyle
              ? lineStyle
              : "px-10 2xl:w-32 xl:w-32 lg:w-28 md:w-24 sm:w-24 w-18") +
            `  h-[3px] bg-[${
              headingColor ? headingColor : "#FF5500"
            }] rounded-xl text-nowarp self-start my-6 ${lineClesses}`
          }
        />
        <div>
          <h6
            className={`md:text-[2.5rem] capitalize text-2xl text-nowrap lg:leading-[3.125rem] font-bold text-[${
              headingColor ? headingColor : "#FF5500"
            }] ${headingClesses}`}
          >
            {heading}
          </h6>
        </div>
      </div>
      <div className="display-block py-2">
        <div className="text-[#838181] md:text-xl text-sm leading-5 font-normal text-justify font-sans">
          {parhaOne}
        </div>
        <div className="text-[#838181] leading-10 md:text-[1.75rem] text-sm text-justify font-sans">
          {parhaTwo}
        </div>
      </div>
    </div>
  );
};

export default PageHeading;
