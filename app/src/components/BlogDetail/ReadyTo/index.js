import React from "react";
import PageHeading from "../../pageHerdings";
import Button from "../../Button";

const index = () => {
  return (
    <section>
      <PageHeading
        heading={"Ready to Get Started?"}
        parhaOne={
          <div className="2xl:ps-44 xl:ps-44 lg:ps-40 max-md:px-5">
            Our healthtech consulting and software development services have
            empowered both private and public entities to provide better patient
            care and experience, improve workforce productivity, and thrive in
            the ever-evolving healthcare ecosystem.
          </div>
        }
      />
      <div
        className="2xl:ps-44 xl:ps-44 lg:ps-40 py-4 max-md:px-5"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <Button
          label={"Let's Connect"}
          classes={"md:px-10 md:py-4 px-6 py-2"}
        />
      </div>
    </section>
  );
};

export default index;
