import React from "react";
import Heading from "../src/components/project-components/Heading";
import ProjectCards from "../src/components/project-components/ProjectCards";
import GetTuchFrom from "@/app/src/components/GetTuchFrom";

const page = () => {
  return (
    <>
      {" "}
      <Heading />
      <ProjectCards />
      <div className="md:my-24 my-10">
        <GetTuchFrom />
      </div>
    </>
  );
};

export default page;
