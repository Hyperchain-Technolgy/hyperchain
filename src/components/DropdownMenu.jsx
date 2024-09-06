import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DropdownMenu = ({ items, type }) => {
  return (
    <div className="absolute border border-gray-700 rounded-xl shadow-lg z-10 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md mt-1 text-nowrap w-max">
      <div className="grid grid-cols-2 gap-4 p-4">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to={item.href}
              className="flex items-center space-x-2 hover:text-white text-gray-300 cursor-pointer border border-transparent hover:border-gray-400 hover:bg-neutral-800/50 py-2 px-6 rounded-md"
            >
              {type === "frameworks" && item.icon && <span>{item.icon}</span>}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

DropdownMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
  type: PropTypes.oneOf(["frameworks", "services"]).isRequired,
};

export default DropdownMenu;
