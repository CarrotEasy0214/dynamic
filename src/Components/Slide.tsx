import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import slide1 from "../img/slide/slide1.jpg";
import slide2 from "../img/slide/slide2.jpg";
import slide3 from "../img/slide/slide3.jpg";
import slide4 from "../img/slide/slide4.jpg";
import "swiper/css";

const Slide = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper: SwiperType) => console.log(swiper)}
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
      ...
    </Swiper>
  );
};

// import slide1 from "../img/slide/slide1.jpg";

// const Slide = () => {
//   return (
//     <div>
//       <div className="media">
//         <img className="slide" src={slide1} alt="" />
//       </div>
//     </div>
//   );
// };

export default Slide;
