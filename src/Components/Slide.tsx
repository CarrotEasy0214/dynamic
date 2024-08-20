import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slide1 from "../img/slide/slide1.jpg";
import slide2 from "../img/slide/slide2.jpg";
import slide3 from "../img/slide/slide3.jpg";
import slide4 from "../img/slide/slide4.jpg";

const Slide = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
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
    </Swiper>
  );
};

export default Slide;
