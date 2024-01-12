import React from "react";
import Button from "../../Button";
import "./index.css";
const index = () => {
  return (
    <div
      className="service-btn-box md:max-w-xl max-w-sm h-full md:py-16 py-8 md:px-12 px-8 text-center flex justify-center items-center flex-col gap-y-3"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <p className="text-white md:text-xl  text-sm font-sans font-semibold">
        The rapid confluence of technical infrastructure, biotechnology and
        recent research,{" "}
      </p>
      <Button
        label={"Learn More"}
        classes={
          "md:py-2 py-1.5 md:px-7 px-6"
        }
      />
    </div>
  );
};

export default index;
