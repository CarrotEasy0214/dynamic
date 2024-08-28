import product1 from "../img/feature/MW09.png";
// import product2 from "../img/feature/MW75.png";
// import product3 from "../img/feature/MH401.webp";
// import product4 from "../img/feature/MG20.png";
import product11 from "../img/product/MW09/MW09_Side.png";
// import product22 from "../img/product/MW75/MW75_Side.png";
// import product33 from "../img/product/MH40/MH40_Side.png";
// import product44 from "../img/product/MW75/MW75_Side.png";
import { useState } from "react";

const Product = () => {
  const [isListHover, setIsListHover] = useState(false);
  return (
    <div className="flex-1">
      <img
        src={isListHover ? product11 : product1}
        onMouseOver={() => setIsListHover(true)}
        onMouseOut={() => setIsListHover(false)}
      />
      <div className="text-slate-600">
        <div className="flex justify-between pt-[10%] px-[15%] text-slate-600">
          <div className="text-xl font-bold">MW09</div>
          <div className="flex items-end justify-center font-bold">From $349.00</div>
        </div>
        <div className="px-[15%] pt-[2%]">Active Noise-Cancelling True Wireless Earphones</div>
        <div></div>
      </div>
    </div>
  );
};

export default Product;
