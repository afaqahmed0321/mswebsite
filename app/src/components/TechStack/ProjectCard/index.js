import React from "react";
import Image from "next/image";

const ProjectCard = ({ img, title, delay }) => {
  return (
    <div
      className=" bg-[#FF5500] w-full ease-linear hover:scale-105 transition duration-300 delay-150 shadow-md shadow-slate-400 hover:shadow-[#ff5500] pb-1 rounded-sm "
      data-aos-delay={delay}
    >
      <div className="bg-white flex flex-col justify-center items-center gap-y-8 py-16">
        <Image
          src={img}
          alt=""
          className=" md:w-28 w-20 md:h-28 h-20 "
        />
        <h6 className="text-[#838181] font-sans font-semibold md:text-3xl text-xl">
          {title}
        </h6>
      </div>
    </div>
  );
};

export default ProjectCard;
