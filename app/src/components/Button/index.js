import React from "react";

const index = ({ label, icon, classes }) => {
  return (
    <button
      className={
        (classes
          ? classes
          : "2xl:px-6 xl:px-6 lg:px-5 md:px-5 px-4  2xl:py-5 xl:py-5 lg:py-4 py-3") +
        " bg-[#ff5500] flex items-center active:animate-bounce text-white space-x-3 font-sans font-semibold  rounded-md hover:bg-white hover:text-[#ff5500] ease-in-out transition-all duration-300 hover:ring-2 focus-visible:scale-x-50 ring-[#ff5500]"
      }
    >
      <span>{label}</span>
      {icon && icon}
    </button>
  );
};

export default index;
