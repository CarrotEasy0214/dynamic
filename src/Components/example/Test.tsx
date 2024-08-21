import { useCallback, useState } from "react";

const Test = () => {
  const [toggled, setToggled] = useState(false);

  const toggleMenu1 = useCallback(() => {
    setToggled((prev1) => !prev1);
  }, []);
  return (
    <div className="flex justify-between">
      <div className="md:hidden" onClick={toggleMenu1} aria-expanded={toggled}>
        햄버거
      </div>
      <button className="block md:hidden bg-black text-white">버튼</button>
      <div className="cursor-pointer">대충 로고인것</div>
      <div
        className={`"block md:flex gap-6 text-black" ${
          toggled ? "flex flex-col w-full bg-black text-white absolute top-7 left-0 p-4" : "hidden"
        }`}
      >
        <div className="cursor-pointer font-bold">대충메뉴1</div>
        <div className="cursor-pointer font-bold">대충메뉴2</div>
        <div className="cursor-pointer font-bold">대충메뉴3</div>
      </div>
      <div className="flex gap-4">
        <button className="hidden md:block bg-black text-white">버튼</button>
        <button>버튼1</button>
        <button className="hidden md:block bg-black text-white">버튼2</button>
      </div>
    </div>
  );
};

export default Test;
