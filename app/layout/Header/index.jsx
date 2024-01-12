"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition, Menu } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import METTLESOL from "../../../public/assests/header-icon/mettleSol.png";
import Image from "next/image";
import MenuIcon from "../../../public/assests/header-icon/ic_menu.png";
import MenuIconProjectDetails from "../../../public/assests/header-icon/ic_menu.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/", delay: 100 },
  { name: "Services", href: "/services", delay: 200 },
  { name: "About us", href: "/aboutUs", delay: 300 },
  { name: "Blog", href: "/blog", delay: 400 },
  { name: "Work", href: "#", delay: 500 },
  { name: "Career", href: "/career", delay: 600 },
  { name: "Get in Touch", href: "/get-in-tech", delay: 900 },
  { name: "Tech Used", href: "/tech-used", delay: 1000 },
  { name: "Tech Stack", href: "/tech-stack", delay: 1100 },
  { name: "Pricing", href: "/pricing", delay: 1200 },
  { name: "Project Details", href: "/project-details", delay: 1300 },
  { name: "Project", href: "/projects", delay: 1400 },
];
const Industries = [
  {
    name: "Financial Services",
    path: "/financial-services",
  },
  {
    name: "Healthcare",
    path: "/healthcare",
  },
  {
    name: "Logistics",
    path: "/logistics",
  },
  {
    name: "Media & Entertainment",
    path: "/media-&-entertainment",
  },
  {
    name: "Telecom",
    path: "/telecom",
  },
  {
    name: "Automotive",
    path: "/automotive",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [flag, setFlag] = useState(false);
  const [MenuOpen, setMenuOpen] = useState(false);

  // const urlName = usePathname();

  useEffect(() => {
    if (typeof window !== undefined) {
      window.location.pathname == "/projectDetails" ? setFlag(true) : null;
    }
  }, []);

  const hanadleClick = () => {
    setMenuOpen((val) => !val);
  };
  return (
    <header
      className=" bg-transparent"
      data-aos="fade-down"
      data-aos-duration="500"
    >
      <nav
        className="mx-auto flex max-w-full items-center justify-between md:py-4 md:px-20 max-sm:px-5  w-full mb-30 h-auto"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex align-end ">
            <Image
              className="w-auto md:h-28 h-16"
              src={METTLESOL}
              alt="mettleSol"
            />
          </a>
        </div>

        <div className=" lg:flex lg:gap-x-12">
          <div className="bg-[linear-gradient(359.84deg, #202122 3.36%, rgba(32, 33, 34, 0) 90.74%)] px-2"></div>
          <div className="bg-[linear-gradient(359.77deg, #FF5500 4.41%, rgba(255, 85, 0, 0) 103.51%)]"></div>
          <div className="bg-[linear-gradient(359.77deg, #FF5500 4.41%, rgba(255, 85, 0, 0) 103.51%)]"></div>
        </div>

        <div className=" lg:flex lg:flex-1 lg:justify-end">
          <div className="flex ">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Image
                src={flag ? MenuIconProjectDetails : MenuIcon}
                alt=" "
                className="md:w-14 w-10 md:h-14 h-10 z-10"
              />
            </button>
          </div>
        </div>
      </nav>
      <div>
        <Transition appear show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className=" transition-all duration-300 "
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 delay-100"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="fixed inset-y-0 right-0 z-40 h-max bg-[#ff5500] px-6 pb-14 pt-8 md:w-1/2 w-full h-lg rounded-b-2xl sm:ring-1 sm:ring-gray-[rgba(255, 85, 0, 1)] transition-transform duration-300 ease-linear delay-150">
                <div
                  className="flex items-center justify-end "
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <button
                    type="button"
                    className="-rounded-md p-2.5   text-white flex  flex-col justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className=" sr-only text-md sm:font-light lg:font-bold md:font-semibold  font-[Nunito Sans] font-bold text-center">
                      Close menu
                    </span>
                    <XMarkIcon
                      className="w-9 self-center hover:scale-105 ease-in-out transition-all duration-300 active:rotate-180 "
                      aria-hidden="true"
                      data-aos-delay={100}
                    />
                  </button>
                </div>
                <div className="flow-root">
                  <div className="-my-9 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6 px-12 grid grid-cols-2 place-items-start place-content-center">
                      {navigation.map((item, index) => (
                        <>
                          <Link
                            data-aos="fade-left"
                            data-aos-delay={item.delay}
                            key={item.name}
                            href={item.href}
                            className={
                              (urlName == item.href &&
                                " underline font-extralight") +
                              "-mx-3 flex space-x-4 justify-end text-left rounded-lg px-3 py-2 duration-300 text-base font-semibold leading-7 text-white hover:underline "
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="transition-all duration-300 ease-in-out hover:translate-x-1">
                              {item.name}
                            </span>
                          </Link>
                        </>
                      ))}
                      <div
                        className="text-right"
                        data-aos="fade-left"
                        data-aos-delay={1500}
                      >
                        <Menu
                          as="div"
                          className="relative inline-block text-left ml-3"
                        >
                          <div>
                            <Menu.Button
                              className="w-full rounded-md -mx-3 flex space-x-4 items-center text-left px-3 py-2 text-base font-semibold leading-7 text-white hover:underline "
                              onClick={hanadleClick}
                            >
                              Industries
                              <span
                                className={
                                  MenuOpen && "duration-300 ease-in-out "
                                }
                              >
                                {MenuOpen ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 ml-2"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 ml-2"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                    />
                                  </svg>
                                )}
                              </span>
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute -left-20 mt-2 w-[30rem] p-5 origin-top-center divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                              <div className="grid md:grid-cols-3 gap-x-2 gap-y-4 ">
                                <Menu.Item>
                                  <>
                                    {Industries.map((item, index) => {
                                      return (
                                        <div className="" key={index}>
                                          <Link
                                            href={item.path}
                                            className={`${
                                              urlName == item.path
                                                ? "text-[#ff5500] underline font-extralight"
                                                : "text-gray-900"
                                            }  flex items-center rounded-md whitespace-nowrap text-sm hover:text-[#ff5500] hover:underline p-2 font-medium duration-300 ease-in-out`}
                                          >
                                            {item.name}
                                          </Link>
                                        </div>
                                      );
                                    })}
                                  </>
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </Dialog>
        </Transition>
      </div>
    </header>
  );
};
export default Header;
