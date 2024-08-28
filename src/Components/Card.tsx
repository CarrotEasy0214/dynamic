import card1 from "../img/feature/MH40card.jpg";
import card2 from "../img/feature/MW09card.jpg";
import card3 from "../img/feature/MW75card.jpg";

const Card = () => {
  return (
    <div>
      <div className="pb-[2%] px-[4%]">
        <div className="flex justify-between gap-[1.5%] pb-[1.5%] max-w-[100%]">
          <div className="cursor-pointer relative">
            <img src={card1} alt="" className="w-[100%] h-[100%]" />
            <div className="absolute bottom-[8%] left-[7%]">
              <div className="text-white w-28 mb-2">MH40 Wireless</div>
              <div className="border-b-[0.5px] border-solid border-white w-[18%] mb-[2.5%]"></div>
              <div className="text-white text-2xl font-semibold mb-[2.5%] w-[95%]">
                Up to 30-hours of continuous playtime, unlimited style
              </div>
              <div className="bg-white w-[9.786875rem] leading-[3.375rem] text-center font-semibold">LEARN MORE</div>
            </div>
          </div>
          <div className="cursor-pointer relative">
            <img src={card2} alt="" className="w-[100%] h-[100%]" />
            <div className="absolute bottom-[8%] left-[7%]">
              <div className="text-white w-28 mb-2">MH40 Wireless</div>
              <div className="border-b-[0.5px] border-solid border-white w-[18%] mb-[2.5%]"></div>
              <div className="text-white text-2xl font-semibold mb-[2.5%] w-[95%]">
                Up to 30-hours of continuous playtime, unlimited style
              </div>
              <div className="bg-white w-[9.786875rem] leading-[3.375rem] text-center font-semibold">LEARN MORE</div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer relative">
          <img src={card3} alt="" className="w-[100%] h-[100%]" />
          <div className="absolute bottom-[8%] left-[7%]">
            <div className="text-white w-28 mb-2">MH40 Wireless</div>
            <div className="border-b-[0.5px] border-solid border-white w-[18%] mb-[2.5%]"></div>
            <div className="text-white text-2xl font-semibold mb-[2.5%] w-[95%]">
              Up to 30-hours of continuous playtime, unlimited style
            </div>
            <div className="bg-white w-[9.786875rem] leading-[3.375rem] text-center font-semibold">LEARN MORE</div>
          </div>
        </div>
        {/* <div className="flex justify-between gap-[2%] pb-[2%] max-w-[100%]">
          <div className="bg-[url('./img/feature/MH40card.jpg')] w-[100%] h-[50rem] bg-contain bg-no-repeat">
            <div className="text-white">
              <div>MH40 Wireless</div>
              <div>Up to 30-hours of continuous playtime, unlimited style</div>
              <div>LEARN MORE</div>
            </div>
          </div>
          <div className="bg-[url('./img/feature/MW09card.jpg')] w-[100%] h-[100%] bg-cover bg-no-repeat bg-center max-h-[100%] object-fill">
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
        </div> */}
      </div>
    </div>
  );
};

export default Card;
