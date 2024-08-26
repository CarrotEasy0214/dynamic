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

// import { useState } from "react";
import MobileImg1 from "../img/slide/MW09_Homepage_Mobile.webp";
import MobileImg2 from "../img/slide/MG20_Mobile.webp";
import MobileImg3 from "../img/slide/MG75_Mobile.webp";
import MobileImg4 from "../img/slide/MH40W_Mobile.webp";

const Slide = () => {
  const pagination = {
    // el: ".swiper-pagination",
    clickable: true,
    bulletClass: "w-2 h-2 rounded-lg bg-slate-300 inline-block relative mr-4 bottom-20 cursor-pointer z-50",
    bulletActiveClass: "!bg-white w-5",
    horizontalClass: "w-auto",
    renderBullet: function (index: any, className: string) {
      return '<div class="flex justify-end pr-4"><span class="' + className + '"></span><div/ >';
    },
  };

  return (
    <Swiper
      // effect={"fade"}
      navigation={true}
      allowTouchMove={false}
      spaceBetween={30}
      slidesPerView={1}
      direction={"horizontal"}
      loop={true}
      parallax={true}
      pagination={pagination}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: false,
        disableOnInteraction: false,
        stopOnLastSlide: true,
      }}
      modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax]}
    >
      <SwiperSlide>
        <div className="absolute bottom-[8%] left-[4%] ms:bottom-[7%] w-[90%]">
          <div
            className="text-white xl:text-6xl lg:text-5xl font-bold text-4xl pb-5 text-start w-[90%]"
            data-swiper-parallax="-300"
          >
            MW09 True Wireless Earphones
          </div>
          <div className="text-white text-start pb-5 w-[100%]" data-swiper-parallax="-200">
            Our newest active noise-cancelling earphones
          </div>
          <div
            className="bg-white w-[8.5rem] h-[3.5rem] flex justify-center text-sm font-bold cursor-pointer text-center items-center"
            data-swiper-parallax="-100"
          >
            Show Now
          </div>
        </div>
        <picture>
          <source srcSet={MobileImg1} type="image/webp" media="(max-width: 700px)" />
          <img src={slide1} alt="" className="block" />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <div className="absolute bottom-[8%] ms:bottom-[8.5%] left-[2.5%] w-[80%]">
          <div
            className="text-white xl:text-6xl lg:text-5xl text-4xl font-bold text-start pb-5"
            data-swiper-parallax="-300"
          >
            MG20 Wireless Gaming Headphones
          </div>
          <div className="text-white text-start pb-5 w-[80%]" data-swiper-parallax="-200">
            Never Play the Same
          </div>
          <div
            className="bg-white w-[8.5rem] h-[3.5rem] flex justify-center text-sm font-bold cursor-pointer text-center items-center"
            data-swiper-parallax="-100"
          >
            Show Now
          </div>
        </div>
        <picture>
          <source srcSet={MobileImg2} type="image/webp" media="(max-width: 700px)" />
          <img src={slide2} alt="" className="block" />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <div className="absolute bottom-[8%] ms:bottom-[7%] left-[4%] w-[90%]">
          <div
            className="text-white xl:text-6xl lg:text-5xl text-4xl font-bold text-start pb-5"
            data-swiper-parallax="-300"
          >
            MW75 Active Noise-Cancelling Wireless Headphones
          </div>
          <div className="text-white text-start pb-5 w-[90%]" data-swiper-parallax="-200">
            Perfect silence, perfect sound
          </div>
          <div
            className="bg-white w-[8.5rem] h-[3.5rem] flex justify-center text-sm font-bold cursor-pointer text-center items-center"
            data-swiper-parallax="-100"
          >
            Show Now
          </div>
        </div>
        <picture>
          <source srcSet={MobileImg3} type="image/webp" media="(max-width: 700px)" />
          <img src={slide3} alt="" className="block" />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <div className="absolute bottom-[8%] ms:bottom-[7%] left-[5%] w-[100%]">
          <div
            className="text-white xl:text-6xl lg:text-5xl text-4xl font-bold pb-5 text-start"
            data-swiper-parallax="-300"
          >
            MH40 Wireless Headphones
          </div>
          <div className="text-white text-start pb-5 w-[100%]" data-swiper-parallax="-200">
            Iconic design and brilliant acoustics
          </div>
          <div
            className="bg-white w-[8.5rem] h-[3.5rem] flex justify-center text-sm font-bold cursor-pointer text-center items-center"
            data-swiper-parallax="-100"
          >
            Show Now
          </div>
        </div>
        <picture>
          <source srcSet={MobileImg4} type="image/webp" media="(max-width: 700px)" />
          <img src={slide4} alt="" className="block" />
        </picture>
      </SwiperSlide>
      <Handler />
    </Swiper>
  );
};

export default Slide;
