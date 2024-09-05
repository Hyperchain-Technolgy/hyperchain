import PropTypes from "prop-types";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const LinkButton = ({ name, href }) => {
  return (
    <Link href={href}>
      <button className="flex items-center h-10 px-4 border border-primary rounded-full group text-nowrap">
        {name}
        <ArrowRightIcon className="size-5 ml-2 group-hover:rotate-[-30deg] transition duration-300" />
      </button>
    </Link>
  );
};

LinkButton.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default LinkButton;
