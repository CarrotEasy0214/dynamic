import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import slide1 from "../img/slide/slide1.jpg";
import slide2 from "../img/slide/slide2.jpg";
import slide3 from "../img/slide/slide3.jpg";
import slide4 from "../img/slide/slide4.jpg";
import Handler from "./Handler";

const Slide = () => {
  return (
    <Swiper
      // effect={"fade"}
      spaceBetween={30}
      slidesPerView={1}
      direction={"horizontal"}
      loop={true}
      navigation={true}
      pagination={{
        bulletElement: "bullets",
        clickable: true,
      }}
      autoplay={{ delay: 1000, stopOnLastSlide: false }}
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
    >
      <SwiperSlide>
        <img src={slide1} alt="" className="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" className="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" className="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" className="slide" />
      </SwiperSlide>
      <Handler />
    </Swiper>
  );
};

export default Slide;
