import React from "react";
import backgroundImage from "../../public/assests/projectDetails/bgOrange.png";
import Image from "next/image";
import ProjectInto from "../src/components/projectDetails/ProjectInto";
import CheckList from "../src/components/projectDetails/CheckList";
import GetTuchFrom from "@/app/src/components/GetTuchFrom";
import FeedbackCard from "../src/components/FeedbackCard";

const ProjectDetails = () => {
  const AppData = {
    heading: "App Functionality",
    checks: [
      {
        tick: true,
        line: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas eget ex id gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque aliquam ac leo id dapibus.",
      },
      {
        tick: true,
        line: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas eget ex id gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque aliquam ac leo id dapibus.",
      },
      {
        tick: true,
        line: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas eget ex id gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque aliquam ac leo id dapibus.",
      },
      {
        tick: true,
        line: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas eget ex id gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque aliquam ac leo id dapibus.",
      },
    ],
  };

  const ProjectData = {
    heading: "Project Results",
    checks: [
      {
        tick: true,
        line: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas eget ex id gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque aliquam ac leo id dapibus.",
      },
      {
        tick: true,
        line: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas eget ex id gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque aliquam ac leo id dapibus.",
      },
      {
        tick: true,
        line: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas eget ex id gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque aliquam ac leo id dapibus.",
      },
      {
        tick: true,
        line: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas eget ex id gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque aliquam ac leo id dapibus.",
      },
    ],
  };
  const OverviewData = {
    heading: "Project Overview",
    chips: true,
    checks: [
      {
        tick: false,
        line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas eget ex id gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque aliquam ac leo id dapibus. Aliquam sodales ligula ac feugiat ornare. Duis vel pretium eros. Suspendisse porta, sapien at ullamcorper cursus, diam leo dictum mauris, non venenatis turpis odio pulvinar lectus. Aliquam sed est ut erat hendrerit rhoncus. Mauris eget placerat libero. Pellentesque gravida est ac orci dictum, sit amet ornare mauris euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis varius quam enim, at ornare mi efficitur non. Curabitur porttitor, felis et vehicula ullamcorper, enim orci cursus ante, at ultrices erat massa quis purus. Vestibulum laoreet gravida semper. Aenean eros purus, vestibulum ac vestibulum vel, ornare eu enim. Nulla vitae orci massa.",
      },
    ],
  };

  const SolutionData = {
    heading: "Solution",
    checks: [
      {
        tick: false,
        line: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas eget ex id gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque aliquam ac leo id dapibus.",
      },
    ],
  };
  return (
    <>
      <div
        className="absolute top-0 "
        data-aos="fade-down"
        data-aos-duration="1300"
      >
        <Image
          src={backgroundImage}
          className="h-[105vh] z-0 "
          alt="helloworld"
          data-aos-delay={100}
        />
      </div>
      <ProjectInto />
      <CheckList data={OverviewData} />
      <CheckList data={AppData} />
      <CheckList data={SolutionData} />
      <CheckList data={ProjectData} />
      <div className="flex justify-center py-20">
        <FeedbackCard />
      </div>
      <div className="md:mb-16 mb-10">
        <GetTuchFrom />
      </div>
    </>
  );
};

export default ProjectDetails;
