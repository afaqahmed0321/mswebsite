import React, { useState, useLayoutEffect } from "react";
import RadioInputButton from "../../RadioInputButton/RadioInputButton";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const PriceForm = ({ technology }) => {
  const [developmentStage, setDevelopmentStage] = useState("");
  const [selectedSkills, setSelectedSkills] = useState({});

  useLayoutEffect(() => {
    const tech = {
      React: {
        TypeScipt: false,
        Nextjs: false,
        Redux: false,
        MobX: false,
        "REST API": false,
        Cypress: false,
        "Appollo GraphQL": false,
        "React-Bootstrap": false,
        "Ant Design": false,
      },
      Vue: {
        TypeScipt: false,
        Nuxtjs: false,
        Vuex: false,
        Axios: false,
        Vuetify: false,
        Puppeteer: false,
        "Testing library": false,
        Vitest: false,
        "Ant Design": false,
      },
      Angular: {
        Typescript: false,
        RxJs: false,
        "Angular Material": false,
        Cypress: false,
        RxAngular: false,
        "NG Bootstrap": false,
        "Apache ECharts": false,
        Jest: false,
        Akita: false,
      },
    };
    setSelectedSkills(tech[technology]);
  }, [technology]);

  const valuesConfig = [
    { name: "value1", label: "Middle Developer" },
    { name: "value2", label: "Senior Developer" },
    { name: "value3", label: "Team Lead" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", {
      developmentStage,
      selectedSkills,
      selectedMonth,
      values,
    });
  };

  const [selectedMonth, setSelectedMonth] = useState(1);

  const handleRangeChange = (e) => {
    setSelectedMonth(parseInt(e.target.value, 10));
  };

  const [values, setValues] = useState({
    value1: 0,
    value2: 0,
    value3: 0,
  });

  const handleIncrement = (name) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: prevValues[name] + 1,
    }));
  };

  const handleDecrement = (name) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: prevValues[name] - 1,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      data-aos={"fade-dwon"}
      data-aos-duration={1800}
    >
      <div className="mb-1">
        <label className="flex sm:text-lg md:text-xl lg:text-2xl ml-4 items-center sm:ml-10 md:ml-28 mt-24 mb-8 text-[#838181]">
          1- {technology} Development team
        </label>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:ml-10 md:ml-28 text-[#838181]">
        {valuesConfig.map(({ name, label, index }) => (
          <div key={name} data-aos={"fade-right"} data-aos-delay={`${index}00`}>
            <div className="flex items-center">
              <button
                className="bg-[#2121211F] text-white px-3 py-1 rounded-full mr-2 hover:bg-[#FF5500]"
                onClick={() => handleIncrement(name)}
              >
                +
              </button>
              <span className="text-lg">{values[name]}</span>
              <button
                className="bg-[#2121211F] text-white px-3.5 py-1 rounded-full ml-2 hover:bg-[#FF5500]"
                onClick={() => handleDecrement(name)}
              >
                -
              </button>
              <label className="ml-2">{label}</label>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-1">
        <label
          className="flex sm:text-lg md:text-xl lg:text-2xl ml-4 items-center sm:ml-10 md:ml-28 mt-14 mb-8 text-[#838181]"
          data-aos={"fade-right"}
        >
          2- Current stage of your development process
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:text-xs md:text-sm lg:text-base ml-4 items-center sm:ml-10 md:ml-28 mb-2 text-[#838181]">
          <RadioInputButton
            value="mature"
            label="Mature Product"
            checked={developmentStage === "mature"}
            onChange={() => setDevelopmentStage("mature")}
            data-aos={"fade-right"}
          />

          <RadioInputButton
            value="mvp"
            label="MVP"
            checked={developmentStage === "mvp"}
            onChange={() => setDevelopmentStage("mvp")}
            data-aos={"fade-right"}
          />

          <RadioInputButton
            value="designed"
            label="Designed Solution"
            checked={developmentStage === "designed"}
            onChange={() => setDevelopmentStage("designed")}
            data-aos={"fade-right"}
          />
        </div>
      </div>

      <div className="mb-1">
        <label
          className="flex sm:text-lg md:text-xl lg:text-2xl ml-4 items-center sm:ml-10 md:ml-28 mt-14 mb-8 text-[#838181]"
          data-aos={"fade-right"}
        >
          3- Top Priority IT Skills
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:text-xs md:text-sm lg:text-base ml-4 items-center sm:ml-10 md:ml-28 mb-2 text-[#838181]">
          {selectedSkills &&
            Object?.entries(selectedSkills)?.map(([skill, checked], index) => (
              <label key={skill} className="inline-flex items-center">
                <input
                  type="checkbox"
                  className=" accent-[#FF5500] h-5 w-5"
                  checked={checked}
                  data-aos={"fade-right"}
                  data-aos-delay={`${index}00`}
                  onChange={() =>
                    setSelectedSkills((prevSkills) => ({
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
          className="flex sm:text-lg md:text-xl lg:text-2xl items-center ml-4 sm:ml-10 md:ml-28 mt-14 mb-8 text-[#838181]"
          data-aos={"fade-right"}
        >
          1- What is the expected duration of your project?
        </label>

        <div className="mx-4 sm:mx-10 md:mx-28">
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            data-aos={"fade-right"}
            data-aos-duration="1200"
            value={selectedMonth}
            onChange={handleRangeChange}
            className="appearance-none w-full h-1 bg-[#FF5500]  rounded-full outline-none"
          />
          <div className="flex justify-between mt-2">
            {["1 month", "6 month", "1 Year", "1.5 Years", "2+ Years"].map(
              (month) => (
                <div key={month}> {month} </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-start ml-4 sm:ml-10 md:ml-28 mt-20 mb-14">
        <button
          type="submit"
          className="bg-[#FF5500] text-white px-4 py-2 rounded-md hover:bg-[#ff5500ce] flex"
          data-aos={"fade-up"}
        >
          Get Pricing
          <ChevronRightIcon className="ml-2 h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default PriceForm;
