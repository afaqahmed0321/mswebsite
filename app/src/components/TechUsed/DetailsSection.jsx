import React from "react";

const data = [
  {
    heading: "Professional Practices",
    details:
      "In order to practice up-to-date approaches and implement modern projects, our specialists are regularly certified by the most trusted and progressive entities.",
  },
  {
    heading: "Customer Trust",
    details:
      "Thanks to our high professional standards, effective workflows, and focus on quality, we have earned a positive reputation that is reflected in our rankings",
  },
  {
    heading: "Strategic Development Partner",
    details:
      "Mettle Sol's referring customers prove our reliability and dedication. After your IT project is completed, we will be happy to provide ongoing support and maintenance, upgrade existing solutions, and implement new ones.",
  },
  {
    heading: "Individual Approach",
    details:
      "mettle Sol is a custom software development company that seeks to employ and allocate IT specialists with both the hard and soft skills required to seamlessly integrate with your in-house team.",
  },
];

const capitalizeFirstLetter = (str) => {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
};

const DetailsSection = () => {
  return (
    <section className="relative min-h-screen max-h-fit ">
      <div className="flex items-center ml-10 sm:ml-10 md:ml-28 mt-24 mb-8 text-[#FF5500]">
        <hr className="w-40 h-1  bg-[#FF5500] " />
        <div
          className=" sm:text-xl md:text-2xl lg:text-3xl ml-4  font-bold"
          data-aos={"fade-right"}
        >
          Mettle Sol’s guarantees
        </div>
      </div>
      <div className="ml-10 sm:ml-10 md:ml-72 text-[#838181]">
        {capitalizeFirstLetter(
          "As a software development vendor and consulting partner, our team is notable for:"
        )}
        <ul>
          {data.map((item, index) => (
            <>
              <div
                className="flex items-center mt-16 mb-4 text-[#FF5500]"
                data-aos={"fade-right"}
                data-aos-delay={`${index}00`}
              >
                <div className=" sm:text-base md:text-lg lg:text-xl   font-bold">
                  {item.heading}
                </div>
              </div>
              <div className=" text-[#838181]" data-aos={"fade-right"}
                data-aos-delay={`${index}00`}>
                {capitalizeFirstLetter(item.details)}
              </div>
            </>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DetailsSection;
