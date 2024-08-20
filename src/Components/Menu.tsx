import { ReactComponent as Logo } from "../img/svg/logo.svg";
import { ReactComponent as Search } from "../img/svg/search.svg";
import { ReactComponent as Myinfo } from "../img/svg/myinfo.svg";
import { ReactComponent as Cart } from "../img/svg/cart.svg";
import downArrow from "../img/svg/dropDown.svg";

function Menu() {
  return (
    <div className="sticky top-0 z-50">
      <div className="w-full h-full flex bg-white py-2">
        <div className="flex flex-1 pl-10">
          <Logo className="cursor-pointer"></Logo>
        </div>
        <div className="flex flex-3 items-center gap-8 tracking-tight">
          <div className="flex cursor-pointer text-sm text-gray-500 font-bold gap-1">
            <p>HEADPHONES</p>
            <img
              src={downArrow}
              alt=""
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
          <div className="flex cursor-pointer text-sm text-gray-500 font-bold gap-1">
            <p>EARPHONES</p>
            <img
              src={downArrow}
              alt=""
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
          <div className="flex cursor-pointer text-sm text-gray-500 font-bold gap-1">
            <p>ACCESSORIES</p>
            <img
              src={downArrow}
              alt=""
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
          <div className="flex cursor-pointer text-sm text-gray-500 font-bold gap-1">
            <p>COLLABORATIONS</p>
            <img
              src={downArrow}
              alt=""
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
          <div className="flex cursor-pointer text-sm text-gray-500 font-bold gap-1">
            <p>BLOG</p>
            <img
              src={downArrow}
              alt=""
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center gap-3">
          <div>
            <Search className="cursor-pointer"></Search>
          </div>
          <div>
            <Myinfo className="cursor-pointer"></Myinfo>
          </div>
          <div>
            <Cart className="cursor-pointer"></Cart>
          </div>
          <div className="flex cursor-pointer text-sm text-gray-500 font-bold gap-1">
            <p>US</p>
            <img
              src={downArrow}
              alt=""
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
          <div>
            <button className="bg-slate-900 text-white text-sm font-bold px-6 py-2.5">
              Support
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* <div className="d-none items">헤드폰나옴</div>
        <div className="d-none items">이어폰나옴</div>
        <div className="d-none items">액세서리나옴</div>
        <div className="d-none items">콜라보나옴</div>
        <div className="d-none items">블로그나옴</div> */}
      </div>
    </div>
  );
}

export default Menu;
