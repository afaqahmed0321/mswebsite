"use client";

import DropdownComponent from "../DropdownComponent/DropdownComponent";
import PageHeading from "../pageHerdings";

const Heading = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <section className="relative max-h-fit md:px-20 px-8 ">
      <PageHeading
        heading={"Projects"}
        parhaOne={
          <div className="2xl:pl-44 xl:44 lg:pl-44 md:pl-32">
            {
              " The software development industry is growing bigger all the time, and it's easy to see why; in today's world, businesses great and small have an ever-increasing need for custom software solutions to help them keep up with the competition"
            }
          </div>
        }
      />

      <div
        className="flex flex-wrap md:justify-end justify-center items-center md:mt-10 mt-4 md:gap-5"
        data-aos={"fade-down"}
        data-aos-duration={"1200"}
      >
        <DropdownComponent
          items={items}
          title={"Select Indstry"}
          btnStyle={"md:w-96 w-80"}
          delay={100}
        />
        <DropdownComponent
          items={items}
          title={"Select Serivce"}
          btnStyle={"md:w-96 w-80"}
          delay={200}
        />
        <DropdownComponent
          items={items}
          title={"Select Technology"}
          btnStyle={"md:w-96 w-80"}
          delay={300}
        />
      </div>
    </section>
  );
};

export default Heading;
