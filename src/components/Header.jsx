import MenuIcon from "./MenuIcon";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { frameworks, services } from "../constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleMouseEnter = (dropdownType) => setActiveDropdown(dropdownType);
  const handleMouseLeave = () => setActiveDropdown(null);

  const navItems = [
    { label: "Work", type: null },
    { label: "Frameworks", type: "frameworks", items: frameworks },
    { label: "Services", type: "services", items: services },
    { label: "Contact", type: null },
  ];

  return (
    <header className="container mx-auto flex justify-between items-center py-6 px-4">
      <img src="/hyperchain.svg" alt="hyperchain logo" className="h-8" />
      <nav className="hidden md:block">
        <ul className="flex gap-10 items-center cursor-pointer">
          {navItems.map(({ label, type, items }) => (
            <li
              key={label}
              onMouseEnter={() => handleMouseEnter(type)}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              {label}
              {activeDropdown === type && items && (
                <DropdownMenu items={items} type={type} />
              )}
            </li>
          ))}
        </ul>
      </nav>
      <MenuIcon handleToggle={handleToggle} isOpen={isOpen} />
    </header>
  );
};

export default Header;
