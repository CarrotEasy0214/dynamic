import { ReactComponent as Logo } from "./img/svg/logo.svg";

function Menu() {
  document
    .getElementsByClassName("headphone")[0]
    .addEventListener("click", function () {
      document.getElementsByClassName("items")[0].classList.toggle("d-show");
    });
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <Logo className="master"></Logo>
        </div>
        <div className="menu d-flex">
          <button className="headphone">HEADPHONES</button>
          <button className="earphone">EARPHONES</button>
          <button className="acc">ACCESSORIES</button>
          <button className="collabo">COLLABORATIONS</button>
          <button className="blog">BLOG</button>
        </div>
        <div className="login">로그인쇼핑카트</div>
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
