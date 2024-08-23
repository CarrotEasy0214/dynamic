import { useCallback, useState } from "react";
import { useSwiper } from "swiper/react";
// import Play from "./Play";
// import Pause from "./Pause";
import Play from "../img/svg/playbtn.svg";
import Pause from "../img/svg/pausebtn.svg";

const Handler = (): JSX.Element => {
  const swiper = useSwiper();
  // const [play, setPlay] = useState([{ Pause }, { Play }]);
  const [runinng, setRunning] = useState<string>("");
  const autoPlayer = useCallback(() => {
    swiper.autoplay.paused ? swiper.autoplay.resume() : swiper.autoplay.pause();
    setRunning(swiper.autoplay.paused ? "" : "");
  }, [swiper.autoplay]);
  return (
    <div className="float-right relative top-[-5rem] z-30 pr-5">
      <div onClick={autoPlayer} className="w-10">
        <img src={Play} alt="" className="outline-white" onClick={() => {}} />
        {runinng}
      </div>
    </div>
  );
};

export default Handler;
