"use client";
import ColorsLine from "./src/components/ColorLine";
import Hero from "./src/components/Home/hero";
import SwiperSection from "./src/components/Swiper";
import Service from "./src/components/Home/service";
import Flexible from "./src/components/Home/flexibal";
import SwiperTow from "./src/components/Swiper copy";
import AboutUS from "./src/components/AboutUs/Hero";
import IconBox from "./src/components/AboutUs/IconBox";
import SeeOurImpression from "./src/components/SeeOurImpression";
import GetTuchFrom from "./src/components/GetTuchFrom";
import NewsLetter from "./src/components/NewLetter";

const Home = () => {
  return (
    <div className=" overflow-hidden">
      <Hero />
      <div className="relative ">
        <ColorsLine classes={"rotate-[211deg] -right-20 top-[17%] "} />
        <SwiperSection />
        <Service />
      </div>
      <div className="relative">
        <ColorsLine
          classes={
            "rotate-[37deg] 2xl:-left-[11%] xl:-left-36 lg:-left-28 md:-left-28 sm:-left-20 -left-[15%] 2xl:-top-20 xl:-top-16 lg:-top-12 md:-top-12 sm:-top-8 -top-[10%]"
          }
        />
        <Flexible />
      </div>
      <SwiperTow />
      <AboutUS />
      <IconBox />
      <div className="md:pt-20">
        <SeeOurImpression />
      </div>
      <GetTuchFrom />
      <div className=" md:px-56 md:py-12 py-10 px-4">
        <NewsLetter />
      </div>
    </div>
  );
};
export default Home;
