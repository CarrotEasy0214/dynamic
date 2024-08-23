import { useCallback, useState } from "react";
import { useSwiper } from "swiper/react";
import Play from "./Play";

const Handler = (): JSX.Element => {
  const swiper = useSwiper();
  const [runinng, setRunning] = useState<string>("");
  const autoPlayer = useCallback(() => {
    swiper.autoplay.paused ? swiper.autoplay.resume() : swiper.autoplay.pause();
    setRunning(swiper.autoplay.paused ? "" : "");
  }, [swiper.autoplay]);
  return (
    <div className="float-right relative top-[-5rem] z-30 pr-5">
      <div onClick={autoPlayer} className="w-10">
        <Play></Play>
        {runinng}
      </div>
    </div>
  );
};

export default Handler;
