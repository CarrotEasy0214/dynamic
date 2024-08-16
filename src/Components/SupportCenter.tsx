import earphone from "../img/main/earphone.jpg";

const SupportCenter = () => {
  return (
    <div>
      <div className="support">
        <div className="earphone">
          <img src={earphone} alt="" />
        </div>
        <div className="support-center">
          <div>Need support? We're here to assist you every step of the way</div>
          <div>Access product support and frequently asked questions in our Support Center</div>
          <button>Support Center</button>
        </div>
      </div>
    </div>
  );
};

export default SupportCenter;
