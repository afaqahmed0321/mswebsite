import React from "react";
import PageHeading from "../../pageHerdings";
import { QUICKSTEPDATA } from "@/app/src/api/Career";
import QuickCard from "../../QuickCard";

const index = () => {
  return (
    <section className="2xl:px-14 xl:px-14 lg:px-12 md:px-10 px-5 2xl:py-16 xl:py-8 lg:py-5 md:py-6 py-10  duration-300">
      <PageHeading
        heading={"Quick step to get your job"}
        parhaOne={
          <div className="2xl:pl-44 xl:44 lg:pl-44 md:pl-32 whitespace-pre-line ">
            {
              " The software development industry is growing bigger all the time, and it's easy to see why; in today's world, businesses great and small have an ever-increasing need for custom software solutions to help them keep up with the competition"
            }
          </div>
        }
      />
      <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-7 gap-4 lg:py-14  py-10">
        {QUICKSTEPDATA.map((items, index) => {
          return (
            <QuickCard
              key={index}
              title={items.title}
              description={items.description}
              count={items.count}
              btnText={items.btnText}
              aosDataDelay={`${index}00`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default index;
