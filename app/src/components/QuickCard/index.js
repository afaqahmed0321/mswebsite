import React from "react";

const idnex = ({ title, description, btnText, count, aosDataDelay }) => {
  return (
    <div
      data-aos="zoom-out"
      data-aos-duration="1000"
      data-aos-delay={aosDataDelay}
    >
      <div className="border-4 border-[#ff5500] p-3 xl: py-6 text-[#ff5500] max-[440px]:max-w-sm h-auto hover:bg-[#ff5500] hover:text-white hover:border-slate-300 hover:outline-1 outline-[#000000] hover:-translate-x-1 hover:rounded-md group-hover:translate-y-2 duration-300 transition-all ease-linear hover:border-3 cursor-pointer hover:shadow-xl ">
        <div className="flex justify-between items-start">
          <div>
            <h6 className="xl:text-4xl lg:text-3xl md:text-2xl text-lg 374px]:text-xs font-sans capitalize">
              <strong>{title}</strong>
            </h6>
            <p className="lg:text-lg text-sm font-light line-clamp-3 max-[374px]:text-xs leading-6 lg:pt-3">
              {description}
            </p>
            <button className=" rounded-full font-sans font-light capitalize py-1 px-8 border-2 border-[#ff5500] xl:mt-14 hover:bg-white hover:text-[#ff5500] ease-in-out duration-300  hover:translate-x-1 hover:translate-y-1 active:scale-95 mt-5 hover:border-white shadow-md">
              {btnText}
            </button>
          </div>
          <div className="xl:text-8xl lg:text-6xl text-5xl font-semibold">
            {count}
          </div>
        </div>
      </div>
    </div>
  );
};

export default idnex;
