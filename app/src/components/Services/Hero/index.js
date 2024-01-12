"use client";
import React from "react";
import ServicesCard from "../ServicesCard";
import Services from "../../Home/service";

const index = () => {
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
    <section className="px-5">
      <Services />
      <div className="flex justify-center">
        <ServicesCard />
      </div>
    </section>
  );
};

export default index;
