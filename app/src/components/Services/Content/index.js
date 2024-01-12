import Image from "next/image";
import React, { useState } from "react";
import SECTIONIMAGE from "../../../../../public/assests/icon/Untitled (3).png";
import { PAGECOTENTDATA } from "../../../api/ServicesContent";
import PageHeading from "../../pageHerdings";
import ServiceCard from "../ServicesCard";

const Index = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="">
      <div
        className="w-full h-auto"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Image src={SECTIONIMAGE} alt="" />
      </div>
      <div className=" md:space-y-12 space-y-10 2xl:px-14 xl:px-14 lg:px-12 md:px-10 px-5 md:py-12 py-8">
        {PAGECOTENTDATA.map((items) => {
          return (
            <PageHeading
              key={items.id}
              heading={items.heading}
              parhaOne={
                <div className="2xl:pl-44 xl:44 lg:pl-44 md:pl-32">
                  {items.discription}
                </div>
              }
            />
          );
        })}
      </div>
      <div className="flex justify-between items-center flex-wrap md:pt-16 pb-10">
        <PageHeading heading={"FAQ”S"} />
        <ServiceCard />
      </div>
    </section>
  );
};

export default Index;
