import React from "react";
import image from "../../../../public/assests/projects/img.png";
import image1 from "../../../../public/assests/projects/img1.png";
import image2 from "../../../../public/assests/projects/img2.png";
import image3 from "../../../../public/assests/projects/img3.png";
import image4 from "../../../../public/assests/projects/img4.png";
import image5 from "../../../../public/assests/projects/img5.png";
import ProjectCard from "../ProjectCard/";

const data = [
  {
    image: image,
    heading: "Excellent Consulting Service to Build your Company",
    para: "Our Healthtech Consulting and Software Development Services have Empowered B...",
  },
  {
    image: image1,
    heading: "Excellent Consulting Service to Build your Company",
    para: "Our Healthtech Consulting and Software Development Services have Empowered B...",
  },
  {
    image: image2,
    heading: "Excellent Consulting Service to Build your Company",
    para: "Our Healthtech Consulting and Software Development Services have Empowered B...",
  },
  {
    image: image3,
    heading: "Excellent Consulting Service to Build your Company",
    para: "Our Healthtech Consulting and Software Development Services have Empowered B...",
  },
  {
    image: image4,
    heading: "Excellent Consulting Service to Build your Company",
    para: "Our Healthtech Consulting and Software Development Services have Empowered B...",
  },
  {
    image: image5,
    heading: "Excellent Consulting Service to Build your Company",
    para: "Our Healthtech Consulting and Software Development Services have Empowered B...",
  },
];

const ProjectCards = () => {
  return (
    <section className="relative min-h-screen max-h-fit my-10">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full text-center gap-10">
        {data.map((item, index) => (
          <ProjectCard
            heading={item.heading}
            index={index}
            para={item.para}
            image={item.image}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;
