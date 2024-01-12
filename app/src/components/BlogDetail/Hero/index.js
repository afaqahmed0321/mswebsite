import Image from "next/image";
import React from "react";
import blogDetail from "../../../../../public/assests/blogDetail/image 48.png";

const index = () => {
  return (
    <div
      className="max-w-full lg:px-12 md:px-8 px-3 bg-[#ff5500]"
      data-aos="fade-down"
      data-aos-duration="1200"
    >
      <Image src={blogDetail} alt="" className="w-full h-auto" />
    </div>
  );
};

export default index;
