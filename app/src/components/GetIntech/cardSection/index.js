import React from "react";
import FlexibleCard from "../../FlexiblCard";
import { GETINTECHCARDDATA } from "../../../api/GetInTech";

const index = () => {
  return (
    <section>
      <div className="2xl:px-14 xl:px-14 lg:px-12 md:px-10 px-5 md:py-10 py-6">
        <h4
          className="text-[#ff5500]  md:text-5xl text-xl leading-10 font-sans font-semibold "
          data-aos-delay={0}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Prefer to reach out directly?
        </h4>
        <p
          className="text-[#838181]  md:text-xl text-sm md:leading-8 leading-6 font-normal font-sans md:pt-5 pt-3"
          data-aos-delay={100}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          We collaborate proactively with our customers to provide them with the
          best available resources and solutions to IT-related market
          challenges. We are highly competitive, and bring value to our
          customers by meeting their core interests. Our core principle guide us
          to help our consumers in every aspect of their IT business journey.
        </p>
      </div>
      <div className="flex justify-between items-stretch md:space-x-3 space-x-0 2xl:px-14 xl:px-14 lg:px-12 md:px-10 scroll-p-5">
        {GETINTECHCARDDATA.map((item, index) => {
          return (
            <div
              key={index}
              className=" w-full"
              data-aos-delay={`${item.id}00`}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <FlexibleCard
                key={item.id}
                cardColor={item.cardColor}
                img={item.img}
                imgClasses={" md:w-32 sm:w-24 w-auto"}
                imgTitle={item.titile}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default index;
