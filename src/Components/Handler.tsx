import { useCallback, useState } from "react";
import { useSwiper } from "swiper/react";
// import Play from "./Play";
// import Pause from "./Pause";
import PlayBtn from "../img/svg/playbtn.svg";
import PauseBtn from "../img/svg/pausebtn.svg";

const Handler = (): JSX.Element => {
  const swiper = useSwiper();
  const [play, setPlay] = useState(PauseBtn);
  const toggleImage = () => {
    setPlay(play === PauseBtn ? PlayBtn : PauseBtn);
  };
  const [runinng, setRunning] = useState("");
  const autoPlayer = useCallback(() => {
    swiper.autoplay.paused ? swiper.autoplay.resume() : swiper.autoplay.pause();
    setRunning(swiper.autoplay.paused ? "" : "");
  }, [swiper.autoplay]);
  return (
    <div className="float-right relative top-[-4.5rem] z-40 pr-5">
      <div onClick={autoPlayer} className="w-10 h-10">
        <img
          src={play}
          alt=""
          className="outline-white"
          onClick={toggleImage}
        />
        {runinng}
      </div>
    </div>
  );
};

export default Handler;
