import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";

const ServiceTabs = ({ services }) => {
  return (
    <section>
      <div className="flex flex-col  items-stretch my-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4 border-b lg:border-b-1 border-b-[#555] hover:border-b-[#fff] last:border-b-0 lg:border-white/2"
          >
            <p className="mr-5 lg:mr-7">{`0${index + 1}`}</p>
            <p>{service.name}</p>
            <div className="ml-auto">
              <ArrowUpRightIcon className="size-5 lg:hidden" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

ServiceTabs.propTypes = {
  services: PropTypes.array.isRequired,
};

export default ServiceTabs;
