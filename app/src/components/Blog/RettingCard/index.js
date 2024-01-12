import React from "react";
import Image from "next/image";
import USERIMAGEMETTLESOL from "../../../../../public/assests/blog/hero/user-mettleSol.png";
import { StarIcon } from "@heroicons/react/24/solid";

const RettingCard = ({ userImage }) => {
  return (
    <div data-aos={"fade-down"}>
      <div className="bg-[#838181] rounded-lg h-full  hover:bg-[#FF5500] cursor-pointer px-8 py-14 max-w-md   transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-100  duration-500 snap-start ">
        <div className="grid grid-flow-row col-span-1  place-items-center place-content-evenly">
          <div>
            <div className="flex items-center justify-center">
              <Image
                className="md:w-28 md:h-28 w-20 h-20 object-cover ojbect-center rounded-full  border-4 border-white"
                src={userImage ? userImage : USERIMAGEMETTLESOL}
                alt=""
              />
            </div>
            <h6 className=" md:text-xl sm:text-lg md:py-2  text-white font-bold font-[Nunito Sans] text-center">
              Jhon Samuel
            </h6>
            <div className="flex items-center space-x-3">
              <span className="md:text-lg leading-10 text-center text-white font-medium self-center">
                4.0
              </span>
              <span className="flex items-center">
                {[1, 2, 3, 4, 5].map((index) => {
                  return (
                    <StarIcon
                      key={index}
                      className=" md:w-6 md:h-6 sm:w-5 sm:h-6 w-6 h-6 text-yellow-500 "
                    />
                  );
                })}
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center py-5 ">
            <p className=" text-white md:text-lg text-sm text-center leading-6 font-[Nunito Sans] leading-10 font-normal">
              {
                " We have done a lot of work, Let’s Check some from here All organizations must adapt their markets from traditional to digitalized approaches as a result of the market's digitalization. As a provider of software solutions, we provide you a website that serves as your digitalized marketplace, allowing you to connect with customers all across the world."
              }
            </p>
          </div>
          <div>
            {/* <button className="bg-white flex items-center justify-center px-12 py-2  font-[Nunito Sans] font-bold md:text-lg text-sm rounded-lg text-[#FF5500] hover:bg-[#FF5500] hover:text-white hover:scale-105 active:scale-75 focus:scale-100 duration-300 delay-200 ease-in-out hover:ring-2 hover:ring-white">
            Reply
          </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RettingCard;
