"use client";
import React,{Fragment } from "react";
import ColorsLine from "../src/components/ColorLine";
import Hero from "../src/components/GetIntech/hero";
import Perfer from "../src/components/GetIntech/cardSection";
import InternationalSection from "../src/components/GetIntech/International";
import NewsLetter from "../src/components/NewLetter";

const page = () => {
  return (
    <div className=" space-y-1 relative">
      <ColorsLine
        classes={
          "rotate-[37deg] 2xl:-left-[11%] xl:-left-36 lg:-left-28 md:-left-28 sm:-left-20 -left-[19%] 2xl:-top-20 xl:-top-16 lg:-top-12 md:-top-12 sm:-top-8 -top-8"
        }
      />
      <Hero />
      <Perfer />
      <InternationalSection />
      <div className=" md:px-56 md:pb-12">
        <NewsLetter />
      </div>
    </div>
  );
};

export default page;
