"use client";
import React, { Fragment } from "react";
import ColorsLine from "../src/components/ColorLine";
import Service from "../src/components/Services/Hero";
import Flexible from "../src/components/Services/Offer";
import SwiperTwoComponent from "../src/components/Swiper copy";
import NewsLetter from "../src/components/NewLetter";
import Content from "../src/components/Services/Content";
import RecentProject from "../src/components/Services/RecentProject";
const page = () => {
  return (
    <div className=" space-y-1 relative">
      <ColorsLine
        classes={
          "rotate-[37deg] 2xl:-left-[11%] xl:-left-36 lg:-left-28 md:-left-28 sm:-left-20 -left-[19%] 2xl:-top-20 xl:-top-16 lg:-top-12 md:-top-12 sm:-top-8 -top-8"
        }
      />
      <div className=" overflow-x-hidden">
        <Service />
        <Flexible />
        <SwiperTwoComponent />
        <Content />
        <RecentProject collapse={true} heading="Recent Projects"/>
      </div>
      <div className=" md:px-56 md:py-12">
        <NewsLetter />
      </div>
    </div>
  );
};

export default page;
