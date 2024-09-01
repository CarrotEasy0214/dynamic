import product1 from "../img/feature/MW09.png";
import product2 from "../img/feature/MW75.png";
import product3 from "../img/feature/MH401.webp";
import product4 from "../img/feature/MG20.png";
import products1 from "../img/product/MW09/MW09_Side.png";
import products2 from "../img/product/MW75/MW75_Side.png";
import products3 from "../img/product/MH40/MH40_Side.png";
import products4 from "../img/product/MW75/MW75_Side.png";
import MW09Black from "../img/color/MW09BK1-Swatch_V2.png";
import MW09Blue from "../img/color/MW09BL4-Swatch_V2.png";
import MW09G3 from "../img/color/MW09G3-Swatch_V2.png";
import MW09GD from "../img/color/MW09GD10-Swatch_V2.png";
import MW09GR from "../img/color/MW09GR9-Swatch_V2.png";
import MW09S5 from "../img/color/MW09S5-Swatch_V2.png";

import { useState } from "react";

const Item = ({
  title,
  content,
  price,
  image,
  hImage,
  color,
}: {
  title: string | number;
  content: string;
  price: string | number;
  image: string | undefined;
  hImage: string | undefined;
  color: string[] | undefined;
}): JSX.Element => {
  const [isListHover, setIsListHover] = useState(false);
  return (
    <div className="flex-1">
      <div className="">
        <img
          src={isListHover ? hImage : image}
          alt=""
          onMouseOver={() => setIsListHover(true)}
          onMouseOut={() => setIsListHover(false)}
          className=""
        />
        <div className="text-slate-600">
          <div className="flex justify-between pt-[10%] px-[15%] text-slate-600">
            <div className="text-xl font-bold">{title}</div>
            <div className="flex items-end justify-center font-bold">
              {price}
            </div>
          </div>
          <div className="px-[15%] pt-[2%]">{content}</div>
          <div className="w-5 h-5">{color}</div>
        </div>
      </div>
    </div>
  );
};

const Items = [
  {
    ItemData: {
      title: "MW09",
      content: "Active Noise-Cancelling True Wireless Earphones",
      price: "From $ 349.00",
      image: product1,
      hImage: products1,
      color: [MW09Black, MW09Blue, MW09G3, MW09GD, MW09GR, MW09S5],
    },
  },
  {
    ItemData: {
      title: "MW11",
      content: "Active Noise-Cancelling True Wireless Earphones1",
      price: "From $ 448.00",
      image: product2,
      hImage: products2,
      color: [MW09Black, MW09Blue, MW09G3, MW09GD, MW09GR, MW09S5],
    },
  },
  {
    ItemData: {
      title: "MW12",
      content: "Active Noise-Cancelling True Wireless Earphones2",
      price: "From $ 549.00",
      image: product3,
      hImage: products3,
      color: [MW09Black, MW09Blue, MW09G3, MW09GD, MW09GR, MW09S5],
    },
  },
  {
    ItemData: {
      title: "MW13",
      content: "Active Noise-Cancelling True Wireless Earphones3",
      price: "From $ 649.00",
      image: product4,
      hImage: products4,
      color: [MW09Black, MW09Blue, MW09G3, MW09GD, MW09GR, MW09S5],
    },
  },
];

const Test = (): JSX.Element => {
  return (
    <div className="flex">
      {Items.map((props) => (
        <Item
          title={props.ItemData.title}
          content={props.ItemData.content}
          price={props.ItemData.price}
          image={props.ItemData.image}
          hImage={props.ItemData.hImage}
          color={props.ItemData.color}
        />
      ))}
    </div>
  );
};
export default Test;
