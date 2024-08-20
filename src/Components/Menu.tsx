import { ReactComponent as Logo } from "../img/svg/logo.svg";
import { ReactComponent as Search } from "../img/svg/search.svg";
import { ReactComponent as Myinfo } from "../img/svg/myinfo.svg";
import { ReactComponent as Cart } from "../img/svg/cart.svg";
import Dropdown from "./Drop";

function Menu() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <Logo className="master"></Logo>
        </div>
        <div className="menu d-flex">
          <div className="headphone">
            <Dropdown>HEADPHONES</Dropdown>
          </div>
          <div className="earphone">
            <Dropdown>EARPHONES</Dropdown>
          </div>
          <div className="acc">
            <Dropdown>ACCESSORIES</Dropdown>
          </div>
          <div className="collabo">
            <Dropdown>COLLABORATIONS</Dropdown>
          </div>
          <div className="blog">
            <Dropdown>BLOG</Dropdown>
          </div>
        </div>
        <div className="login d-flex">
          <div className="icon">
            <Search></Search>
          </div>
          <div className="icon">
            <Myinfo></Myinfo>
          </div>
          <div className="icon">
            <Cart></Cart>
          </div>
          <div>US</div>
          <div>
            <button>Support</button>
          </div>
        </div>
      </div>
      <div>
        <div className="d-none items">헤드폰나옴</div>
        <div className="d-none items">이어폰나옴</div>
        <div className="d-none items">액세서리나옴</div>
        <div className="d-none items">콜라보나옴</div>
        <div className="d-none items">블로그나옴</div>
      </div>
    </div>
  );
}

export default Menu;
