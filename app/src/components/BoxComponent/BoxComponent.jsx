import React from "react";
import Image from "next/image";

export const Box = ({ firstText, secondText, bottomBorder, properties }) => {
  const baseClasses = properties
    ? properties
    : " p-8 h-80 w-80 rounded-lg shadow-md mb-2";

  const borderBottomClass = bottomBorder
    ? "border-b-4 border-orange-500 bg-white text-[#838181]"
    : "bg-orange-500 text-[#FFFFFF]";

  return (
    <div className={`${baseClasses} ${borderBottomClass} `}>
      <div className="h-full grid justify-center content-center flex-row flex-wrap space-y-5 ">
        {typeof firstText === "string" ? (
          <div className="text-center text-4xl">{firstText}</div>
        ) : (
          <Image
            src={firstText}
            alt="BoxImage"
            className="h-32 w-full object-contain object-center mb-4"
          />
        )}
        <div className="text-center text-xl sm:text-3xl">{secondText}</div>
      </div>
    </div>
  );
};
