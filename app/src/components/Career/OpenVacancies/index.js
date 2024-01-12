import { OPENVACANCIES } from "@/app/src/api/Career";
import Image from "next/image";
import React from "react";
import Button from "../../Button";

const index = () => {
  return (
    <section className="2xl:px-60 xl:px-52 lg:px-40 md:px-10 px-5 py-5  duration-300">
      <h6
        className="text-[#ff5500] lg:text-4xl md:text-lg font-sans font-semibold"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        Open vacancies
      </h6>
      <div className="flex flex-col gap-10 md:py-10 py-7">
        {OPENVACANCIES.map((item, index) => {
          return (
            <div
              class="max-w-full flex justify-start item-start lg:gap-10 gap-4 max-[374px]:flex-col max-[374px]:shadow-xl max-[374px]:overflow-hidden max-[374px]:rounded-lg"
              key={index}
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay={`${index}00`}
            >
              <Image
                src={item.iamge}
                alt=""
                className="md:w-64 md:h-52 w-36 h-40 max-[374px]:w-full max-[374px]:h-40  outline-8 outline-[#ff5500] rounded-sm"
              />

              <div className="max-[374px]:p-3 flex flex-col justify-center items-start md:gap-5 gap-2">
                <h6 className="font-[Poppins] text-[#ff5500] font-semibold  md:text-2xl text-lg">
                  {item.titile}
                </h6>
                <p className="md:text-lg  text-sm font-sans text-[#838181] line-clamp-3 max-[374px]:max-w-xs ">
                  {item.description}
                </p>
                <Button
                  label={"Apply Now"}
                  classes={"md:py-2 md:px-8 py-1 px-4 text-sm"}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="flex justify-center items-center py-4"
        data-aos="zoom-out-right"
        data-aos-duration="1200"
      >
        <button className="lg:py-4  md:px-10 px-8 py-2 text-[#ff5500] duration-300 hover:skew-x-1 active:font-extrabold hover:scale-105 transition-all font-sans font-light md:text-lg text-sm bg-white border-2 md:rounded-xl rounded-md  hover:bg-[#ff5500] hover:text-white border-[#ff5500]">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default index;
