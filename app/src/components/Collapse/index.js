import { Disclosure, Transition } from "@headlessui/react";

const MyDisclosure = ({ delayIndex, discription, heanding }) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay={delayIndex}
    >
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={
                " 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg text-md text-[#ff5500] duration-300 ease-linear    font-sans font-bold "
              }
            >
              <span
                className=" transition-all duration-300 ease-in-out delay-200 pr-2"
              >
                {open ? "-" : "+"}
              </span>{" "}
              <span className="active:underline">{heanding}</span>
            </Disclosure.Button>

            {/*
            Use the `Transition` + `open` render prop argument to add transitions.
          */}
            <Transition
              show={open}
              enter="transition ease-in duration-500"
              enterFrom="opacity-0 translate-y-0"
              enterTo="opacity-100 translate-y-3"
              leave="transition ease-out duration-300"
              leaveFrom="opacity-100 translate-y-2"
              leaveTo="opacity-0 translate-y-1"
            >
              {/*
              Don't forget to add `static` to your `Disclosure.Panel`!
            */}
              <Disclosure.Panel static>
                <div className=" font-sans text-[#212121A3] font-normal  md:text-lg text-xs ">
                  {discription}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};
export default MyDisclosure;
