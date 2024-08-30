import card1 from "../img/feature/MH40card.jpg";
import card2 from "../img/feature/MW09card.jpg";
import card3 from "../img/feature/MW75card.jpg";

import card1Mobile from "../img/feature/Card1_Mobile.webp";
import card2Mobile from "../img/feature/Card2_Mobile.webp";
import card3Mobile from "../img/feature/Card3_Mobile.webp";

const CardItems = [
  {
    CardItemData: {
      title: "MH40 Wireless",
      content: "Up to 30-hours of continuous playtime, unlimited style",
      image: card1,
      mImage: card1Mobile,
    },
  },
  {
    CardItemData: {
      title: "MW09",
      content: "Solid construction, sleek finish",
      image: card2,
      mImage: card2Mobile,
    },
  },
  {
    CardItemData: {
      title: "MW75",
      content: "Perfect sound,perfect silence",
      image: card3,
      mImage: card3Mobile,
    },
  },
];

const CardItem = ({
  title,
  content,
  image,
  mImage,
}: {
  title: string | number;
  content: string;
  image: string | undefined;
  mImage: string | undefined;
}) => {
  return (
    <div className="cursor-pointer relative">
      <img src={image} alt="" className="w-[100%] h-[100%] hidden ms:block" />
      <img src={mImage} alt="" className="w-[100%] h-[100%] block ms:hidden" />
      <div className="absolute bottom-[8%] left-[7%]">
        <div className="text-white w-30 mb-2 lg:text-base text-sm font-bold">{title}</div>
        <div className="border-b-[0.5px] border-solid border-white w-[18%] mb-[2.5%]"></div>
        <div className="text-white lg:text-xl text-lg font-semibold mb-[2.5%] w-[95%]">{content}</div>
        <div className="bg-white w-[9.786875rem] leading-[3.375rem] text-center font-semibold text-[#4c4c4c]">
          LEARN MORE
        </div>
      </div>
    </div>
  );
};

// const CardComp = () => {
//   return;
// };

export default CardItem;
