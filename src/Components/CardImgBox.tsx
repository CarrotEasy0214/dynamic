const CardImageBox = ({ cardImg }: any): JSX.Element => {
  return (
    <>
      <img src={cardImg} alt="" className="w-[100%] h-[100%] hidden ms:block" />
      <img src={cardImg} alt="" className="w-[100%] h-[100%] block ms:hidden" />
    </>
  );
};

const CardImageBoxes = ({ cardImg }: any): JSX.Element => {
  return (
    <>
      <img src={cardImg} alt="" className="w-[100%] h-[100%] hidden ms:block" />
      <img src={cardImg} alt="" className="w-[100%] h-[100%] block ms:hidden" />
    </>
  );
};

export default CardImageBoxes;
