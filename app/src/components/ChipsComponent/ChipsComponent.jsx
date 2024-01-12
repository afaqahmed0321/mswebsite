import React from "react";

export const ChipsComponent = ({ content, color, active, onChipClick }) => {
  return (
    <div
      onClick={onChipClick}
      data-aos="zoom-in"
      data-aos-duration="1200"
      className={`${
        color ? color : "bg-[#FF5500] text-white"
      } center relative inline-block whitespace-nowrap rounded-3xl md:py-2.5  md:px-6 px-4 align-baseline md:text-sm text-xs font-medium leading-8 w-fit cursor-pointer`}
    >
      {content}
    </div>
  );
};
