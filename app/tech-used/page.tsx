import DetailsSection from "../src/components/TechUsed/DetailsSection";
import DropdownTech from "../src/components/TechUsed/DropdownTech";
import RettingCard from "../src/components/blog/RettingCard";
import GetTuchFrom from "@/app/src/components/GetTuchFrom";
import FeedbackCard from "../src/components/FeedbackCard";

const page = () => {
  return (
    <section className="relative min-h-screen max-h-fit ">
      <div
        className="flex items-center ml-10 sm:ml-10 md:ml-28 md:mt-24 mt-10 md:mb-8 mb-4 text-[#FF5500]"
        data-aos={"fade-right"}
      >
        <hr className="w-40 h-1  bg-[#FF5500] " />
        <div className=" sm:text-xl md:text-2xl lg:text-3xl ml-4 font-bold">
          A Wide Tech Stack Selection
        </div>
      </div>
      <div
        className="ml-10 sm:ml-10 md:ml-72 text-[#838181]"
        data-aos={"fade-right"}
      >
        With a wide spectrum of technologies and expertise, no task is a
        challenge.
      </div>
      <DropdownTech />
      <DetailsSection />
      <div className="flex justify-center py-20">
        <FeedbackCard />
      </div>
      <div className="md:mb-24 mb-10">
        <GetTuchFrom />
      </div>
    </section>
  );
};

export default page;
