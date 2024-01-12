import React from "react";
import Image from "next/image";
import image1 from "../../../../../public/assests/blog/hero/Rectangle 3051.png";
import image2 from "../../../../../public/assests/blog/hero/Rectangle 3052.png";

const PageContent = () => {
  return (
    <section className="mx-8 2xl:mx-36 xl:mx-28 lg:mx-24 md:mx-18 sm:mx-11 my-10">
      <div className="flex justify-center items-stretch md:gap-10 gap-5 overflow-hidden">
        <div
          className="bg-[#FF5500] p-1 rounded-md object-cover basis-3/6 "
          data-aos-delay={0}
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <Image className="w-full md:h-[40rem]" src={image1} alt="immage" />
        </div>
        <div
          className="bg-[#FF5500] p-1 rounded-md object-cover basis-3/6"
          data-aos-delay={100}
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <Image className="w-full md:h-[40rem] " src={image2} alt="immage" />
        </div>
      </div>
      <div className="md:my-14 my-5">
        <h4
          className="text-[#FF5500]  font-[Nunito Sans] font-semibold  md:text-5xl text-2xl leading-8 md:pb-5 pb-2"
          data-aos-delay={200}
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          Flexible solutions for varying business needs
        </h4>
        <div className="space-y-3">
          <p
            className="text-[#838181]  font-[Nunito Sans] font-norml text-sm md:text-xl md:leading-8 sm:leading-8 "
            data-aos-delay={300}
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            We collaborate proactively with our customers to provide them with
            the best available resources and solutions to IT-related market
            challenges. We are highly competitive, and bring value to our
            customers by meeting their core interests. Our core principle guide
            us to help our consumers in every aspect of their IT business
            journey.
          </p>
          <p
            className="text-[#838181]  font-[Nunito Sans] font-norml text-sm md:text-xl md:leading-8 sm:leading-8 "
            data-aos-delay={400}
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            WE provide custom software solutions In contemporary era of
            digitalization, all business organizations are in dire need of
            development resources to expand their businesses. Hence, we provide
            you with your digital market to outreach your customers across the
            globe.
          </p>
          <p
            className="text-[#838181]  font-[Nunito Sans] font-norml text-sm md:text-xl md:leading-8 sm:leading-8 "
            data-aos-delay={500}
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            {"We have done a lot of work, Let’s Check some from here"}
            <br />
            {
              " All organizations must adapt their markets from traditional to digitalized approaches as a result of the market's digitalization. As a provider of software solutions, we provide you a website that serves as your digitalized marketplace, allowing you to connect with customers all across the world."
            }
          </p>
          <h4
            className="text-[#FF5500]  font-[Nunito Sans] font-semibold  md:text-5xl text-2xl leading-8 md:py-5 max-sm:py-1"
            data-aos-delay={600}
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            APPROACH
          </h4>
          <div className="md:space-y-4">
            <p
              className="text-[#838181]  font-[Nunito Sans] font-norml text-sm md:text-xl md:leading-8  "
              data-aos-delay={700}
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              BrainX Technologies adopted a systematic approach to address the
              challenges faced by Just Thrive. The primary areas of focus were
              user interface and experience, custom app development, sales
              funnel optimization, site speed enhancement, theme customization,
              and implementing custom discounting logic with Shopify Plus.
            </p>
            <h4
              className="text-[#FF5500]  font-[Nunito Sans] font-semibold  md:text-5xl text-2xl leading-8 py-2"
              data-aos-delay={800}
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              SOLUTION
            </h4>

            <div
              className="text-[#838181]  font-[Nunito Sans] font-norml text-sm md:text-xl md:leading-8"
              data-aos-delay={900}
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="pb-1.5">
                Over the past 2 to 3 years, Team BrainX has offered the
                following solutions for the online store.
              </div>
              {
                ` We have done a lot of work, Let’s Check some from he All organizations must adapt their markets from traditional to digitalized approaches as a result of the market's digitalization. As a provider of software solutions, we provide you a website that serves as your digitalized marketplace, allowing you to connect with customers all across the world.`
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContent;
