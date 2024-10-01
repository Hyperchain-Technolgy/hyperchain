import PropTypes from "prop-types";
import India from "../assets/footer/India.svg";
import FooterBottom from "./FooterBottom";

import { ArrowRightIcon } from "@heroicons/react/20/solid";
import linkedin from "../assets/social/linkedin.svg";
import instagram from "../assets/social/instagram.svg";
import facebook from "../assets/social/facebook.svg";

const socialLinks = [
  { name: "linkedin", link: "/linkedin", image: linkedin },
  { name: "instagram", link: "/instagram", image: instagram },
  { name: "facebook", link: "/facebook", image: facebook },
];

const navigationLinks = [
  "Work",
  "Services",
  "Frameworks",
  "Use Cases",
  "About",
  "Careers",
  "Contact",
];

const SocialLinks = () => (
  <div className="flex space-x-6">
    {socialLinks.map((platform) => (
      <a
        key={platform.link}
        href="#"
        className="text-2xl transition-colors duration-300 hover:opacity-80"
        aria-label={`Visit our ${platform.name} page`}
      >
        <img src={platform.image} alt={platform.name} className="w-6 h-6" />
      </a>
    ))}
  </div>
);

const NavigationLinks = () => (
  <ul className="space-y-3 w-full">
    {navigationLinks.map((link) => (
      <li
        key={link}
        className="border-b border-gray-700 hover:border-white transition-colors duration-300"
      >
        <a
          href="#"
          className="text-white transition-all duration-300 flex items-center justify-between w-full group py-2 hover:pl-2"
        >
          {link}
          <ArrowRightIcon className="h-5 w-5 transform group-hover:rotate-[-45deg] transition-transform duration-300" />
        </a>
      </li>
    ))}
  </ul>
);

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

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-24 pb-12">
        <div className="flex flex-col items-start space-y-6">
          <img src="/hyperchain.svg" alt="Hyperchain Logo" className="h-12" />
          <a
            href="mailto:hello@hyperchain.com"
            className="text-lg hover:text-blue-400 transition-colors duration-300"
          >
            hello@hyperchain.com
          </a>
          <SocialLinks />
        </div>
        <div className="flex flex-col space-y-6 lg:max-w-[290px]">
          <NavigationLinks />
        </div>
        <div className="flex flex-col space-y-6">
          <div className="space-y-4">
            <ContactItem
              icon={India}
              country="India"
              location="Ahmedabad"
              phone="+91 98765 43210"
            />
          </div>
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;

ContactItem.propTypes = {
  icon: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
