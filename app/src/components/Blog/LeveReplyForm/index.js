import React from "react";

const BlogPageForm = () => {
  return (
    <>
      <form className=" 2xl:pl-44 xl:pl-44 lg:pl-40 md:pl-2 sm:pl-2 pl-2 mr-4">
        <div className="space-y-14">
          <div
            className="relative z-0 w-full group"
            data-aos-delay={0}
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <input
              type="text"
              name="comment"
              id="floating_comment"
              className="block py-1 text-xl px-0 w-full text-gray-500 bg-transparent border-0 border-b-2 border-[#FF5500] appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#FF5500] focus:outline-none focus:ring-0 focus:border-[#FF5500] peer"
            />
            <label
              for="floating_comment"
              className="font-medium  font-[Nunito Sans] absolute md:text-2xl  text-sm text-[#FF5500] dark:text-[#838181] duration-300 transform -translate-y-6  -top-2  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF5500] peer-focus:dark:text-[#FF5500] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
            >
              Comment *
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-x-16 gap-y-16 ">
            <div
              className="relative z-0 w-full mb-6 group"
              data-aos-delay={200}
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-1 text-xl px-0 w-full text-gray-500 bg-transparent border-0 border-b-2 border-[#FF5500] appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#FF5500] focus:outline-none focus:ring-0 focus:border-[#FF5500] peer"
                placeholder=" "
              />
              <label
                for="floating_first_name"
                className="font-medium  font-[Nunito Sans] absolute md:text-2xl text-sm text-[#FF5500] dark:text-[#838181] duration-300 transform -translate-y-6  -top-2  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF5500] peer-focus:dark:text-[#FF5500] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
              >
                Name *
              </label>
            </div>
            <div
              className="relative z-0 w-full mb-6 group"
              data-aos-delay={100}
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-1 text-xl px-0 w-full text-gray-500 bg-transparent border-0 border-b-2 border-[#FF5500] appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#FF5500] focus:outline-none focus:ring-0 focus:border-[#FF5500] peer"
                placeholder=" "
              />
              <label
                for="floating_email"
                className="font-medium  font-[Nunito Sans] absolute md:text-2xl text-sm text-[#FF5500] dark:text-[#838181] duration-300 transform -translate-y-6  -top-2  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF5500] peer-focus:dark:text-[#FF5500] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
              >
                Email*
              </label>
            </div>
          </div>
          <div
            className="relative z-0 w-full mb-6 group"
            data-aos-delay={300}
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <input
              type="text"
              name="floating_password"
              id="floating_web"
              className="block py-1 text-xl px-0 w-full text-gray-500 bg-transparent border-0 border-b-2 border-[#FF5500] appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#FF5500] focus:outline-none focus:ring-0 focus:border-[#FF5500] peer"
              placeholder=" "
            />
            <label
              for="floating_web"
              className="font-medium  font-[Nunito Sans] absolute md:text-2xl text-sm text-[#FF5500] dark:text-[#838181] duration-300 transform -translate-y-6  -top-2  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF5500] peer-focus:dark:text-[#FF5500] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
            >
              Website
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="text-white md:px-7 px-5 md:py-3 py-2 mt-9  font-[Nunito Sans] bg-[#FF5500] border-[#FF5500] border-2  hover:bg-white hover:text-[#FF5500]   focus:ring-[#FF5500] font-semibold rounded-lg  md:text-lg text-sm w-auto hover:scale-95 duration-300 ease-in-out transition-all "
          data-aos-delay={400}
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          Post Comment
        </button>
      </form>
    </>
  );
};

export default BlogPageForm;
