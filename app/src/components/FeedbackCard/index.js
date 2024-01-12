import Image from "next/image";
import React from "react";
import user from "../../../../public/assests/tech-stacks/img (9).png";
import country from "../../../../public/assests/tech-stacks/united-states-of-america 1.png";
import { StarIcon } from "@heroicons/react/24/solid";
import comma from "../../../../public/assests/career/ic_comma.png";
const index = () => {
  return (
    <section
      className=" relative max-w-screen-xl h-auto"
      data-aos="zoom-out"
      data-aos-duration="1200"
    >
      <div className="border-2 border-[#ff5500] h-full absolute w-full rounded-3xl md:bottom-6 bottom-4 md:right-6 right-3"></div>
      <div className="md:w-20 md:h-20 w-12 h-12 rounded-full  bg-white flex justify-center items-center absolute md:-top-9 -top-7 left-8 border">
        <Image src={comma} alt=" " className="md:w-8 w-4 h-4 md:h-8" />
      </div>
      <div className="bg-[#838181] md:p-20 p-8 flex justify-start md:gap-10 gap-3 items-start rounded-3xl ">
        <Image
          src={user}
          alt=" "
          className="md:w-28 md:h-28 h-16 w-16 object-cover rounded-full border-[2px] border-white flex justify-center items-center "
        />

        <div>
          <h6 className="font-sans md:text-3xl text-lg font-bold text-white">
            Jhon Samuel{" "}
          </h6>
          <div className="flex items-center md:gap-4 gap-1  py-1.5">
            <Image src={country} className="md:w-8 md:h-8 w-4 h-4" alt="" />
            <div className="text-white font-sans md:text-xl text-sm font-normal ">
              United States
            </div>
          </div>
          <div className="flex items-center md:gap-4 gap-2 ">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((index) => (
                <StarIcon className=" md:h-6 h-4 text-yellow-300" key={index} />
              ))}
            </div>
            <div className="text-white font-sans md:text-lg text-xs font-normal flex items-center">
              | <span className="pl-1.5">3 days ago</span>
            </div>
          </div>
          <p className="md:text-xl text-xs text-white font-normal font-sans max-w-screen-md md:pt-5 pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas
            eget ex id gravida. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Quisque aliquam ac leo id
            dapibus.
          </p>
        </div>
      </div>
      <div className="md:w-20 md:h-20 w-12 h-12 rounded-full  bg-white flex justify-center items-center absolute md:-bottom-9 -bottom-6 right-8 border">
        <Image src={comma} alt=" " className="md:w-8 w-4 md:h-8 h-4" />
      </div>
    </section>
  );
};

export default index;
