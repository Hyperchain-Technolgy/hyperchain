import PropTypes from "prop-types";
import India from "../assets/footer/India.svg";
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/20/solid";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { platform: "linkedin", color: "blue" },
    { platform: "xing", color: "green" },
    { platform: "medium", color: "gray" },
    { platform: "instagram", color: "blue" },
    { platform: "facebook", color: "blue" },
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-start">
          <img
            src="/hyperchain.svg"
            alt="Hyperchain Logo"
            className="h-12 mb-6"
          />
          <a
            href="mailto:hello@hyperchain.com"
            className="mb-6 text-lg hover:text-blue-400 transition-colors duration-300 flex items-center"
          >
            hello@hyperchain.com
          </a>
          <div className="flex space-x-6">
            {socialLinks.map(({ platform, color }) => (
              <a
                key={platform}
                href="#"
                className={`text-2xl hover:text-${color}-400 transition-colors duration-300`}
                aria-label={`Visit our ${platform} page`}
              ></a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start">
          <ul className="space-y-3 w-full">
            {[
              "Work",
              "Services",
              "Frameworks",
              "Use Cases",
              "About",
              "Careers",
              "Contact",
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-white transition-colors duration-300 flex items-center justify-between w-full group"
                >
                  {link}
                  <ArrowRightIcon className="h-5 w-5 group-hover:hidden" />
                  <ArrowUpRightIcon className="h-5 w-5 hidden group-hover:block" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
          <div className="space-y-4">
            <ContactItem
              icon={India}
              country="India"
              location="Ahmedabad"
              phone="+91 963 899 8419"
            />
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-400">
        © {currentYear} Hyperchain. All rights reserved.
      </div>
    </footer>
  );
};

const ContactItem = ({ icon, country, location, phone }) => (
  <div className="flex items-start space-x-3">
    <img src={icon} alt={country} className="h-6 mt-1" />
    <div>
      <p className="font-semibold">
        {location}, {country}
      </p>
      <span className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
        {phone}
      </span>
    </div>
  </div>
);

ContactItem.propTypes = {
  icon: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Footer;
