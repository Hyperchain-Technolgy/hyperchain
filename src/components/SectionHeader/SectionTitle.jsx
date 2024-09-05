import PropTypes from "prop-types";

const SectionTitle = ({ subtitle, title }) => {
  return (
    <>
      <p className="tracking-[.25em] uppercase text-sm">{subtitle}</p>
      <h2 className="text-4xl font-bold">{title}</h2>
    </>
  );
};

SectionTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
