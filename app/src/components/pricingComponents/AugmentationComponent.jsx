import React, { useState } from "react";
import {
  ChevronRightIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";

const AugmentationComponent = () => {
  const [values, setValues] = useState({
    vue: 0,
    angular: 0,
    react: 0,
    javascript: 0,
    net: 0,
    java: 0,
    python: 0,
    scala: 0,
    ruby: 0,
    cplusplus: 0,
    golang: 0,
    php: 0,
    node: 0,
    android: 0,
    reactnative: 0,
    ios: 0,
    xamarian: 0,
    ionic: 0,
    flutter: 0,
    postgresql: 0,
    mysql: 0,
    oracle: 0,
    azure: 0,
    mssql: 0,
    nosql: 0,
    aws: 0,
    manager: 0,
    analyst: 0,
    qaengineer: 0,
    designer: 0,
    architect: 0,
    devops: 0,
  });

  const developers = [
    {
      title: "Front-end",
      list: [
        { name: "vue", label: "Vue.js", info: "" },
        { name: "angular", label: "Angular", info: "" },
        { name: "react", label: "React.js", info: "" },
        { name: "javascript", label: "JavaScript", info: "" },
      ],
    },
    {
      title: "Backend",
      list: [
        { name: "net", label: ".NET", info: "" },
        { name: "java", label: "Java", info: "Top language" },
        { name: "python", label: "Python", info: "" },
        { name: "scala", label: "Scala", info: "" },
        { name: "ruby", label: "Ruby", info: "" },
        { name: "cplusplus", label: "C++", info: "" },
        { name: "node", label: "Node.js", info: "" },
        { name: "golang", label: "Golang", info: "" },
        { name: "php", label: "PHP", info: "" },
      ],
    },
    {
      title: "Mobile",
      list: [
        { name: "android", label: "Android", info: "" },
        { name: "reactnative", label: "React Native", info: "" },
        { name: "ios", label: "iOS", info: "" },
        { name: "xamarian", label: "Xamarin", info: "" },
        { name: "ionic", label: "Ionic", info: "" },
        { name: "flutter", label: "Flutter", info: "" },
      ],
    },
    {
      title: "Database & Cloud",
      list: [
        { name: "postgresql", label: "PostgreSQL", info: "" },
        { name: "mysql", label: "MySQL", info: "" },
        { name: "oracle", label: "Oracle", info: "" },
        { name: "azure", label: "Microsoft Azure SQL Database", info: "" },
        { name: "mssql", label: "MsSQL", info: "" },
        { name: "nosql", label: "NoSQL", info: "" },
        { name: "aws", label: "AWS", info: "" },
      ],
    },
  ];

  const specialists = [
    { name: "manager", label: "Project Manager" },
    { name: "designer", label: "UI/UX Designer" },
    { name: "analyst", label: "Business Analyst" },
    { name: "qaengineer", label: "QA/QA Automation Engineer" },
    { name: "architect", label: "Solution Architects" },
    { name: "devops", label: "DevOps Engineer" },
  ];

  const [selectedMonth, setSelectedMonth] = useState(1);

  const handleRangeChange = (e) => {
    setSelectedMonth(parseInt(e.target.value, 10));
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", {
      selectedMonth,
      values,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label data-aos="fade-right" className="flex sm:text-lg md:text-xl lg:text-2xl ml-4 items-center sm:ml-10 md:ml-28 md:mt-36 mt-10 md:mb-8 mb-4 text-[#212121]">
            1. Specify the tech stack and the number of developers you need per
            each technology:
          </label>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 md:grid-cols-4 ml-4 sm:ml-10 md:ml-28 mr-4 sm:mr-10 md:mr-28">
            {developers.map((item, index) => (
              <div key={index}>
                <h2 data-aos="fade-right" data-aos-duration={`${index}00`} data-aoduration={1400} className="sm:text-lg md:text-xl lg:text-2xl mb-4 mt-4 text-[#FF5500] whitespace-nowrap">
                  {item.title}
                </h2>
                <hr className="hidden md:block w-full h-0.5 mb-4 bg-[#FF5500] " />

                <div className="grid grid-cols-1 text-base  gap-4 text-[#838181]">
                  {item.list.map(({ name, label, info }) => (
                    <div key={name} data-aos="fade-right" data-aos-duration={`${index}00`} data-aoduration={1400}>
                      <div className="flex items-center">
                        <button
                          className="bg-[#2121211F] text-white px-2 rounded-full mr-2 hover:bg-[#FF5500]"
                          onClick={() => handleDecrement(name)}
                        >
                          -
                        </button>
                        <span>{values[name]}</span>
                        <button
                          className="bg-[#2121211F] text-white px-1.5  rounded-full ml-2 hover:bg-[#FF5500]"
                          onClick={() => handleIncrement(name)}
                        >
                          +
                        </button>
                        <label className="ml-2">{label}</label>
                        <ExclamationCircleIcon
                          className="h-3 sm:h-4 w-3 sm:w-4 text-white bg-[#FF5500] ml-2 rounded-full"
                          title={info}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-1">
          <label data-aos="fade-right" className="flex sm:text-lg md:text-xl lg:text-2xl ml-4 items-center sm:ml-10 md:ml-28 md:mt-20 mt-8 mb-8 text-[#212121]">
            2. Extra specialists to add to the team:
          </label>
        </div>

        <div className="grid grid-cols-2  md:grid-cols-3 gap-4 ml-4 sm:ml-10 md:ml-28 mr-4 sm:mr-10 md:mr-28 text-[#838181]">
          {specialists.map(({ name, label,index }) => (
            <div key={name} data-aos="fade-right" data-aos-duration={`${index}00`} data-aoduration={1400}>
              <div className="flex items-center">
                <button
                  className="bg-[#2121211F] text-white px-2 rounded-full mr-2 hover:bg-[#FF5500]"
                  onClick={() => handleDecrement(name)}
                >
                  -
                </button>
                <span>{values[name]}</span>
                <button
                  className="bg-[#2121211F] text-white px-1.5  rounded-full ml-2 hover:bg-[#FF5500]"
                  onClick={() => handleIncrement(name)}
                >
                  +
                </button>
                <label className="ml-2">{label}</label>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-1">
          <label className="flex sm:text-lg md:text-xl lg:text-2xl ml-4 items-center sm:ml-10 md:ml-28 md:mt-20 mt-8 md:mb-8 mb-4 text-[#212121]">
            3- What is the expected duration of your project?
          </label>

          <div className="mx-4 sm:mx-10 md:mx-28">
            <input
              type="range"
              min="1"
              max="5"
              step="1"
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
          >
            Get Pricing
            <ChevronRightIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
      </form>
    </>
  );
};

export default AugmentationComponent;
