const ShippingDetail = () => {
  return (
    <div>
      <div className="free">
        <div className="shipping">
          <div className="shipping-title">Free Premium Shipping</div>
          <div className="detail">
            Free ground shipping on orders of $99 or more in the U.S. and $250
            in Canada
          </div>
        </div>
        <div className="returns shipping">
          <div className="shipping-title">Free Returns in 14 Days</div>
          <div className="detail">
            We offer a generous 14-day return policy, allowing you to shop with
            confidence
          </div>
        </div>
        <div className="protection shipping">
          <div className="shipping-title">Product Protection</div>
          <div className="detail">
            Rest easy with our manufacturer warranty, ensuring that your product
            is protected against any manufacturing defects or issues
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingDetail;
