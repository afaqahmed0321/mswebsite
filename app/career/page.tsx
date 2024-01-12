import React from "react";
import Hero from "@/app/src/components/Career/Hero";
import ColorsLine from "@/app/src/components/ColorLine";
import PopularJob from "@/app/src/components/Career/PopuarJob";
import EmployeeBenefits from "@/app/src/components/Career/EmployeeBenefits";
import OpenVecancies from "@/app/src/components/Career/OpenVacancies";
import QuickStep from "@/app/src/components/Career/QuickStep";
import RewardSection from "@/app/src/components/AboutUs/Reward";
import GetTuchFrom from "@/app/src/components/GetTuchFrom";
import NewsLetter from "@/app/src/components/NewLetter";
import OurLetasNews from "@/app/src/components/Career/OurLatestNews";
const page = () => {
  return (
    <div className=" overflow-x-hidden">
      <div className=" space-y-1 relative ">
        <ColorsLine
          classes={
            "rotate-[32deg] 2xl:-left-[11%] xl:-left-[11%]  lg:-left-24 md:-left-32 sm:-left-20 -left-[19%] 2xl:top-2 xl:top-9 lg:top-5 md:top-5 sm:-top-8 -top-8"
          }
        />
        <Hero />
      </div>
      <div className="relative ">
        <ColorsLine classes={"rotate-[211deg] -right-[10%] -top-[2%] "} />
        <PopularJob />
      </div>
      <EmployeeBenefits />
      <OpenVecancies />
      <QuickStep />
      <RewardSection />
      <div className="md:py-24 py-10">
      <GetTuchFrom />
      </div>
     
      <OurLetasNews />
      <div className=" md:px-56 md:py-12">
        <NewsLetter />
      </div>
    </div>
  );
};

export default page;
