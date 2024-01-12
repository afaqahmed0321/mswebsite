import Image from "next/image";
import React from "react";

import image1 from "../../../../public/assests/projects/img1.png";

const ProjectInto = () => {
  return (
    <section className="relative min-h-screen max-h-fit " data-aos="fade-down" data-aos-duration="1500">
      <div className="flex items-center ml-10 sm:ml-10 md:ml-28 mt-24 mb-8 text-white">
        <hr className="w-40 h-1  bg-[#FF5500] " />
        <div className=" sm:text-2xl md:text-3xl lg:text-4xl ml-4   font-bold" data-aos-delay={200}>
          Excellent Consulting Service to Build your Company
        </div>
      </div>
      <div className="ml-10 sm:ml-[20vw] md:ml-[30vw] lg:ml-[30vw] my-16">

      <Image src={image1} alt={`image`} className="h-full" data-aos-delay={300} />
      </div>
    </section>
  );
};

export default ProjectInto;
