import React, { useState, useCallback } from "react";
import { ReactComponent as Logo } from "../img/svg/logo.svg";
import { ReactComponent as Search } from "../img/svg/search.svg";
import { ReactComponent as Myinfo } from "../img/svg/myinfo.svg";
import { ReactComponent as Cart } from "../img/svg/cart.svg";
import downArrow from "../img/svg/dropDown.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsToggled((prev) => !prev);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white w-full">
      <div className="flex justify-between items-center p-4 bg-white">
        <div
          className="md:hidden cursor-pointer absolute left-4"
          onClick={toggleMenu}
          aria-expanded={isToggled}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
        <div className="flex-1 flex justify-center">
          <Logo className="cursor-pointer" />
        </div>
        <div
          className={`md:flex gap-8 items-center ${
            isToggled
              ? "flex flex-col w-full bg-white absolute top-16 left-0 p-4"
              : "hidden"
          } md:relative md:flex-row`}
        >
          <div className="flex items-center gap-2 cursor-pointer font-bold text-sm text-gray-600">
            <p>HEADPHONES</p>
            <img
              src={downArrow}
              alt="Dropdown arrow"
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
          <div className="flex items-center gap-2 cursor-pointer font-bold text-sm text-gray-600">
            <p>EARPHONES</p>
            <img
              src={downArrow}
              alt="Dropdown arrow"
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
          <div className="flex items-center gap-2 cursor-pointer font-bold text-sm text-gray-600">
            <p>ACCESSORIES</p>
            <img
              src={downArrow}
              alt="Dropdown arrow"
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
          <div className="flex items-center gap-2 cursor-pointer font-bold text-sm text-gray-600">
            <p>COLLABORATIONS</p>
            <img
              src={downArrow}
              alt="Dropdown arrow"
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
          <div className="flex items-center gap-2 cursor-pointer font-bold text-sm text-gray-600">
            <p>BLOG</p>
            <img
              src={downArrow}
              alt="Dropdown arrow"
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end gap-4 items-center">
          <Search className="cursor-pointer" />
          <Myinfo className="cursor-pointer" />
          <Cart className="cursor-pointer" />
          <div className="flex items-center gap-2 cursor-pointer font-bold text-sm text-gray-600">
            <p>US</p>
            <img
              src={downArrow}
              alt="Dropdown arrow"
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
          <button className="bg-slate-900 text-white text-sm font-bold px-6 py-2.5">
            Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
