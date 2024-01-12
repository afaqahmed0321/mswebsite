import React from "react";
import { BLOGDEATILSDATA } from "@/app/src/api/BlogDetail";
const index = () => {
  return (
    <section>
      <div className="2xl:px-14 xl:px-14 lg:px-12 md:px-10 px-5 md:py-20 py-10 md:space-y-11">
        {BLOGDEATILSDATA.map((item, index) => {
          return (
            <div key={index}>
              <h4
                className="text-[#ff5500]  md:text-5xl text-xl leading-10 font-sans font-semibold "
                data-aos-delay={`${index}00`}
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                {item.heading}
              </h4>
              <p
                className="text-[#838181]  md:text-xl text-sm md:leading-8 leading-6 font-normal font-sans md:pt-5 pt-3"
                data-aos-delay={100 + `${index}00`}
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                {item.prha}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default index;
