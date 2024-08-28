// import product1 from "../img/feature/MW09.png";
// import product2 from "../img/feature/MW75.png";
// import product3 from "../img/feature/MH401.webp";
// import product4 from "../img/feature/MG20.png";
// import product11 from "../img/product/MW09/MW09_Side.png";
// import product22 from "../img/product/MW75/MW75_Side.png";
// import product33 from "../img/product/MH40/MH40_Side.png";
// import product44 from "../img/product/MW75/MW75_Side.png";
// import { useState } from "react";
import Product from "./Product";

const ProductPage = () => {
  // const [isListHover, setIsListHover] = useState(false);
  // type ProductArr = Array<{
  //   category: string;
  //   id: number;
  //   cateImg: string;
  // }>;

  interface IProps {
    productArr: [];
  }
  return (
    <div className="px-28 mb-5">
      <div className="px-10">
        <div className="text-4xl text-slate-600 font-bold">Featured Products</div>
        <div className="flex">
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          {/* <div className="flex-1">
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
          </div> */}
          {/* <div className="flex-1">
            <img src={isListHover ? product22 : product2} />
            <div className="text-slate-600">
              <div className="flex justify-between pt-[10%] px-[15%] text-slate-600">
                <div className="text-xl font-bold">MW75</div>
                <div className="flex items-end justify-center font-bold">$599.00</div>
              </div>
              <div className="px-[15%] pt-[2%] ">Active Noise-Cancelling Wireless Headphones</div>
              <div></div>
            </div>
          </div>
          <div className="flex-1">
            <img src={isListHover ? product33 : product3} />
            <div className="text-slate-600">
              <div className="flex justify-between pt-[10%] px-[15%] text-slate-600">
                <div className="text-xl font-bold">MH40 wireless</div>
                <div className="flex items-end justify-center font-bold">$399.00</div>
              </div>
              <div className="px-[15%] pt-[2%] w-[80%]">Wireless Over-Ear Headphones</div>
              <div></div>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <img
                src={isListHover ? product44 : product4}
                onMouseOver={() => setIsListHover(true)}
                onMouseOut={() => setIsListHover(false)}
              />
            </div>
            <div className="text-slate-600">
              <div className="flex justify-between pt-[10%] px-[15%] text-slate-600">
                <div className="text-xl font-bold">MG20</div>
                <div className="flex items-end justify-center font-bold">$449.00</div>
              </div>
              <div className="px-[15%] pt-[2%] ">Wireless Gaming Headphones</div>
              <div></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
