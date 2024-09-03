import MenuIcon from "./MenuIcon";
import { useState } from "react";
// import PrimaryButton from "./PrimaryButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto flex justify-between items-center py-6 px-4">
      <img src="/hyperchain.svg" alt="hyperchain logo" className="h-8" />
      <nav className="hidden md:block">
        <ul className="flex gap-10 items-center">
          <li>Work</li>
          <li>Frameworks</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <MenuIcon handleToggle={handleToggle} isOpen={isOpen} />
    </header>
  );
};

export default Header;
