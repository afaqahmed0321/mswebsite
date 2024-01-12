import React from "react";

const ButtonSelector = ({ content, activeButton, setActiveButton }) => {
  return (
    <div
      className="md:mx-24 mx-5 border-b-2 border-#838181 flex h-14"
      data-aos="fade-down"
    >
      {content.map((items, index) => (
        <button
          key={index}
          className={`flex-1 ${
            activeButton === index
              ? " bg-[#FF5500] text-white"
              : "bg-white text-[#838181]"
          } rounded-sm md:text-lg text-xs font-semibold font-[Nunito Sans]`}
          onClick={() => setActiveButton(index)}
          data-aos-delay={index}
        >
          {items}
        </button>
      ))}
    </div>
  );
};

export default ButtonSelector;
