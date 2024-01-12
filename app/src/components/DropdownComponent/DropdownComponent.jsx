import React, { useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";

const DropdownComponent = ({ items, title, btnStyle, delay }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  return (
    <div className="relative inline-block" data-aos-delay={delay}>
      <button
        onClick={toggleDropdown}
        className={
          "bg-[#ff5500] text-white px-4 py-3 rounded-md hover:opacity-80 ease-linear duration-200 focus:outline-none flex justify-between my-5 " +
          (btnStyle ? btnStyle : " w-64 ")
        }
      >
        {selectedItem || title}
        <ChevronDownIcon className="-mr-1 h-5 w-5 " />
      </button>
      {isOpen && (
        <div className="absolute w-64 bg-white border border-gray-300 rounded shadow-lg z-10">
          <ul>
            {items.map((item) => (
              <li
                key={item}
                className="cursor-pointer px-4 py-2 hover:bg-[#ff544436] hover:underline text-[#ff5500] font-medium ease-in-out duration-200"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;
