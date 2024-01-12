"use client";
import React from "react";
import HeroSection from "../src/components/AboutUs/Hero";
import IconBox from "../src/components/AboutUs/IconBox";
import TabSection from "../src/components/AboutUs/Tab";
import FAQ from "../src/components/AboutUs/FAQ";
import RewardSection from "../src/components/AboutUs/Reward";
import Client from "../src/components/AboutUs/ClientSay";
import ClientCard from "../src/components/ClientCard";
import clientImage from "../../public/assests/aboutus/images (1).png";
import NewsLetter from "../src/components/NewLetter";
import ColorsLine from "../src/components/ColorLine";
const page = () => {
  return (
    <>
      <div className=" space-y-1 relative">
        <ColorsLine
          classes={
            "rotate-[37deg] 2xl:-left-[8%] xl:-left-36 lg:-left-28 md:-left-28 sm:-left-20 -left-[19%] 2xl:-top-20 xl:-top-16 lg:-top-12 md:-top-12 sm:-top-8 -top-8"
          }
        />
        <HeroSection />
        <IconBox />
        <TabSection />
        <FAQ />
        <RewardSection />
        <Client />
        <div className="flex justify-around items-start flex-wrap mx-6 md:py-10 max-sm:pt-8">
          <div>
            <ClientCard
              date={"August 28,2023"}
              description={
                "What are your safeguarding responsibilities and how can you manage them?"
              }
              img={clientImage}
              aosDelay={200}
            />
          </div>
          <div className="self-end lg:pt-32">
            <ClientCard
              date={"August 28,2023"}
              description={
                "What are your safeguarding responsibilities and how can you manage them?"
              }
              img={clientImage}
              aosDelay={700}
            />
          </div>
          <div>
            <ClientCard
              date={"August 28,2023"}
              description={
                "What are your safeguarding responsibilities and how can you manage them?"
              }
              img={clientImage}
              aosDelay={1200}
            />
          </div>
        </div>
        <div className=" md:px-56 md:py-12">
          <NewsLetter />
        </div>
      </div>
    </>
  );
};

export default page;
