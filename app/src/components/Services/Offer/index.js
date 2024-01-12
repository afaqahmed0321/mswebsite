import React from "react";
import PageHeading from "../../pageHerdings";
import FlexibalCard from "../../FlexiblCard";
import { cardDetailsTwo } from "@/app/src/api/Flexibal";

const index = () => {
  return (
    <section className="2xl:px-14 xl:px-14 lg:px-12 md:px-10 px-5 2xl:py-12 xl:py-10 lg:py-10 md:py-8 py-6">
      <PageHeading
        heading={"Services We Offer"}
        parhaOne={
          <div className=" font-sans  text-justify 2xl:pl-44 xl:44 lg:pl-44 md:pl-32 whitespace-pre-line ">
            {
              "  The software development industry is growing bigger all the time, and it's easy to see why; in today's world, businesses great and small have an ever-increasing need for custom software solutions to help them keep up with the competition"
            }
          </div>
        }
      />
      <div className=" grid grid-flow-row lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 md:pt-16 pt-10">
        {cardDetailsTwo.map((items) => {
          return (
            <FlexibalCard
              key={items.id}
              delayIndex={items.id}
              cardColor={items.bgColor}
              circleColor={items.circleColor}
              title={items.title}
              numberText={items.numberText}
              description={items.description}
              textColor={items.bgColor}
            />
          );
        })}
      </div>
      <div className="mt-16">
        <PageHeading
          heading={"Lorem ipsum"}
          parhaOne={
            <div className="2xl:pl-44 xl:44 lg:pl-44 md:pl-32 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              dapibus venenatis viverra. Maecenas gravida consectetur nunc, id
              aliquam nisi maximus consequat. In non magna congue, faucibus leo
              vel, cursus dolor. In eget euismod urna. Fusce elementum augue
              tempus nisl eleifend pretium. In dictum, tortor sed rutrum
              pretium, ex erat commodo libero, ut malesuada ante justo non
              justo. Phasellus in tellus sem. Interdum et malesuada fames ac
              ante ipsum primis in faucibus.
            </div>
          }
        />
      </div>
      <div className="mt-16">
        <PageHeading heading={"Technologies We Use"} />
      </div>
    </section>
  );
};

export default index;
