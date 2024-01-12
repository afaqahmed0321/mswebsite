"use client";
import React, { useState } from "react";
import WebList from "../../WebList";
import Image from "next/image";
import serviceImg from "../../../../../public/assests/home/img (6).png";
import { ChipsComponent } from "../../ChipsComponent/ChipsComponent";
import PageHeading from "../../pageHerdings";
import Button from "../../Button";

const Index = () => {
  const [active, setActive] = useState(1);
  const TABITEMS = [
    {
      id: 1,
      title: "Landing",
    },
    {
      id: 2,
      title: "E-Commerce",
    },
    {
      id: 3,
      title: "Web 3.0",
    },
    {
      id: 4,
      title: "Design",
    },
  ];
  return (
    <section className="2xl:px-14 xl:px-14 lg:px-12 md:px-10 px-5 2xl:py-20  xl:py-20 lg:py-16 md:py-12 py-10">
      <div data-aos="zoom-out-up" data-aos-duration="600">
        <PageHeading heading={"Services"} />
      </div>
      <div className="flex justify-around gap-y-8 items-start 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap  flex-wrap 2xl:my-5 xl:my-5 lg:my-4">
        <div
          className=" basis-2/3"
          data-aos="fade-right"
          data-aos-duration={700}
        >
          <WebList />
        </div>
        <div className="md:h-[33.438rem] h-auto w-auto" data-aos="fade-left" data-aos-duration={800}>
          <Image
            src={serviceImg}
            alt=""
            className="max-w-full h-full"
          />
        </div>
      </div>
      <div className="flex justify-end items-center flex-wrap md:gap-6 gap-2 md:pt-6">
        {TABITEMS.map((items, index) => {
          return (
            <div
              className={
                "transition-all hover:scale-105 duration-200 ease-linear delay-100 cursor-pointer "
              }
              key={index}
              data-aos="fade-right"
              data-aos-duration={1000}
            >
              <span
                className={
                  (active == items.id ? `bg-[#FF5500]  ` : `bg-[#BCBFC2] `) +
                  `font-sans font-bold  text-white  md:text-lg text-sm  leading-10 2xl:px-8 xl:px-8 lg:px-7 md:px-6 px-4  py-3 rounded-full hover:text-white duration-200 ease-linear delay-100`
                }
                onClick={() => setActive(items.id)}
              >
                {items.title}
              </span>
            </div>
          );
        })}
      </div>
      <p
        data-aos="zoom-out"
        data-aos-duration={1100}
        className="text-[#212121A3] md:text-2xl text-sm  leading-6 font-sans md:mt-10 md:mb-10 py-5"
      >
        We work with you from beginning plans to going live. We approach
        everything with a test-weighty methodology and thoroughly confirm the
        security and code norms. We spend significant time in all current tech
        languages and have experts in all languages we deploy.
      </p>
      <div
        className="flex justify-center"
        data-aos="fade-down"
        data-aos-duration={1200}
      >
        <Button
          label={"Learn More"}
          classes={
            " md:py-3 py-2 md:px-10 px-8"
          }
        />
      </div>
    </section>
  );
};

export default Index;
