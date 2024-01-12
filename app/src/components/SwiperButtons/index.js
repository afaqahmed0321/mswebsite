import React from "react";

const index = ({ leftClick, rightClick }) => {
  return (
    <div className="flex justify-start items-center gap-5 pb-3 ">
      <span
        className="p-2 md:w-16 md:h-16 w-12 h-12  bg-[#FF5500] hover:bg-white ease-in-out duration-300 hover:border-2 border-[#ff5500] flex justify-center items-center rounded-full cursor-pointer"
        onClick={leftClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-white hover:text-[#ff5500] 2xl:w-16 xl:w-12 lg:w-10 md:w-8 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </span>
      <span
        className="p-2 md:w-16 md:h-16 w-12 h-12 bg-[#FF5500] flex justify-center  ease-in-out duration-300 hover:border-2 border-[#ff5500] items-center rounded-full cursor-pointer hover:bg-white"
        onClick={rightClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-white hover:text-[#ff5500] 2xl:w-16 xl:w-12 lg:w-10 md:w-8 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </span>
    </div>
  );
};

export default index;
