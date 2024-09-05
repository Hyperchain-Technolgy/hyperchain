import PropTypes from "prop-types";

const SectionParagraph = ({ paragraph }) => {
  return <p className="leading-6 max-w-[930px] opacity-80">{paragraph}</p>;
};

SectionParagraph.propTypes = {
  paragraph: PropTypes.string.isRequired,
};

export default SectionParagraph;
