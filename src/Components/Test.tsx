// import product1 from "../img/feature/MW09.png";
// import product2 from "../img/feature/MW75.png";
// import product3 from "../img/feature/MH401.webp";
// import product4 from "../img/feature/MG20.png";

const Item = ({ title, content, price }: { title: string | number; content: string; price: string | number }) => {
  return (
    <div>
      <div className="text-slate-600">
        <div className="flex justify-between pt-[10%] px-[15%] text-slate-600">
          <div className="text-xl font-bold">{title}</div>
          <div className="flex items-end justify-center font-bold">{price}</div>
        </div>
        <div className="px-[15%] pt-[2%]">{content}</div>
      </div>
    </div>
  );
};

const Items = [
  {
    ItemData: { title: "MW09", content: "Active Noise-Cancelling True Wireless Earphones", price: "From $ 349.00" },
  },
  {
    ItemData: { title: "MW11", content: "Active Noise-Cancelling True Wireless Earphones1", price: "From $ 448.00" },
  },
  {
    ItemData: { title: "MW12", content: "Active Noise-Cancelling True Wireless Earphones2", price: "From $ 549.00" },
  },
  {
    ItemData: { title: "MW13", content: "Active Noise-Cancelling True Wireless Earphones3", price: "From $ 649.00" },
  },
];

const Test = (): JSX.Element => {
  return (
    <div>
      {Items.map((props) => (
        <Item title={props.ItemData.title} content={props.ItemData.content} price={props.ItemData.price} />
      ))}
    </div>
  );
};
export default Test;
