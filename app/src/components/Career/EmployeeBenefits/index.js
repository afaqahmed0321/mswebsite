import { EMPLOYEEBENEFITSDATA } from "@/app/src/api/Career";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <section className="2xl:px-60 xl:px-52 lg:px-40 md:px-10 px-5  md:py-6 py-10">
      <h6
        className="text-[#ff5500] lg:text-4xl md:text-lg font-sans font-semibold"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        Employee benefits.
      </h6>
      <div className="grid md:grid-cols-3 grid-cols-2 max-[375px]:grid-cols-1   md:gap-x-10  md:gap-y-10  gap-6 lg:mt-10 mt-5 place-content-center ">
        {EMPLOYEEBENEFITSDATA.map((items, index) => {
          return (
            <div
              key={index}
              data-aos="zoom-out-right"
              data-aos-duration="1200"
              data-aos-delay={`${index}00`}
            >
              <div className="flex justify-start flex-col lg:max-w-2xl max-w-sm  duration-300  transition-all hover:skew-x-2 hover:translate-x-2 hover:-translate-y-3 hover:scale-105 cursor-pointer ease-linear">
                <Image src={items.image} className="" alt="" />
                <p className="md:text-xl sm:text-sm font-sans font-normal text-[#838181] py-3">
                  {items.titile}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default index;
