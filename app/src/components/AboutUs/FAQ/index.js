import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import PageHeading from "../../pageHerdings";
import { COLLPASEDATA } from "@/app/src/api/Collapse";
import Collapse from "../../Collapse";

const Deatil = [
  {
    id: 1,
    title: "Excellent Consulting Service to Build your Company ?",
    dec: "MettleSol has been delivering premium IT-enabled business solutions to a wide array of client organizations for over 5+ Years. We have remained at the cutting edge of enterprise technology by making employee excellence our top priority. We believe in cultivating a working environment that supports innovation and creative thinking.",
  },
  {
    id: 2,
    title: "Excellent Consulting Service to Build your Company ?",
    dec: "MettleSol has been delivering premium IT-enabled business solutions to a wide array of client organizations for over 5+ Years. We have remained at the cutting edge of enterprise technology by making employee excellence our top priority. We believe in cultivating a working environment that supports innovation and creative thinking.",
  },
  {
    id: 3,
    title: "Excellent Consulting Service to Build your Company ?",
    dec: "MettleSol has been delivering premium IT-enabled business solutions to a wide array of client organizations for over 5+ Years. We have remained at the cutting edge of enterprise technology by making employee excellence our top priority. We believe in cultivating a working environment that supports innovation and creative thinking.",
  },
];
const FAQ = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <section className="mx-8">
      <PageHeading heading={"FAQ"} />
      <div className="md:space-y-8 space-y-5 pt-7">
        {COLLPASEDATA.map((item) => {
          return (
            <Collapse
              key={item.id}
              heanding={item.heading}
              discription={item.description}
              delayIndex={item.id + 300}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
