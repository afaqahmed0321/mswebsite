import React from "react";

const ColorsLine = ({ classes }) => {
  return (
    <div
      className={
        "2xl:gap-7 xl:gap-7 lg:gap-6 md:gap-5 gap-4 flex 2xl:w-1/5 xl:w-1/5 lg:w-1/5 md:w-56 sm:w-40 w-1/3 absolute z-10 flex-col items-start " +
        classes
      }
    >
      <div
        className="w-full 2xl:h-10 xl:h-10 lg:h-9 md:h-8 h-6 bg-[#FF5500] rounded-full"
        data-aos-delay={100}
        data-aos="fade-right"
        data-aos-duration="1200"
      />
      <div
        className=" w-4/5 2xl:h-10 xl:h-10 lg:h-9 md:h-8 h-6 bg-[#838181] rounded-full"
        data-aos-delay={300}
        data-aos="fade-right"
        data-aos-duration="1200"
      />
      <div
        className="w-full 2xl:h-10 xl:h-10 lg:h-79 md:h-8 h-6 bg-[#FF5500] rounded-full"
        data-aos-delay={500}
        data-aos="fade-right"
        data-aos-duration="1200"
      />
    </div>
  );
};

export default ColorsLine;
