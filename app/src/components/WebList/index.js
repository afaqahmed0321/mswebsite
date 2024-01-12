import React from "react";

const WebList = () => {
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
    <ul className=" list-disc space-y-6">
      {list.map((item, index) => {
        return (
          <li
            key={index}
            className=" list-disc flex md:gap-5 cursor-pointer md:text-3xl text-sm md:leading-10 sm:leading-7  text-[#7E7E7E] font[Nunito Sans] hover:text-[#FF5500] ease-out delay-200 hover:scale-105 transition-all  duration-500"
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
  );
};

export default WebList;
