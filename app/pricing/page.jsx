"use client";
import { useState } from "react";
import ButtonSelector from "../src/components/ButtonSelector/ButtonSelector";
import CustomDevelopmentComponent from "../src/components/pricingComponents/CustomDevelopmentComponent";
import AugmentationComponent from "../src/components/pricingComponents/AugmentationComponent";
import PageHeading from "../src/components/pageHerdings";

const Page = () => {
  const [activeButton, setActiveButton] = useState(0);
  const buttons = ["CUSTOM SOFTWARE DEVELOPMENT", "TEAM AUGMENTATION"];

  return (
    <section className="relative min-h-screen max-h-fit ">
      <div
        className="flex items-center ml-10 sm:ml-10 md:ml-28 md:mt-24 mt-10 md:mb-20 mb-8 text-[#FF5500]"
        data-aos={"fade-right"}
      >
        <hr className="w-40 h-[3px] rounded-xl  bg-[#FF5500] " />
        <div className=" text-xl md:text-4xl ml-4 font-semibold">
          Request an IT project cost estimate
        </div>
      </div>
      <ButtonSelector
        content={buttons}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      {activeButton === 0 ? (
        <CustomDevelopmentComponent />
      ) : (
        <AugmentationComponent />
      )}
    </section>
  );
};

export default Page;
