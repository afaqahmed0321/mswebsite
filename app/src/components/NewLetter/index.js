import React from "react";
import PageHeadig from "../pageHerdings";

const NewsLetter = () => {
  return (
    <section
      className=" flex flex-col items-center py-10"
      data-aos="zoom-out-up"
      data-aos-duration="700"
    >
      <PageHeadig heading={"Join our newsletter"} />
      <p className="font-sans md:text-2xl text-sm text-[#838181]">
        Register your email to get the latest updates.
      </p>
      <form className="mx-auto 2xl:mt-10 xl:mt-10 lg:mt-9 md:mt-7 mt-5 flex flex-col md:gap-5 w-3/4">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full flex-auto rounded-lg border-2 border-[#BFBFBF] bg-white/5 px-3.5 md:py-4 py-2 text-white shadow-sm focus:border-2 focus:border-[#FF5500]  sm:text-lg sm:leading-6"
          placeholder="Enter your email"
        />
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-28 md:w-36  flex items-center justify-center transition-all ease-in-out delay-150 duration-200  rounded-md bg-[#FF5500] px-3.5 py-2 md:text-xl text-sm font-bold text-white shadow-sm hover:bg-white border  border-[#FF5500] hover:text-[#FF5500] focus-visible:border-2 focus:border-2 active:border-2 active:border-[#FF5500] focus-visible:outline-offset-2 focus-visible:border-[#FF5500] my-3"
          >
            Sumit
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsLetter;
