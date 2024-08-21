import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Handler from "./Handler";

import slide1 from "../img/slide/slide1.jpg";
import slide2 from "../img/slide/slide2.jpg";
import slide3 from "../img/slide/slide3.jpg";
import slide4 from "../img/slide/slide4.jpg";

function Slide2() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        direction={"horizontal"}
        loop={true}
        navigation
        pagination={{
          bulletElement: "bullets",
          clickable: true,
        }}
        autoplay={{ delay: 5000, stopOnLastSlide: false }}
        modules={[Autoplay, Pagination, Navigation]}
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
    </div>
  );
}

export default Slide2;
