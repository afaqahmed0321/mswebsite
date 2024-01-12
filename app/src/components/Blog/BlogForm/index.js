import React from "react";
import PageHeading from "../../pageHerdings";
import RettingCard from "../RettingCard";
import BlogPageForm from "../LeveReplyForm";

const BlogFrom = () => {
  return (
    <section className="border-t-[5px] border-[#838181] md:py-20 max-sm:pb-16 px-2">
      <PageHeading
        heading={"See Our Impressions"}
        parhaOne={
          <div className="2xl:ps-44 xl:ps-44 lg:ps-40 md:ps-32 sm:18  pr-8">
            Problems trying to resolve the conflict between the two major realms
            <br className="2xl:block xl:block lg:block md:hidden sm:hidden hidden" />
            of classNameNameical physics: Newtonian mechanics
          </div>
        }
      />
      <div className="flex flex-row overflow-visible md:py-20 py-6 space-x-8 mx-4">
        <RettingCard />
      </div>
      <div classNameName="px-28">
        <div className="py-14 px-2">
          <PageHeading
            heading={"Leave a Reply"}
            parhaOne={
              <div className="xl:pl-44 lg:pl-40 md:pl-2 sm:pl-2 pl-2 pr-8">
                Your email address will not be published. Required fields are
                marked *
              </div>
            }
          />
        </div>
        <BlogPageForm />
      </div>
    </section>
  );
};

export default BlogFrom;
