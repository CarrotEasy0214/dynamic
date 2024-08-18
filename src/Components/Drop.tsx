import React, { useState, ReactNode } from "react";
import MW75Drop from "../img/feature/MW75Drop.png";
import MH40Drop from "../img/feature/MH40Drop.png";
import MG20Drop from "../img/feature/MG20.png";
import MW75LamboDrop from "../img/feature/MW75LamboDrop.png";

interface DropdownProps {
  children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        {children}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item">
            <img src={MW75Drop} alt="" />
          </li>
          <li className="dropdown-item">
            <img src={MH40Drop} alt="" />
          </li>
          <li className="dropdown-item">
            <img src={MG20Drop} alt="" />
          </li>
          <li className="dropdown-item">
            <img src={MW75LamboDrop} alt="" />
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
