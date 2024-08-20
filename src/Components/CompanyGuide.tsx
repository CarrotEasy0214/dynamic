import craft1 from "../img/crafts/sound.jpg";
import craft2 from "../img/crafts/materials.jpg";
import craft3 from "../img/crafts/design.jpg";

const CompanyGuide = () => {
  return (
    <div>
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
    </div>
  );
};

export default CompanyGuide;
