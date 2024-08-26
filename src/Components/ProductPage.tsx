import product1 from "../img/feature/MW09.png";
import product2 from "../img/feature/MW75.png";
import product3 from "../img/feature/MH40.png";
import product4 from "../img/feature/MG20.png";

const ProductPage = () => {
  return (
    <div>
      <div className="px-10">
        <div className="text-4xl text-slate-600 font-bold">Featured Products</div>
        <div className="flex">
          <div className="flex-1">
            <img src={product1} alt="" />
            <div className="text-slate-600">
              <div className="flex justify-between pt-[10%] px-[15%] text-slate-600">
                <div className="text-xl font-bold">MW09</div>
                <div className="flex items-end justify-center font-bold">From $349.00</div>
              </div>
              <div className="px-[15%] pt-[2%]">Active Noise-Cancelling True Wireless Earphones</div>
              <div></div>
            </div>
          </div>
          <div className="flex-1">
            <img src={product2} alt="" />
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
            <img src={product3} alt="" />
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
            <img src={product4} alt="" />
            <div className="text-slate-600">
              <div className="flex justify-between pt-[10%] px-[15%] text-slate-600">
                <div className="text-xl font-bold">MG20</div>
                <div className="flex items-end justify-center font-bold">$449.00</div>
              </div>
              <div className="px-[15%] pt-[2%] ">Wireless Gaming Headphones</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
