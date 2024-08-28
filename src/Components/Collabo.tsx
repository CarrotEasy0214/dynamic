import bugatti from "../img/main/bugatti.jpg";

const Collabo = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center flex-col relative">
        <img src={bugatti} alt="" />
        <div className="absolute top-auto bottom-auto left-[35%] text-center">
          <p className="text-[1.7rem] text-white font-semibold">BUGATTI</p>
          <p className="text-[2.5rem] text-white font-semibold">
            Uniting Performance And Luxury
          </p>
          <div className="flex justify-center mt-[5%]">
            <button className="bg-white cursor-pointer w-[10rem] h-[3.5rem] font-bold text-[#4c4c4c]">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collabo;
