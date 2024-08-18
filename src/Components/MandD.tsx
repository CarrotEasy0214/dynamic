import phone from "../img/main/phone.jpg";
import "../App.css";

const MandD = () => {
  return (
    <div>
      <div className="MandD">
        <div className="MandD-Container">
          <div className="Connect">
            Get The Most Out Of Your Sound with M&D Connect
          </div>
          <div className="change">
            The M&D Connect App lets you download firmware updates, adjust
            settings, and change default preferences for your headset, all from
            your mobile device
          </div>
          <div className="More-btn">Learn More</div>
        </div>
        <div className="phone-img">
          <img src={phone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MandD;
