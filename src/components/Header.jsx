import MenuIcon from "./MenuIcon";
import { useState } from "react";
import FrameworksDropdown from "./FrameworksDropdown";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFrameworks, setShowFrameworks] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto flex justify-between items-center py-6 px-4">
      <img src="/hyperchain.svg" alt="hyperchain logo" className="h-8" />
      <nav className="hidden md:block">
        <ul className="flex gap-10 items-center cursor-pointer">
          <li>Work</li>
          <li
            onMouseEnter={() => setShowFrameworks(true)}
            onMouseLeave={() => setShowFrameworks(false)}
            className="relative"
          >
            Frameworks
            {showFrameworks && <FrameworksDropdown />}
          </li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <MenuIcon handleToggle={handleToggle} isOpen={isOpen} />
    </header>
  );
};

export default Header;
