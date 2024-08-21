import { useCallback, useState } from "react";
import { useSwiper } from "swiper/react";

const Handler = (): JSX.Element => {
  const swiper = useSwiper();
  const [runinng, setRunning] = useState<string>("멈춤");
  const autoPlayer = useCallback(() => {
    swiper.autoplay.paused ? swiper.autoplay.resume() : swiper.autoplay.pause();
    setRunning(swiper.autoplay.paused ? "시작" : "멈춤");
  }, [swiper.autoplay]);
  return (
    <div className="flex justify-end relative top-[-2rem] z-50 pr-5">
      <div
        onClick={autoPlayer}
        className="w-10 bg-white text-black text-center"
      >
        {runinng}
      </div>
    </div>
  );
};

export default Handler;
