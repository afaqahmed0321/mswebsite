import React from "react";
import PriceForm from './priceForm/PriceForm'

export default function PriceRequest({technology}) {
  return (
    <section className="relative max-h-fit" data-aos={"fade-right"}>
      <div className="flex items-center ml-10 sm:ml-10 md:ml-28 md:mt-24 mt-10 md:mb-8 text-[#FF5500]">
        <hr className="w-40 h-1  bg-[#FF5500] " />
        <div className=" sm:text-2xl md:text-3xl lg:text-4xl ml-4   font-bold">
          Request the price of your project
        </div>
      </div>
      <div className="ml-10 sm:ml-10 md:ml-72 text-[#838181]">
        In order to have your {technology} project request processed with maximum
        efficiency, please select the necessary parameters.
      </div>
      <PriceForm technology={technology}/>
    </section>
  );
}
