import { useState, useCallback } from "react";
import { ReactComponent as Logo } from "../img/svg/logo.svg";
import { ReactComponent as Search } from "../img/svg/search.svg";
import { ReactComponent as Myinfo } from "../img/svg/myinfo.svg";
import { ReactComponent as Cart } from "../img/svg/cart.svg";
import downArrow from "../img/svg/dropDown.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsToggled((prev) => !prev);
  }, []);

  return (
    <div className="sticky top-0 z-40 bg-white w-full">
      <div className="flex justify-between py-2.5">
        <div
          className="flex justify-start items-center cursor-pointer md:hidden pl-6"
          onClick={toggleMenu}
          aria-expanded={isToggled}
        >
          <FontAwesomeIcon icon={faBars} size="lg" className="" />
          <Search className="cursor-pointer block ms:hidden ml-2" />
        </div>
        <div className="flex justify-center w-[10rem] mm:w-[20rem]">
          <Logo className="cursor-pointer" />
        </div>
        <div
          className={`md:flex md:flex-1 gap-7 items-center justify-center ${
            isToggled
              ? "flex flex-col w-2/5 bg-white absolute top-0 left-5 p-4"
              : "hidden"
          }`}
        >
          <div className="flex items-center gap-1 cursor-pointer font-bold text-sm text-gray-600">
            <p>HEADPHONES</p>
            <img
              src={downArrow}
              alt="Dropdown arrow"
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
          <div className="flex items-center gap-1 cursor-pointer font-bold text-sm text-gray-600">
            <p>EARPHONES</p>
            <img
              src={downArrow}
              alt="Dropdown arrow"
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
          <div className="flex items-center gap-1 cursor-pointer font-bold text-sm text-gray-600">
            <p>ACCESSORIES</p>
            <img
              src={downArrow}
              alt="Dropdown arrow"
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
          <div className="flex items-center cursor-pointer font-bold text-sm text-gray-600">
            <p>COLLABORATIONS</p>
          </div>
          <div className="flex items-center cursor-pointer font-bold text-sm text-gray-600">
            <p>BLOG</p>
          </div>
        </div>
        <div className="xxl:mr-20 xxl:pr-20 flex justify-center gap-4 items-center pr-6">
          <Search className="cursor-pointer hidden ms:block" />
          <Myinfo className="cursor-pointer" />
          <Cart className="cursor-pointer mr-1" />
          <div className="lg:flex items-center gap-2 cursor-pointer font-bold text-sm text-gray-600 hidden lg:block">
            <p>US</p>
            <img
              src={downArrow}
              alt="Dropdown arrow"
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
          <button className="bg-slate-900 text-white text-sm font-bold px-6 py-2.5 hidden xl:block">
            Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
