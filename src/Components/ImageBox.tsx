const ImageBox = ({ cardImg }: any): JSX.Element => {
  return (
    <div className="w-full flex-1">
      <img src={cardImg} alt="" className="w-full" />
    </div>
  );
};

// const ImageBox = (): JSX.Element => {
//   return <Images cardImg={phone}></Images>;
// };

export default ImageBox;
