import phone from "../img/main/phone.jpg";
import MandDContents from "./MandDContents";
import ImageBox from "./ImageBox";

const MandD = () => {
  return (
    <div>
      <div className="flex pl-[8%] pr-[3%] py-[1%] w-[100%]">
        <MandDContents></MandDContents>
        <ImageBox cardImg={phone}></ImageBox>
      </div>
    </div>
  );
};

export default MandD;
