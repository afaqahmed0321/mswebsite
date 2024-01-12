import React from "react";
import PageHeading from "../../pageHerdings";
import { OURLATESTNEWSDATA } from "@/app/src/api/Career";
import OutLatestCard from "@/app/src/components/OurlatestNewa";

const index = () => {
  return (
    <section className="2xl:px-14 xl:px-14 lg:px-12 md:px-10 px-5 2xl:py-16 xl:py-8 lg:py-5 md:py-6 pt-5">
      <PageHeading
        heading={"Our latest news"}
        parhaOne={
          <div className="2xl:pl-44 xl:44 lg:pl-44 md:pl-32">
            {
              "The software development industry is growing bigger all the time, and it's easy to see why; in today's world, businesses great and  small have an ever-increasing need for custom software solutions to help them keep up with the competition"
            }
          </div>
        }
      />
      <div className="grid grid-flow-row  lg:grid-cols-3  grid-cols-1 lg:gap-7 gap-y-10 lg:py-14  pt-5">
        {OURLATESTNEWSDATA.map((items, index) => {
          return (
            <OutLatestCard
              key={index}
              heading={items.heading}
              description={items.description}
              image={items.image}
              bgColor={items.bgColor}
              aosDelay={`${index}00`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default index;
