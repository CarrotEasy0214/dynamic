// import card1 from "../img/feature/MH40card.jpg";
// import card2 from "../img/feature/MW09card.jpg";
// import card3 from "../img/feature/MW75card.jpg";

const Card = () => {
  return (
    <div>
      <div className="pt-[5%] pb-[2%] px-[4%]">
        {/* <div className="flex justify-between gap-[2%] pb-[2%] max-w-[100%]">
          <div className="cursor-pointer">
            <img src={card1} alt="" />
            <div>
              <div>MH40 Wireless</div>
              <div>Up to 30-hours of continuous playtime, unlimited style</div>
              <div>LEARN MORE</div>
            </div>
          </div>
          <div className="cursor-pointer">
            <img src={card2} alt="" />
            <div>
              <div>MH40 Wireless</div>
              <div>Up to 30-hours of continuous playtime, unlimited style</div>
              <div>LEARN MORE</div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer">
          <img src={card3} alt="" />
          <div>
            <div>MH40 Wireless</div>
            <div>Up to 30-hours of continuous playtime, unlimited style</div>
            <div>LEARN MORE</div>
          </div>
        </div> */}
        <div className="flex justify-between gap-[2%] pb-[2%] max-w-[100%]">
          <div className="bg-[url('./img/feature/MH40card.jpg')] h-screen w-screen bg-cover bg-no-repeat max-h-[100%] object-fill">
            <div>
              <div>MH40 Wireless</div>
              <div>Up to 30-hours of continuous playtime, unlimited style</div>
              <div>LEARN MORE</div>
            </div>
          </div>
          <div className="bg-[url('./img/feature/MW09card.jpg')] h-screen w-screen bg-cover bg-no-repeat max-h-[100%]">
            <div>
              <div>MH40 Wireless</div>
              <div>Up to 30-hours of continuous playtime, unlimited style</div>
              <div>LEARN MORE</div>
            </div>
          </div>
        </div>
        <div className="bg-[url('./img/feature/MW75card.jpg')] h-screen w-screen bg-cover bg-no-repeat max-w-[100%]">
          <div>
            <div>MH40 Wireless</div>
            <div>Up to 30-hours of continuous playtime, unlimited style</div>
            <div>LEARN MORE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
