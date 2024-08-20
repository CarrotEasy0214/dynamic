import product1 from "../img/feature/MW09.png";
import product2 from "../img/feature/MW75.png";
import product3 from "../img/feature/MH40.png";
import product4 from "../img/feature/MG20.png";

const ProductPage = () => {
  return (
    <div>
      <div className="featured">
        <div className="list">Featured Products</div>
        <div className="products">
          <div className="product">
            <img src={product1} alt="" />
            <div className="listName">
              <div className="d-flex goods">
                <div className="goods-name">MW09</div>
                <div className="goods-price">From $349.00</div>
              </div>
              <div className="goods-detail">Active Noise-Cancelling True Wireless Earphones</div>
              <div></div>
            </div>
          </div>
          <div className="product">
            <img src={product2} alt="" />
            <div className="listName">
              <div className="d-flex goods">
                <div className="goods-name">MW75</div>
                <div className="goods-price">$599.00</div>
              </div>
              <div className="goods-detail">Active Noise-Cancelling Wireless Headphones</div>
              <div></div>
            </div>
          </div>
          <div className="product">
            <img src={product3} alt="" />
            <div className="listName">
              <div className="d-flex goods">
                <div className="goods-name">MH40 wireless</div>
                <div className="goods-price">$399.00</div>
              </div>
              <div className="goods-detail">Active Noise-Cancelling Wireless Headphones</div>
              <div></div>
            </div>
          </div>
          <div className="product">
            <img src={product4} alt="" />
            <div className="listName">
              <div className="d-flex goods">
                <div className="goods-name">MG20</div>
                <div className="goods-price">$449.00</div>
              </div>
              <div className="goods-detail">Wireless Gaming Headphones</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
