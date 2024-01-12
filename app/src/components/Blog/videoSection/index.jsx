import React from "react";
import PageHeading from "../../pageHerdings";
import WebList from "../../WebList";
const BlogVideoSection = () => {
  const list = [
    {
      text: "Web Development",
    },
    {
      text: "Mobile App Design",
    },
    {
      text: "UI/UX Design",
    },
    {
      text: "Graphics Design",
    },
    {
      text: "Quality Assurance",
    },
    {
      text: "E-Mail Marketing",
    },
    {
      text: "Quality Assurance",
    },
    {
      text: "E-Mail Marketing",
    },
    {
      text: "E-Mail Marketing",
    },
  ];
  return (
    <section className="px-5 md:py-20 py-8 ">
      <div className="flex justify-around items-start md:flex-nowrap flex-wrap gap-10">
        <div
          className="md:basis-2/3 basis-full min-h-max xl:px-3 md:px-0 sm:px-0 col-span-2"
          data-aos-delay={100}
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <video
            controls
            className="bg-blue-500 w-full md:h-[34rem] h-full xl:rounded-md "
          >
            <source
              src="https://www.youtube.com/embed/u3ybWiEUaUU?"
              className="bg-blue-300"
            />
          </video>
        </div>
        <div className="md:basis-2/6 basis-full flex flex-col justify-center md:items-center items-stretch ">
          <ul className=" list-disc space-y-6">
            {list.map((item, index) => {
              return (
                <li
                  key={index}
                  className=" list-disc flex md:gap-5 cursor-pointer md:text-3xl text-2xl max-[350px]:text-xl md:leading-10 leading-6  text-[#7E7E7E] font[Nunito Sans] hover:text-[#FF5500] ease-out delay-200 hover:scale-105 transition-all  duration-500"
                  data-aos="fade-right"
                  data-aos-delay={`${index}00`}
                >
                  <div>0{index >= 0 ? 1 + index : index} </div>
                  <div className="flex items-center">
                    {item.text}
                    {/* {item.text == "Web Development"  && (
                <span className="bg-[#FF5500] rounded-full text-white text-xs p-1 w-6 h-6 self-center flex items-center justify-center font-bold ml-6">
                  1
                </span>
              )} */}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="md:pt-14 max-md:py-7 md:px-0 px-0.5">
        <PageHeading
          heading={"Recent reward"}
          parhaOne={
            "Pakistan’s IT industry has become noteworthy in the past few years due to high IT and ITes export services. Pakistan’s economic  survey for 2020 -2021 has revealed that the annual growth rate for IT and related services reached 18.85%. "
          }
        />
      </div>
    </section>
  );
};

export default BlogVideoSection;
{
  /* */
}
