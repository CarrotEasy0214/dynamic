import craft1 from "../img/crafts/sound.jpg";
import craft2 from "../img/crafts/materials.jpg";
import craft3 from "../img/crafts/design.jpg";

const CompanyGuide = () => {
  return (
    <div>
      <div className="bg-[#1a1a1a]">
        <div className="my-[1%] px-[5%] py-[5%]">
          <div className="flex justify-between p-[1%]">
            <div className="text-white text-[2.5rem] font-bold w-[30rem]">The Finest Sound and Craftsmanship</div>
            <div className="text-white text-end">
              <p>Introduce yourself to a world of immersive sound and</p>
              <p>unrivalled design, where every detail is thoughtfully</p>
              <p>considered to enhance your listening experience</p>
            </div>
          </div>
          <div className="flex p-[1%] gap-4">
            <div>
              <img src={craft1} alt="" className="  " />
            </div>
            <div>
              <img src={craft2} alt="" />
            </div>
            <div>
              <img src={craft3} alt="" />
            </div>
          </div>
          <div className="flex justify-between text-white p-[1%]">
            <div className="font-semibold">
              <p>We bring an uncompromising approach to the design and</p>
              <p>performance of our products</p>
            </div>
            <div className="w-[8rem] h-[3rem] text-[#4c4c4c] bg-white leading-[3rem] text-center font-semibold">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyGuide;
