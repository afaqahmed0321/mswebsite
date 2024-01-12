"use client";
import { useState } from "react";
import ButtonSelector from "../ButtonSelector/ButtonSelector";
import FrontEndDevelop from "./DropdownTechData/FrontEndDevelop";
import DropdownCompont from "../DropdownComponent/DropdownComponent";
const DropdownTech = () => {
  const [activeButton, setActiveButton] = useState(0);
  const buttons = [
    "Front-End Development",
    "BACK-END DEVELOPMENT",
    "MOBILE APP DEVELOPMENT",
  ];
  return (
    <>
      <div className="flex items-center ml-10 sm:ml-10 md:ml-24 mt-24 mb-8 text-[#838181]">
        <div className=" sm:text-xl md:text-2xl lg:text-4xl ml-4   font-bold" data-aos={"fade-right"}>
          Technologies We Use
        </div>
      </div>
      <div className="md:block hidden" data-aos={"fade-down"}>
      <ButtonSelector
        content={buttons}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      </div>
      <div className="md:hidden flex justify-center " data-aos={"fade-right"}>
      <DropdownCompont
        items={buttons}
        title={activeButton ? activeButton : buttons[0]}
        btnStyle={" w-96 max-[412px]:w-[20rem] my-0 mx-5"}
      />
      </div>
      <FrontEndDevelop />
    </>
  );
};

export default DropdownTech;
