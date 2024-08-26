import React, { useCallback, useState } from "react";
import { useSwiper } from "swiper/react";
import PlayBtn from "../img/svg/playbtn.svg";
import PauseBtn from "../img/svg/pausebtn.svg";

const Handler = (): JSX.Element => {
  const swiper = useSwiper();
  const [play, setPlay] = useState(PauseBtn);
  const toggleImage = () => {
    setPlay(play === PauseBtn ? PlayBtn : PauseBtn);
  };
  const autoPlayer = useCallback(() => {
    swiper.autoplay.paused ? swiper.autoplay.resume() : swiper.autoplay.pause();
  }, [swiper.autoplay]);
  return (
    <div className="float-right relative top-[-4.5rem] z-40 pr-5">
      <div onClick={autoPlayer} className="w-9 h-9">
        <img
          src={play}
          alt=""
          className="outline-white cursor-pointer"
          onClick={toggleImage}
        />
      </div>
    </div>
  );
};

export default Handler;
