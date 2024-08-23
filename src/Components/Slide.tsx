import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { PaginationOptions } from "swiper/types";
import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper/modules";

import slide1 from "../img/slide/slide1.jpg";
import slide2 from "../img/slide/slide2.jpg";
import slide3 from "../img/slide/slide3.jpg";
import slide4 from "../img/slide/slide4.jpg";
import Handler from "./Handler";

const Slide = () => {
  const pagination = {
    clickable: true,
    bulletClass: "w-3 h-3 rounded-lg bg-slate-500 inline-block relative mr-4 bottom-20",
    bulletActiveClass: "bg-white w-[3rem]",
    renderBullet: function (index: any, className: string) {
      return '<div class="flex justify-end pr-5"><span class="' + className + '"></span><div/ >';
    },
  };

  return (
    <Swiper
      // effect={"fade"}
      spaceBetween={30}
      slidesPerView={1}
      direction={"horizontal"}
      loop={true}
      parallax={true}
      navigation={true}
      pagination={pagination}
      autoplay={{ delay: 1000, stopOnLastSlide: false }}
      modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax]}
    >
      <SwiperSlide>
        <div
          className="absolute top-[75%] left-[8%] text-white xl:text-6xl lg:text-5xl font-bold text-4xl"
          data-swiper-parallax="-300"
        >
          MW09 True Wireless Earphones
        </div>
        <div className="absolute top-[83%] left-[8%] text-white" data-swiper-parallax="-200">
          Our newest active noise-cancelling earphones
        </div>
        <div
          className="absolute top-[89%] left-[8%] bg-white w-[8.5rem] h-[3.5rem] flex justify-center text-sm font-bold cursor-pointer text-center items-center"
          data-swiper-parallax="-100"
        >
          Show Now
        </div>
        <img src={slide1} alt="" className="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="absolute top-[68%] left-[8%] text-white text-6xl font-medium text-start"
          data-swiper-parallax="-300"
        >
          <p>MG20 Wireless Gaming</p>
          <p>Headphones</p>
        </div>
        <div className="absolute top-[83%] left-[8%] text-white" data-swiper-parallax="-200">
          Never Play the Same
        </div>
        <div
          className="absolute top-[89%] left-[8%] bg-white w-[8.5rem] h-[3.5rem] flex justify-center text-sm font-bold cursor-pointer text-center items-center"
          data-swiper-parallax="-100"
        >
          Show Now
        </div>
        <img src={slide2} alt="" className="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="absolute top-[68%] left-[8%] text-white text-6xl font-medium text-start"
          data-swiper-parallax="-300"
        >
          <p>MW75 Active Noise-Cancelling</p>
          <p>Wireless Headphones</p>
        </div>
        <div className="absolute top-[83%] left-[8%] text-white" data-swiper-parallax="-200">
          Perfect silence, perfect sound
        </div>
        <div
          className="absolute top-[89%] left-[8%] bg-white w-[8.5rem] h-[3.5rem] flex justify-center text-sm font-bold cursor-pointer text-center items-center"
          data-swiper-parallax="-100"
        >
          Show Now
        </div>
        <img src={slide3} alt="" className="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="absolute top-[75%] left-[8%] text-white text-5xl font-bold" data-swiper-parallax="-300">
          MH40 Wireless Headphones
        </div>
        <div className="absolute top-[83%] left-[8%] text-white" data-swiper-parallax="-200">
          Iconic design and brilliant acoustics
        </div>
        <div
          className="absolute top-[89%] left-[8%] bg-white w-[8.5rem] h-[3.5rem] flex justify-center text-sm font-bold cursor-pointer text-center items-center"
          data-swiper-parallax="-100"
        >
          Show Now
        </div>
        <img src={slide4} alt="" className="slide" />
      </SwiperSlide>
      <Handler />
    </Swiper>
  );
};

export default Slide;
