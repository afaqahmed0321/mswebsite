import { Box } from "../../BoxComponent/BoxComponent";
import reactImage from "../../../../../public/assests/tech-stacks/ic_vue.png";
import vueImage from "../../../../../public/assests/tech-stacks/ic_vue_logo.png";
import angularImage from "../../../../../public/assests/tech-stacks/ic_angular_logo.png";

const FrontEndDevelop = () => {
  const techStacks = [
    { firstText: reactImage, secondText: "React", bottomBorder: true },
    { firstText: vueImage, secondText: "Vue", bottomBorder: true },
    { firstText: angularImage, secondText: "Angular", bottomBorder: true },
    // Add more items as needed
  ];
  return (
    <>
      <div
        className="flex flex-col sm:flex-row ml-10 sm:ml-10 md:ml-24 mr-10 sm:mr-10 md:mr-24 mt-14 mb-8"
        data-aos={"fade-right"}
      >
        <div className="flex-grow w-full p-10 sm:bg-[#FF5500] bg-[#21212105] text-black sm:text-white">
          <h1
            className="text-xl mb-4 md:text-2xl lg:text-3xl"
            data-aos-delay={100}
          >
            Front-end Development
          </h1>
          <p>
            Equip your company with reliable and user-friendly front-ends for
            your solutions to cost-effectively and swiftly resolve your
            industry-specific business challenges.
          </p>
          <p className="mt-6 mb-6 font-bold italic" data-aos-delay={200}>
            Mettle Sol’s Front-end department has:
          </p>
          <ul>
            <li className="mb-4" data-aos-delay={300}>
              ✓&nbsp;&nbsp;&nbsp;850+ Front-end developers
            </li>
            <li className="mb-4" data-aos-delay={400}>
              ✓&nbsp;&nbsp;&nbsp;16 years of experience
            </li>
            <li className="mb-4" data-aos-delay={500}>
              ✓&nbsp;&nbsp;&nbsp;4.9 rating on Clutch
            </li>
          </ul>
          <button
            data-aos-delay={600}
            className="mt-6 mb-4 py-3 px-4 sm:text-base md:text-lg lg:text-xl text-white sm:text-[#838181] bg-[#FF5500] sm:bg-white rounded-md"
          >
            Explore&nbsp;&nbsp;&nbsp;&gt;
          </button>
        </div>
        <div className="flex-grow w-full pl-0 sm:pl-3 pt-3 sm:pt-0">
          <DynamicGrid items={techStacks} />
        </div>
      </div>
    </>
  );
};

const DynamicGrid = ({ items }) => {
  const numberOfColumns = 2;
  const gapSize = 4;
  const columnWidth = `calc((100% - ${gapSize}px * ${
    numberOfColumns - 1
  }) / ${numberOfColumns})`;

  const boxProperties = `p-6 pb-14 h-44 sm:h-56 w-full ${columnWidth} shadow-md`;

  return (
    <div
      className={`flex-grow w-full grid gap-${gapSize} grid-cols-3 sm:grid-cols-2 `}
    >
      {items.map((item, index) => (
        <div key={index}>
          <div>
            <Box {...item} properties={boxProperties} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FrontEndDevelop;
