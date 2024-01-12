import React from "react";
import PageHeading from "../../pageHerdings";
import FlexibalCard from "../../FlexiblCard";
import { cardDetails } from "../../../api/Flexibal";

const index = () => {
  return (
    <section className="2xl:px-14 xl:px-14 lg:px-12 md:px-10 px-5 2xl:py-12 xl:py-10 lg:py-10 md:py-8 py-6">
      <PageHeading
        heading={"Flexible solutions for varying business needs"}
        parhaOne={
          <div className="2xl:text-2xl font-sans font-normal text-justify leading-10 text-[#838181] 2xl:pl-44 xl:44 lg:pl-44 md:pl-32 whitespace-pre-line ">
            Choose the engagement model that suits yourrequirements & team
            dynamics.
          </div>
        }
      />
      <div className="flex items-stretch justify-evenly 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap flex-wrap  gap-8 2xl:pt-28 xl:pt-24 lg:pt-20 md:pt-16 pt-10">
        {cardDetails.map((items, index) => {
          return (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration={"1000"}
            >
              <FlexibalCard
                key={items.id}
                cardColor={items.bgColor}
                circleColor={items.circleColor}
                title={items.title}
                numberText={items.numberText}
                description={items.description}
              />
            </div>
          );
        })}
      </div>
      <div className="md:mt-20 mt-10">
        <PageHeading heading={"Technologies We Use"} />
      </div>
    </section>
  );
};

export default index;
