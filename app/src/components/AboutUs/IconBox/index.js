import Image from "next/image";
import React from "react";
import ICON1 from "../../../../../public/assests/aboutus/illus.png";
import ICON2 from "../../../../../public/assests/aboutus/illus (1).png";
import ICON3 from "../../../../../public/assests/aboutus/illus(4).png";
import ICON4 from "../../../../../public/assests/aboutus/illus (3).png";
import "./index.css";
const ICONList = [
  { icon: ICON1, title: "Projects Completed", count: 123 },
  { icon: ICON2, title: "Happy Clients", count: 84 },
  { icon: ICON3, title: "Years in Business", count: 30 },
  { icon: ICON4, title: "Awards Win", count: 37 },
];
const IconBox = () => {
  return (
    <section className="" data-aos="zoom-in-up" data-aos-duration="700">
      <div
        className={` bg-img-icon-box gap-6 w-full flex justify-between items-center flex-wrap relative 2xl:h-64 xl:h-64 lg:h-64 h-auto py-10 md:px-20 px-1`}
      >
        {ICONList.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-start items-center gap-2 text-left w-max z-10"
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-delay={`${index}00`}
            >
              <Image
                src={item.icon}
                alt=""
                className="w-auto h-auto max-[450px]:w-14 max-[450px]:h-14 max-[414px]:w-10 max-[414px]:h-8"
              />
              <div>
                <h6 className="md:text-4xl text-2xl md:leading-[3.5rem] font-semibold font-sans text-white ">
                  {item.count}
                </h6>
                <p className="font-[Work Sans] md:text-[1rem] md:my-2 text-xs font-normal  border-l-4 border-white text-white pl-2 ml-2">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
        {/* <Image src={bgImage} className="absolute -z-1 w-full h-full top-0 bottom-20 -left-0.5" width={"100%"} style={{color:'hsla(0, 0%, 0%, 0.69)'}} /> */}
      </div>
    </section>
  );
};

export default IconBox;
