import PropTypes from "prop-types";
import LinkButton from "../LinkButton";

const SectionTitle = ({ subtitle, title, link }) => {
  return (
    <>
      <p className="tracking-[.25em] uppercase text-sm">{subtitle}</p>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold">{title}</h2>
        {link && (
          <div className="hidden lg:block">
            <LinkButton name="View All" href={link} />
          </div>
        )}
      </div>
    </>
  );
};

SectionTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default SectionTitle;
