import earphone from "../img/main/earphone.jpg";

const SupportCenter = () => {
  return (
    <div className="support-container">
      <div className="support">
        <div className="earphone">
          <img src={earphone} alt="" />
        </div>
        <div className="support-center">
          <div className="support-title">
            Need support? We're here to assist you every step of the way
          </div>
          <div className="support-detail">
            Access product support and frequently asked questions in our Support
            Center
          </div>
          <button className="support-btn">Support Center</button>
        </div>
      </div>
    </div>
  );
};

export default SupportCenter;
