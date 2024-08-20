import card1 from "../img/feature/MH40card.jpg";
import card2 from "../img/feature/MW09card.jpg";
import card3 from "../img/feature/MW75card.jpg";

const Card = () => {
  return (
    <div>
      <div className="card">
        <div className="productcard">
          <div className="card1">
            <img src={card1} alt="" />
          </div>
          <div className="card2">
            <img src={card2} alt="" />
          </div>
        </div>
        <div className="card3">
          <img src={card3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
