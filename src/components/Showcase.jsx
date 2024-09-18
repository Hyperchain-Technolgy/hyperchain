import { useState } from "react";
import PropTypes from "prop-types";
import LinkButton from "./LinkButton";
import { showcase } from "../constants/Showcase";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import SectionTitle from "./SectionHeader/SectionTitle";
import SectionParagraph from "./SectionHeader/SectionParagraph";

const Showcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateShowcase = (direction) => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + direction + showcase.length) % showcase.length
    );
  };

  const currentItem = showcase[currentIndex];

  const TechItem = ({ icon, name }) => (
    <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
      <img src={icon} alt={name} className="w-4 h-4" />
      <span className="text-xs text-white">{name}</span>
    </div>
  );

  TechItem.propTypes = {
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  const NavigationButton = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
    >
      {direction === "previous" ? (
        <ChevronLeftIcon className="text-white w-4 h-4" />
      ) : (
        <ChevronRightIcon className="text-white w-4 h-4" />
      )}
    </button>
  );

  NavigationButton.propTypes = {
    direction: PropTypes.oneOf(["previous", "next"]).isRequired,
    onClick: PropTypes.func.isRequired,
  };

  const ShowcaseHeader = () => (
    <div className="flex flex-col gap-4 mb-8">
      <SectionTitle
        title="A Showcase of Our Success"
        subtitle="Work"
        link="/"
      />
      <SectionParagraph paragraph="Our portfolio showcases the success of Codezeros as a Blockchain Development Service Provider. It is a carefully curated collection of our most successful projects and inspiring success stories, which reflects our unwavering commitment to delivering excellence." />
    </div>
  );

  const MobileLayout = () => (
    <div className="lg:hidden border border-white/30 rounded-2xl p-4">
      <div className="relative mb-6">
        <img
          src={currentItem.bg}
          alt={currentItem.name}
          className="w-full h-[300px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 rounded-lg"></div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold text-white mb-2">
          {currentItem.name}
        </h2>
        <p className="text-base font-bold leading-6 text-white/80 mb-4 tracking-tighter">
          {currentItem.subtitle}
        </p>
        <p className="text-sm text-white/70">{currentItem.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {currentItem.tech.map((item, index) => (
          <TechItem key={index} {...item} />
        ))}
      </div>

      <div className="flex justify-between items-center mb-0">
        <div className="flex gap-2">
          <NavigationButton
            direction="previous"
            onClick={() => navigateShowcase(-1)}
          />
          <NavigationButton
            direction="next"
            onClick={() => navigateShowcase(1)}
          />
        </div>
        <LinkButton name="View Project" href="/" />
      </div>
    </div>
  );

  const DesktopLayout = () => (
    <div className="hidden lg:grid grid-cols-12 gap-8 relative">
      <div className="col-span-5">
        <div className="relative h-[400px] overflow-hidden rounded-xl shadow-lg">
          <img
            src={currentItem.bg}
            alt={currentItem.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
      </div>
      <div className="col-span-7 flex flex-col justify-between py-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
            {currentItem.name}
          </h2>
          <p className="text-xl font-bold text-white/60 mb-4 tracking-tight leading-6">
            {currentItem.subtitle}
          </p>
          <p className="text-base text-white/80 mb-6 leading-relaxed">
            {currentItem.description}
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {currentItem.tech.map((item, index) => (
              <TechItem key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <NavigationButton
              direction="previous"
              onClick={() => navigateShowcase(-1)}
            />
            <NavigationButton
              direction="next"
              onClick={() => navigateShowcase(1)}
            />
          </div>
          <LinkButton name="View Project" href="/" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="container mx-auto px-6 py-16">
      <ShowcaseHeader />
      <MobileLayout />
      <DesktopLayout />
    </section>
  );
};

export default Showcase;
