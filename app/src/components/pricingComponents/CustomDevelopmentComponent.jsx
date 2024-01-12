import React, { useState } from "react";
import RadioInputButton from "../RadioInputButton/RadioInputButton";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChipsComponent } from "../ChipsComponent/ChipsComponent";

const CustomDevelopmentComponent = () => {
  const [developmentStage, setDevelopmentStage] = useState("");

  const [selectedSpecialist, setSelectedSpecialist] = useState({
    "Project Manager": false,
    "Business Analyst": false,
    "Angular Material": false,
    "UI/UX Designer": false,
    Architect: false,
  });

  const [selectedSolution, setSelectedSolution] = useState({
    Mobile: false,
    Web: false,
  });

  const clearAll = () => {
    setDevelopmentStage("");
    setSelectedSpecialist((prevSkills) => {
      const clearedSpecialists = {};
      for (const key in prevSkills) {
        clearedSpecialists[key] = false;
      }
      return clearedSpecialists;
    });
    setSelectedSolution((prevSolutions) => {
      const clearedSolutions = {};
      for (const key in prevSolutions) {
        clearedSolutions[key] = false;
      }
      return clearedSolutions;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", {
      selectedSpecialist,
      developmentStage,
      selectedSolution,
    });
  };

  return (
    <>
      <div className="flex ml-10 sm:ml-10 md:ml-24 mr-10 sm:mr-10 md:mr-24 md:h-36 h-auto mt-2 py-3 duration-300 ease-in-out overflow-y-auto">
        <div className="flex-grow space-x-4 space-y-2">
          {Object.entries({ ...selectedSolution, ...selectedSpecialist })
            .filter((item) => item[1])
            .map((item) => (
              <ChipsComponent content={item} key={item[0]} />
            ))}
        </div>
        {Object.entries({ ...selectedSolution, ...selectedSpecialist }).some(
          (item) => item[1]
        ) && (
          <button
            onClick={clearAll}
            className="ml-4 mt-2 md:px-6 px-4 md:h-14 h-8 whitespace-nowrap text-black bg-[#BCBFC2] rounded-full"
          >
            Clear All
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label
            className="flex sm:text-lg md:text-xl lg:text-2xl ml-4 items-center sm:ml-10 md:ml-28 mb-8 text-[#212121]"
            data-aos="fade-down"
          >
            1. What type of software solution would you like to develop with
            Andersen?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:text-xs md:text-sm lg:text-base ml-4 items-center sm:ml-10 md:ml-28 mb-2 text-[#838181]">
            {Object.entries(selectedSolution).map(([skill, checked, index]) => (
              <label
                key={skill}
                className="inline-flex items-center"
                data-aos="fade-right"
                data-aos-delay={`${index}+00`}
              >
                <input
                  type="checkbox"
                  className=" accent-[#FF5500] h-5 w-5"
                  checked={checked}
                  onChange={() =>
                    setSelectedSolution((prevSkills) => ({
                      ...prevSkills,
                      [skill]: !prevSkills[skill],
                    }))
                  }
                />
                <span className="ml-2">{skill}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-1">
          <label
            className="flex sm:text-lg md:text-xl lg:text-2xl ml-4 items-center sm:ml-10 md:ml-28 md:mt-24 mt-10 mb-8 text-[#212121]"
            data-aos="fade-right"
          >
            2. What is the current stage of your software development process?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:text-xs md:text-sm lg:text-base ml-4 items-center sm:ml-10 md:ml-28 mb-2 text-[#838181]">
            <RadioInputButton
              value="idea"
              label="Idea"
              checked={developmentStage === "idea"}
              onChange={() => setDevelopmentStage("idea")}
              data-aos="fade-right"
            />

            <RadioInputButton
              value="prototype"
              label="Prototype/Specification"
              checked={developmentStage === "prototype"}
              onChange={() => setDevelopmentStage("prototype")}
              data-aos="fade-right"
            />

            <RadioInputButton
              value="solution"
              label="Designed solution"
              checked={developmentStage === "solution"}
              onChange={() => setDevelopmentStage("solution")}
              data-aos="fade-right"
            />

            <RadioInputButton
              value="mvp"
              label="Mvp"
              checked={developmentStage === "mvp"}
              onChange={() => setDevelopmentStage("mvp")}
              data-aos="fade-right"
            />
          </div>
        </div>

        <div className="mb-1">
          <label
            className="flex sm:text-lg md:text-xl lg:text-2xl ml-4 items-center sm:ml-10 md:ml-28 md:mt-24 mt-10 mb-8 text-[#212121]"
            data-aos="fade-right"
          >
            3. Do you need a professional consultation from any of the
            specialists below?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:text-xs md:text-sm lg:text-base ml-4 items-center sm:ml-10 md:ml-28 mb-2 text-[#838181]">
            {Object.entries(selectedSpecialist).map(([skill, checked],index) => (
              <label key={skill} className="inline-flex items-center">
                <input
                  type="checkbox"
                  data-aos="fade-right"
                  data-aos-delay={`${index}00`}
                  className=" accent-[#FF5500] h-5 w-5"
                  checked={checked}
                  onChange={() =>
                    setSelectedSpecialist((prevSkills) => ({
                      ...prevSkills,
                      [skill]: !prevSkills[skill],
                    }))
                  }
                />
                <span className="ml-2">{skill}</span>
              </label>
            ))}
          </div>
        </div>

        <div
          className="flex justify-start ml-4 sm:ml-10 md:ml-28 md:mt-20 md:mb-14 my-10"
          data-aos="zoom-out"
        >
          <button
            type="submit"
            className="bg-[#FF5500] text-white px-4 py-2 rounded-md hover:bg-[#ff5500ce] flex font-semibold"
          >
            Get Pricing
            <ChevronRightIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
      </form>
    </>
  );
};

export default CustomDevelopmentComponent;
