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
      <div className="flex justify-between py-3">
        <div
          className="flex justify-center items-center cursor-pointer md:hidden"
          onClick={toggleMenu}
          aria-expanded={isToggled}
        >
          <FontAwesomeIcon icon={faBars} size="lg" className="ml-1" />
          <Search className="cursor-pointer block md:hidden ml-2" />
        </div>
        <div className="flex justify-center ml-20 pl-20 md:flex-2">
          <Logo className="cursor-pointer" />
        </div>
        <div
          className={`md:flex md:flex-2 gap-8 items-center ${
            isToggled ? "flex flex-col w-full bg-white absolute top-16 left-0 p-4" : "hidden"
          }`}
        >
          <div className="flex items-center gap-2 cursor-pointer font-bold text-sm text-gray-600">
            <p>HEADPHONES</p>
            <img src={downArrow} alt="Dropdown arrow" className="w-3 flex justufy-center pt-0.5" />
          </div>
          <div className="flex items-center gap-2 cursor-pointer font-bold text-sm text-gray-600">
            <p>EARPHONES</p>
            <img src={downArrow} alt="Dropdown arrow" className="w-3 flex justufy-center pt-0.5" />
          </div>
          <div className="flex items-center gap-2 cursor-pointer font-bold text-sm text-gray-600">
            <p>ACCESSORIES</p>
            <img src={downArrow} alt="Dropdown arrow" className="w-3 flex justufy-center pt-0.5" />
          </div>
          <div className="flex items-center gap-2 cursor-pointer font-bold text-sm text-gray-600">
            <p>COLLABORATIONS</p>
            <img src={downArrow} alt="Dropdown arrow" className="w-3 flex justufy-center pt-0.5" />
          </div>
          <div className="flex items-center gap-2 cursor-pointer font-bold text-sm text-gray-600">
            <p>BLOG</p>
            <img src={downArrow} alt="Dropdown arrow" className="w-3 flex justufy-center pt-0.5" />
          </div>
        </div>
        <div className="flex-2 flex justify-end gap-4 items-center">
          <Search className="cursor-pointer hidden md:block" />
          <Myinfo className="cursor-pointer" />
          <Cart className="cursor-pointer" />
          <div className="md:flex items-center gap-2 cursor-pointer font-bold text-sm text-gray-600 hidden md:block">
            <p>US</p>
            <img src={downArrow} alt="Dropdown arrow" className="w-3 flex justufy-center pt-0.5" />
          </div>
          <button className="bg-slate-900 text-white text-sm font-bold px-6 py-2.5 hidden md:block">Support</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
