import React from "react";
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

function App() {
  return (
    <div>
      <div className="notice">
        FREE US GROUND SHIPPING ON ORDERS OF $99 OR MORE. FREE GROUND SHIPPING IN CANADA ON ORDERS OF $250 OR MORE
      </div>
      <div className="navbar">
        <div className="logo">MASTER & DYNAMIC</div>
        <div className="menu">메뉴</div>
        <div className="login">로그인쇼핑카트</div>
      </div>
      <div className="media">
        <img className="slide" src={slide1} alt="" />
      </div>
      <div className="featured">
        <div className="list">Featured Products</div>
        <div className="products">
          <div className="product">
            <img src={product1} alt="" />
            <div className="listName">MW09</div>
          </div>
          <div className="product">
            <img src={product2} alt="" />
            <div className="listName">MW75</div>
          </div>
          <div className="product">
            <img src={product3} alt="" />
            <div className="listName">MH40 wireless</div>
          </div>
          <div className="product">
            <img src={product4} alt="" />
            <div className="listName">MG20</div>
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
        <img src={bugatti} alt="" />
      </div>
      <div className="MandD">
        <div>
          <div>Get The Most Out Of Your Sound with M&D Connect</div>
          <div>
            The M&D Connect App lets you download firmware updates, adjust settings, and change default preferences for
            your headset, all from your mobile device
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
          <div>Free ground shipping on orders of $99 or more in the U.S. and $250 in Canada</div>
        </div>
        <div className="returns">
          <div>Free Returns in 14 Days</div>
          <div>We offer a generous 14-day return policy, allowing you to shop with confidence</div>
        </div>
        <div className="protection">
          <div>Product Protection</div>
          <div>
            Rest easy with our manufacturer warranty, ensuring that your product is protected against any manufacturing
            defects or issues
          </div>
        </div>
      </div>
      <div className="support">
        <div className="earphone">
          <img src={earphone} alt="" />
        </div>
        <div className="support-center">
          <div>Need support? We're here to assist you every step of the way</div>
          <div>Access product support and frequently asked questions in our Support Center</div>
          <button>Support Center</button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
