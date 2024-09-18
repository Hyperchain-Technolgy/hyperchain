import PropTypes from "prop-types";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const LinkButton = ({ name, href }) => {
  return (
    <Link href={href}>
      <button className="flex items-center h-8 sm:h-10 px-3 sm:px-4 border border-primary rounded-full group text-nowrap text-sm sm:text-base">
        <span className="mr-1 sm:mr-2">{name}</span>
        <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-[-30deg] transition duration-300" />
      </button>
    </Link>
  );
};

LinkButton.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default LinkButton;
