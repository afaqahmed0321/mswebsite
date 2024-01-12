import React from "react";
import "./index.css";
import Image from "next/image";
import GRILIMAGE from "../../../../public/assests/form/smiling-woman-headset-presentation-something 1.png";

const index = () => {
  return (
    <section
      className="form-bg flex justify-between items-center lg:px-52 md:px-10 px-4  py-10  max-[375px]:p-5"
      data-aos="fade-left"
      data-aos-duration="900"
    >
      <div
        className="bg-white shadow-xl flex flex-row w-full justify-between rounded-xl items-stretch 2xl:flex-nowrap xl:flex-nowrap md:flex-nowrap sm:flex-nowrap flex-wrap lg:gap-x-20 md:gap-x-6"
        data-aos="zoom-out"
        data-aos-duration="1500"
      >
        <div className="md:pt-10 md:pl-20 max-md:p-5 ">
          <h5
            data-aos="fade-right"
            data-aos-duration="800"
            className="text-[#838181] font-sans font-bold  md:text-4xl text-2xl"
          >
            Get In Touch
          </h5>
          <p
            data-aos="fade-right"
            data-aos-duration="900"
            className="text-[#838181] font-sans font-normal md:text-xl text-sm pt-5 "
          >
            Feel free to contact us anytime. We will get back to you as soon as
            we can
          </p>
          <form className=" md:space-y-10  space-y-14 2xl:my-16 xl:my-14 lg:my-8 md:my-6 my-8">
            <div
              className="relative z-0 w-full mb-6 group"
              data-aos="fade-right"
              // data-aos-duration="1100"
              data-aos-delay={100}
            >
              <input
                type="text"
                name="name"
                id="floating_name"
                placeholder=" "
                className="block py-3.5 text-xl px-0 w-full text-gray-500 bg-transparent border-0 border-b-2 border-[#FF5500] appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#FF5500] focus:outline-none focus:ring-0 focus:border-[#FF5500] outline-none peer delay-200 duration-300"
              />
              <label
                htmlFor="floating_name"
                className="font-normal 2xl:pl-7 xl:pl-6 lg:pl-5 md:pl-4 pl-3  font-[Nunito Sans] absolute md:text-xl text-xs text-[#FF5500] dark:text-[#838181] duration-300 transform -translate-y-6  top-1  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF5500] peer-focus:dark:text-[#FF5500] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div
              className="relative z-0 w-full mb-6 group "
              data-aos="fade-right"
              // data-aos-duration="1200"
              data-aos-delay={300}
            >
              <input
                type="phone"
                name="phone"
                placeholder=" "
                id="floating_phone"
                className="block py-3.5 text-xl px-0 w-full text-gray-500 bg-transparent border-0 border-b-2 border-[#FF5500] appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#FF5500] focus:outline-none focus:ring-0 focus:border-[#FF5500] peer"
              />
              <label
                htmlFor="floating_phone"
                className="font-normal 2xl:pl-6 xl:pl-6 lg:pl-5 md:pl-4 pl-3  font-[Nunito Sans] absolute md:text-xl text-xs text-[#FF5500] dark:text-[#838181] duration-300 transform -translate-y-6  top-1  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF5500] peer-focus:dark:text-[#FF5500] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
              >
                Phone No
              </label>
            </div>
            <div
              className="relative z-0 w-full mb-6 group "
              data-aos="fade-right"
              // data-aos-duration="1300"
              data-aos-delay={400}
            >
              <input
                type="phone"
                name="floating_email"
                id="floating_email"
                placeholder=" "
                className="block py-2.5 text-xl px-0 w-full text-gray-500 bg-transparent border-0 border-b-2 border-[#FF5500] appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#FF5500] focus:outline-none focus:ring-0 focus:border-[#FF5500] peer"
              />
              <label
                htmlFor="floating_email"
                className="font-medium2xl:pl-6 xl:pl-6 lg:pl-5 md:pl-4 pl-3 font-[Nunito Sans] absolute md:text-xl text-xs text-[#FF5500] dark:text-[#838181] duration-300 transform -translate-y-6  -top-2  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF5500] peer-focus:dark:text-[#FF5500] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div
              className="relative z-0 w-full mb-6 group"
              data-aos="fade-right"
              // data-aos-duration="1400"
              data-aos-delay={500}
            >
              <input
                type="text"
                name="floating_password"
                id="floating_massage"
                className="block py-2.5 text-xl px-0 w-full text-gray-500 bg-transparent border-0 border-b-2 border-[#FF5500] appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#FF5500] focus:outline-none focus:ring-0 focus:border-[#FF5500] peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_massage"
                className="font-medium 2xl:pl-6 xl:pl-6 lg:pl-5 md:pl-4 pl-3 font-[Nunito Sans] absolute md:text-xl text-xs text-[#FF5500] dark:text-[#838181] duration-300 transform -translate-y-6  -top-2  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF5500] peer-focus:dark:text-[#FF5500] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
              >
                Massage
              </label>
            </div>
            <button
              type="submit"
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-[#F5F5F5] w-full py-3  font-[Nunito Sans] bg-[#FF5500] hover:border-[#FF5500] hover:border-2 hover:bg-white hover:text-[#FF5500]  focus:outline-none focus:ring-[#FF5500] border-[#ff5500] font-semibold active:scale-105 rounded-sm md:text-xl w-auto border-2 duration-200 ease-linear  delay-150 transition-all "
            >
              Send
            </button>
          </form>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="600"
          className=" form-second-box 2xl:p-0 xl:p-0 lg:p-0 md:p-0 sm:p-0 p-10 bg-[#ff5500] 2xl:basis-auto xl:basis-auto lg:basis-auto md:basis-auto basis-full"
        >
          <div className="flex lg:justify-between justify-between items-center flex-col h-full">
            <div className=" md:h-40 py-10 self-center sm:mt-40  rounded-tl-[6rem]  border-y-4 max-sm:border-4  border-white  bg-[#cccbcb] w-full min-h-max  flex justify-center items-center">
              <script
                async
                type="text/javascript"
                src="https://widget.clutch.co/static/js/widget.js"
              ></script>
              <div
                className="clutch-widget"
                data-url="https://widget.clutch.co"
                data-widget-type="14"
                data-height="100"
                data-nofollow="true"
                data-expandifr="true"
                data-scale="100"
                data-clutchcompany-id="1788300"
              ></div>
            </div>
            <div
              className="flex justify-start items-end rounded-xl"
              data-aos="fade-up"
              // data-aos-duration="1000"
            >
              <Image
                src={GRILIMAGE}
                alt=""
                className="hidden 2xl:block xl:block md:block sm:block w-[50rem]  md:min-h-[15rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
