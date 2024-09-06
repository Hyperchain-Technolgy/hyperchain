import { useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";

const ServiceTabs = ({ services }) => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="flex flex-col lg:flex-row mt-8 bg-black text-white">
      <div className="flex flex-col justify-between lg:w-1/2 pr-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex items-center transition-all text-left py-5 lg:py-8 opacity-100 lg:text-xl ${
              index !== services.length - 1
                ? "!border-b lg:border-b-1 !border-b-[#555] hover:border-b-[#fff]"
                : ""
            } cursor-pointer ${
              activeService === service ? "text-white" : "text-gray-500"
            }`}
            onMouseEnter={() => setActiveService(service)}
          >
            <span className="pr-7">{`0${index + 1}.`}</span>
            <span>{service.name}</span>
            <div className="ml-auto">
              <ArrowUpRightIcon className="size-5 lg:hidden" />
            </div>
          </div>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-col lg:justify-center lg:w-1/2 px-8">
        <p className="mb-6">{activeService.description}</p>
        <div className="h-[387px]">
          <img
            src={activeService.image}
            alt={activeService.name}
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

ServiceTabs.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ServiceTabs;
