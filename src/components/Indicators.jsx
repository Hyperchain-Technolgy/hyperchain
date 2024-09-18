import PropTypes from "prop-types";

const Indicators = ({ activeIndex, setActiveIndex, totalCount }) => (
  <div className="flex justify-center mt-10 space-x-2">
    {[...Array(totalCount)].map((_, index) => (
      <button
        key={index}
        onClick={() => setActiveIndex(index)}
        className={`w-8 h-2 sm:w-12 sm:h-2 rounded-sm transition-all duration-300 ${
          index === activeIndex ? "bg-white" : "bg-white/30 hover:bg-white/50"
        }`}
        aria-label={`Go to testimonial ${index + 1}`}
      />
    ))}
  </div>
);

Indicators.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
};

export default Indicators;
