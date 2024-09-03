import PropTypes from "prop-types";

const MenuIcon = ({ handleToggle, isOpen }) => {
  const spanBaseStyle =
    "block absolute h-0.5 w-full bg-white rounded-lg left-0 transition duration-[250ms] ease-in-out";
  const transformOrigin = "left center";

  return (
    <div
      onClick={handleToggle}
      className="h-[1.5rem] w-8 relative rotate-0 transition duration-500 ease-in-out cursor-pointer"
    >
      <span
        className={`${spanBaseStyle} top-[0] ${
          isOpen ? "rotate-[45deg] top-[-3px]" : "rotate-0"
        }`}
        style={{ transformOrigin }}
      ></span>
      <span
        className={`${spanBaseStyle} top-[14px] ${
          isOpen ? "w-0 opacity-0" : "opacity-100"
        }`}
        style={{ transformOrigin }}
      ></span>
      <span
        className={`${spanBaseStyle} top-[28px] ${
          isOpen ? "rotate-[-45deg] top-[36px]" : "rotate-0"
        }`}
        style={{ transformOrigin }}
      ></span>
    </div>
  );
};

MenuIcon.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default MenuIcon;
