import Image from "next/image";
import React from "react";
import USER from "../../../../../public/assests/blog/hero/blog-user.png";
import Image3 from "../../../../../public/assests/blog/hero/blo-image-3.png";
import "./index.css";

const BlogHeroSection = () => {
  const bgColor = "#FF5500";

  return (
    <>
      <div
        className="grid md:grid-cols-4 grid-cols-1 md:grid-flow-row "
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-delay={1100}
      >
        <div
          className="md:col-span-2 row-span-6 h-full max-md:h-[34rem] blog-img"
          data-aos-delay={900}
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="flex justify-end items-end -pr-10">
            <div
              className={`bg-[${bgColor}] flex items-end justify-center -rotate-90 w-44 mt-36 md:mt-[16.7vw] -mr-[4rem]   text-white text-xs font-bold py-4 rounded-t-2xl  overflow-hidden`}
            >
              About Author
            </div>
          </div>

          <div className="flex justify-end items-end mt-[20vw]">
            <button className={`bg-[${bgColor}] p-3`}>
              <svg
                width="18"
                height="22"
                viewBox="0 0 19 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 28.2857L11.875 16.5L0 4.71429L2.375 0L19 16.5L2.375 33L0 28.2857Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="text-xl md:row-span-2 bg-[#ff5500] text-white place-content-center place-self-center w-full h-full p-2"
          data-aos-delay={700}
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="flex justify-center items-center h-full">
            <div className=" max-[768px]:py-28">
              <h3 className="lg:text-5xl text-3xl font-bold flex space-x-6  font-[Perpetua]">
                <span>01</span>
                <div className=" py-0.5 2xl:w-52 xl:w-40 lg:w-32 md:w-24 w-44  rounded-xl xl:px-2 md:px-1 bg-[#FFF] self-center" />
              </h3>
              <h5 className="lg:text-5xl text-3xl font-bold  font-[Perpetua]pt-4">
                Blog
              </h5>
            </div>
          </div>
        </div>
        <div
          className="text-xl shadow-xl border-4 md:row-span-3"
          data-aos-delay={500}
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          {" "}
          <Image
            src={require("../../../../../public/assests/blog/hero/blog-image-2.png")}
            className="h-full w-full"
            alt="..."
            priority
          />
        </div>
        <div
          className=" md:row-span-none"
          data-aos-delay={300}
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="text-white px-2  lg:px-6 max-[768px]:py-10 bg-[#FFF] text-3xl flex flex-col items-center justify-around h-full ">
            <div className="flex justify-between items-center flex-nowrap  ">
              <div className="text-black">
                <div className="  text-xs text-black font-bold line-clamp-2">
                  Hey I’m Jess, Welcome To my personal blog website
                </div>
                <p className="text-xs text-gray-600 font-light line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <p className=" text-[.7rem] text-gray-500 font-medium">
                  READ MORE
                </p>
              </div>

              <Image
                src={USER}
                width={"auto"}
                height={"auto"}
                className=" w-auto h-auto basis-2/5 "
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          className="text-xl md:row-span-3 "
          data-aos-delay={100}
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          {" "}
          <Image src={Image3} className="h-full w-full " alt=""/>
        </div>
        <div
          className="text-xl md:row-span-3"
          data-aos-delay={0}
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          {" "}
          <div className="text-white bg-[#FF5500] font-[Poppins] h-full flex flex-col justify-center items-baseline md:p-5 p-7 text-left space-y-4 ">
            <h6 className="text-lg  font-bold ">
              Makeup Tips, Reviews & Skincare Advice
            </h6>
            <p className="text-xs font-normal line-clamp-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
            <p className="text-xs font-meduim">READ MORE...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeroSection;
