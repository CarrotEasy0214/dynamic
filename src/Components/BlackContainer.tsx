import insta from "../img/svg/insta.svg";
import facebook from "../img/svg/facebook.svg";
import youtube from "../img/svg/youtube.svg";
import spotify from "../img/svg/spotify.svg";
import twitter from "../img/svg/twitter.svg";

const BlackContainer = () => {
  return (
    <div className="black-container">
      <div className="sign-container">
        <div className="sign">
          <div className="offers">
            Sign up for early access, news and exclusive offers
          </div>
          <input type="text" placeholder="Your email" className="email" />
          <div className="check d-flex">
            <input type="checkbox" name="" id="" className="checking" />
            <div className="checking-detail">
              By checking this box you are agreeing to receive brand updates,
              promotions and content from Master & Dynamic.
            </div>
          </div>
          <button className="email-submit">SUBMIT</button>
        </div>
        <div className="d-flex help">
          <div>
            <div className="help-title">Help & Info</div>
            <div className="help-menu">Product Comparisons</div>
            <div className="help-menu">Product Support</div>
            <div className="help-menu">Shopping Info</div>
          </div>
          <div>
            <div className="help-title">About</div>
            <div className="help-menu">About Us</div>
            <div className="help-menu">News</div>
            <div className="help-menu">Contact Us</div>
          </div>
          <div>
            <div className="help-title">Gifting</div>
            <div className="help-menu">Corporate Gifting</div>
            <div className="help-menu">Digital Gift Card</div>
          </div>
        </div>
      </div>
      <div className="d-flex site-detail">
        <div>
          <div className="d-flex site-footer">
            <div>Do Not Sell / Share</div>
            <div>Notice At Collection</div>
            <div>Web Accessibility</div>
            <div>Personal Data Requests</div>
            <div>Privacy</div>
            <div>Terms</div>
          </div>
          <div className="line"></div>
          <div>
            <p>
              Designed and developed in New York City. P.O Box 20257 Greeley
              Square Station 4 East 27th street New York, NY 10001
            </p>
            <p>© 2024. All Rights Reserved.</p>
          </div>
        </div>
        <div className="d-flex site-link">
          <div>
            <img src={insta} alt="" className="site-svg" />
          </div>
          <div>
            <img src={facebook} alt="" className="site-svg" />
          </div>
          <div>
            <img src={youtube} alt="" className="site-svg" />
          </div>
          <div>
            <img src={spotify} alt="" className="site-svg" />
          </div>
          <div>
            <img src={twitter} alt="" className="site-svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackContainer;
