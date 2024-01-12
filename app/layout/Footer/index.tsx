import { navigation } from "./navigation.js";
const Footer = () => {
  return (
    <footer
      className="font-[Poppins]"
      style={{ background: "rgba(1, 28, 42, 1)" }}
      aria-labelledby="footer-heading"
      data-aos="zoom-out"
      data-aos-duration="500"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="2xl:mx-28 xl:mx-24 md:mx-20 sm:mx-6 max-w-full px-4 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32 ">
        <div className="xl:grid xl:grid-cols-3 md:grid-cols-1 xl:gap-8 border-t border-white/40 py-10">
          <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div data-aos-delay={200}>
                <h3 className="text-md font-semibold leading-6 text-white mb-9 font-[Poppins]">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item, index) => (
                    <li
                      key={item.name}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={`${index}00` + 200}
                    >
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 font-normal hover:text-white flex space-x-5"
                      >
                        <item.icon className="text-3xl" aria-hidden="true" />
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="md:grid md:grid-cols-3 sm:grid-cols-3 lg:gap-18 md:gap-8"
              data-aos-delay={300}
            >
              <div
                className="mt-10 md:mt-0"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={500}
              >
                <h3 className="text-md font-semibold leading-6 text-gray-100 mb-9">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item, index) => (
                    <li key={item.name} data-aos-delay={`${index}00` + 300}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 font-normal hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="mt-10 md:mt-0"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <h3 className="text-md font-semibold leading-6 text-white mb-9">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item, index) => (
                    <li
                      key={item.name}
                      data-aos="fade-up"
                      data-aos-delay={`${index}00` + 100}
                    >
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 font-normal hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 md:mt-0 space-y-4" data-aos-delay={700}>
                <h3 className="text-md font-semibold leading-6 text-white mb-9">
                  Quick Links
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.quick.map((item, index) => (
                    <li
                      key={item.name}
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay={`${index}00` + 100}
                    >
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 font-normal hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div
              className="bg-[#011621] max-w-sm h-auto rounded-lg flex flex-col justify-center gap-y-5 p-5 max-md:mt-6"
              data-aos="zoom-out-left"
              data-aos-duration="1200"
              data-aos-delay={100}
            >
              <h6
                className="text-white font-[Montserrat] font-bold text-lg"
                data-aos-delay={200}
              >
                Join Our Newsletter
              </h6>
              <form data-aos-delay={300}>
                <div className="flex justify-between items-stretch w-full">
                  <input
                    placeholder="Your email address"
                    className=" placeholder:text-xs text-[#F5F5F5] font-[Montserrat] py-3 w-3/4 border-none outline-none p-4 rounded-l-[4px]"
                    style={{ background: "rgba(255, 255, 255, 0.24)" }}
                  />
                  <button
                    type="submit"
                    className=" bg-[#ff5500] text-white md:text-sm text-xs w-3/12 outline-[#ff5500] border-[#ff5500] font-[Montserrat] font-medium rounded-r-[4px] hover:text-[#ff5000] hover:bg-white ease-linear duration-200 transition-all active:font-extrabold"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p
                className="font-[Montserrat] md:text-sm text-xs text-slate-400 font-medium leading-6  "
                data-aos-delay={400}
              >
                * Will send you weekly updates for your better tool management.
              </p>
            </div>
            <div
              className="flex justify-start items-center gap-6 pt-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <span
                className="w-10 h-10 bg-white p-2 rounded-full flex justify-center items-center hover:bg-[#ff5500] hover:text-white transition-all duration-300 cursor-pointer"
                data-aos-delay={100}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span
                className="w-10 h-10 bg-white p-2 rounded-full flex justify-center items-center  hover:bg-[#ff5500] hover:text-white transition-all duration-300 cursor-pointer"
                data-aos-delay={200}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </span>
              <span
                className="w-10 h-10 bg-white p-2 rounded-full flex justify-center items-center  hover:bg-[#ff5500] hover:text-white transition-all duration-300 cursor-pointer"
                data-aos-delay={300}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        {/* <div className="mt-16  pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-400"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
};
export default Footer;
