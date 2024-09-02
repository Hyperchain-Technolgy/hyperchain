import MenuIcon from "./MenuIcon";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <img src="/hyperchain.svg" alt="hyperchain logo" />
      <ul>
        <li>Work</li>
        <li>Frameworks</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      <MenuIcon handleToggle={handleToggle} isOpen={isOpen} />
    </nav>
  );
};

export default Nav;
