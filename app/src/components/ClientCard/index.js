import Image from "next/image";
import React from "react";
import Team1 from "../../../../public/assests/aboutus/images (1).png";

const ClientCard = ({ description, date, img, aosDelay }) => {
  return (
    <div
      className={
        "max-w-md h-auto flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col flex-col-reverse"
      }
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-delay={aosDelay}
    >
      <div className="flex flex-col items-center justify-center py-5">
        <h6 className="text-[#FF5500] border-b-2 border-[#FF5500] py-1 text-xl leading-9 font-medium font-sans justify-center">
          {date}
        </h6>
        <p className="text-[#717171] py-1 md:text-lg text-xs md:leading-7 font-sans font-normal md:px-2 px-2 w-2/3 flex justify-center items-center text-center">
          {description}
        </p>
        <button className="flex gap-2 md:text-lg text-xs items-center text-[#FF5500] font-sans font-semibold">
          Readmore
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
      </div>
      <div>
        <Image src={img} alt="" />
      </div>
    </div>
  );
};

export default ClientCard;
