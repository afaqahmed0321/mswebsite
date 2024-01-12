"use client";
import React from "react";
import Hero from "../src/components/TechStack/Hero";
import TechStackFrom from "../src/components/teckStack/priceForm/PriceForm";
import ColorsLine from "../src/components/ColorLine";
import FeedbackCard from "../src/components/FeedbackCard";
import GetTuchFrom from "@/app/src/components/GetTuchFrom";
import RecentProject from "../src/components/Services/RecentProject";

const TechStack = () => {
  return (
    <div className=" space-y-1 relative">
      <ColorsLine
        classes={
          "rotate-[37deg] 2xl:-left-[8%] xl:-left-36 lg:-left-28 md:-left-28 sm:-left-20 -left-[19%] 2xl:top-0 xl:-top-0 lg:-top-8 md:-top-12 sm:-top-8 -top-8"
        }
      />
      <Hero />
      <TechStackFrom />
      <RecentProject heading={"Our projects"}/>

      <div className="flex justify-center py-20">
        <FeedbackCard />
      </div>
      <div className="md:pb-24 pb-10">
        <GetTuchFrom />
      </div>
    </div>
  );
};

export default TechStack;
