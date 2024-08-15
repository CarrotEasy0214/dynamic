import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import slide1 from "./img/slide/slide1.jpg";
import product1 from "./img/feature/MW09.png";
import product2 from "./img/feature/MW75.png";
import product3 from "./img/feature/MH40.png";
import product4 from "./img/feature/MG20.png";
import section1 from "./img/feature/MH40Section.jpg";
import section2 from "./img/feature/MW09Section.jpg";
import section3 from "./img/feature/MW75Section.jpg";
import craft1 from "./img/crafts/sound.jpg";
import craft2 from "./img/crafts/materials.jpg";
import craft3 from "./img/crafts/design.jpg";
import bugatti from "./img/main/bugatti.jpg";
import phone from "./img/main/phone.jpg";
import earphone from "./img/main/earphone.jpg";
import { ReactComponent as Logo } from "./img/svg/logo.svg";
import { ReactComponent as Search } from "./img/svg/search.svg";
import { ReactComponent as Myinfo } from "./img/svg/myinfo.svg";
import { ReactComponent as Cart } from "./img/svg/cart.svg";

// document
//   .getElementsByClassName("headphone")[0]
//   .addEventListener("click", function () {
//     document.getElementsByClassName("items")[0].classList.toggle("d-show");
//   });
// const [isShow, setShow] = useState("false");
// const ToggleClass = () => {
//   setShow(!isShow);
// };

function App() {
  return (
    <div>
      <div className="notice">
        FREE US GROUND SHIPPING ON ORDERS OF $99 OR MORE. FREE GROUND SHIPPING
        IN CANADA ON ORDERS OF $250 OR MORE
      </div>
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
      <div className="media">
        <img className="slide" src={slide1} alt="" />
      </div>
      <div className="featured">
        <div className="list">Featured Products</div>
        <div className="products">
          <div className="product">
            <img src={product1} alt="" />
            <div className="listName">
              <div className="d-flex goods">
                <div className="goods-name">MW09</div>
                <div className="goods-price">From $349.00</div>
              </div>
              <div className="goods-detail">
                Active Noise-Cancelling True Wireless Earphones
              </div>
              <div></div>
            </div>
          </div>
          <div className="product">
            <img src={product2} alt="" />
            <div className="listName">
              <div className="d-flex goods">
                <div className="goods-name">MW75</div>
                <div className="goods-price">$599.00</div>
              </div>
              <div className="goods-detail">
                Active Noise-Cancelling Wireless Headphones
              </div>
              <div></div>
            </div>
          </div>
          <div className="product">
            <img src={product3} alt="" />
            <div className="listName">
              <div className="d-flex goods">
                <div className="goods-name">MH40 wireless</div>
                <div className="goods-price">$399.00</div>
              </div>
              <div className="goods-detail">
                Active Noise-Cancelling Wireless Headphones
              </div>
              <div></div>
            </div>
          </div>
          <div className="product">
            <img src={product4} alt="" />
            <div className="listName">
              <div className="d-flex goods">
                <div className="goods-name">MG20</div>
                <div className="goods-price">$449.00</div>
              </div>
              <div className="goods-detail">Wireless Gaming Headphones</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="productSection">
          <div className="section1">
            <img src={section1} alt="" />
          </div>
          <div className="section2">
            <img src={section2} alt="" />
          </div>
        </div>
        <div className="section3">
          <img src={section3} alt="" />
        </div>
      </div>
      <div className="craft">
        <div className="craft-container">
          <div className="craft-title">
            <div className="craft-name">The Finest Sound and Craftsmanship</div>
            <div className="craft-detail">
              <p>Introduce yourself to a world of immersive sound and</p>
              <p>unrivalled design, where every detail is thoughtfully</p>
              <p>considered to enhance your listening experience</p>
            </div>
          </div>
          <div className="craft-imgs">
            <div>
              <img src={craft1} alt="" />
            </div>
            <div>
              <img src={craft2} alt="" />
            </div>
            <div>
              <img src={craft3} alt="" />
            </div>
          </div>
          <div className="learn">
            <div className="learn-detail">
              <p>We bring an uncompromising approach to the design and</p>
              <p>performance of our products</p>
            </div>
            <div className="learn-btn">Learn More</div>
          </div>
        </div>
      </div>
      <div className="bugatti">
        {/* <img src={bugatti} alt="" /> */}
        <p className="company">BUGATTI</p>
        <p className="company-detail">Uniting Performance And Luxury</p>
        <div className="bugatti-btn">
          <button className="discover">Discover More</button>
        </div>
      </div>
      <div className="MandD">
        <div>
          <div>Get The Most Out Of Your Sound with M&D Connect</div>
          <div>
            The M&D Connect App lets you download firmware updates, adjust
            settings, and change default preferences for your headset, all from
            your mobile device
          </div>
          <div>Learn More</div>
        </div>
        <div>
          <img src={phone} alt="" />
        </div>
      </div>
      <div className="free">
        <div className="shipping">
          <div>Free Premium Shipping</div>
          <div>
            Free ground shipping on orders of $99 or more in the U.S. and $250
            in Canada
          </div>
        </div>
        <div className="returns">
          <div>Free Returns in 14 Days</div>
          <div>
            We offer a generous 14-day return policy, allowing you to shop with
            confidence
          </div>
        </div>
        <div className="protection">
          <div>Product Protection</div>
          <div>
            Rest easy with our manufacturer warranty, ensuring that your product
            is protected against any manufacturing defects or issues
          </div>
        </div>
      </div>
      <div className="support">
        <div className="earphone">
          <img src={earphone} alt="" />
        </div>
        <div className="support-center">
          <div>
            Need support? We're here to assist you every step of the way
          </div>
          <div>
            Access product support and frequently asked questions in our Support
            Center
          </div>
          <button>Support Center</button>
        </div>
      </div>
      <div className="black-container">
        <div className="sign-container">
          <div className="sign">
            <div>Sign up for early access, news and exclusive offers</div>
            <input type="text" />
            <div>
              <input type="checkbox" name="" id="" />
              <div>
                By checking this box you are agreeing to receive brand updates,
                promotions and content from Master & Dynamic.
              </div>
            </div>
            <button>SUBMIT</button>
          </div>
          <div className="d-flex help">
            <div>
              <div>Help & Info</div>
              <div>Product Comparisons</div>
              <div>Product Support</div>
              <div>Shopping Info</div>
            </div>
            <div>
              <div>About</div>
              <div>About Us</div>
              <div>News</div>
              <div>Contact Us</div>
            </div>
            <div>
              <div>Gifting</div>
              <div>Corporate Gifting</div>
              <div>Digital Gift Card</div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <div className="d-flex">
              <div>Do Not Sell / Share</div>
              <div>Notice At Collection</div>
              <div>Web Accessibility</div>
              <div>Personal Data Requests</div>
              <div>Privacy</div>
              <div>Terms</div>
            </div>
            <div>
              <p>
                Designed and developed in New York City. P.O Box 20257 Greeley
                Square Station 4 East 27th street New York, NY 10001
              </p>
              <p>© 2024. All Rights Reserved.</p>
            </div>
          </div>
          <div className="d-flex">
            <div> 인 </div>
            <div> 페 </div>
            <div> 유 </div>
            <div> 스 </div>
            <div> 트 </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
