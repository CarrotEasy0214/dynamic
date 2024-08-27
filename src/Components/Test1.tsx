import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay, EffectFade, Parallax } from "swiper/modules";

import slide1 from "../img/slide/slide1.jpg";
import slide2 from "../img/slide/slide2.jpg";
import slide3 from "../img/slide/slide3.jpg";
import slide4 from "../img/slide/slide4.jpg";
import PlayBtn from "../img/svg/playbtn.svg";
import PauseBtn from "../img/svg/pausebtn.svg";

import MobileImg1 from "../img/slide/MW09_Homepage_Mobile.webp";
import MobileImg2 from "../img/slide/MG20_Mobile.webp";
import MobileImg3 from "../img/slide/MG75_Mobile.webp";
import MobileImg4 from "../img/slide/MH40W_Mobile.webp";

const MySwiper = () => {
  const swiperRef = useRef<any>(null);

  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAutoplay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isPlaying) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay, EffectFade, Parallax]}
        direction={"horizontal"}
        centeredSlides={true}
        loop={true}
        parallax={true}
        effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          bulletClass: "w-2 h-2 rounded-lg bg-slate-500 inline-block relative mr-4 bottom-10 cursor-pointer z-50",
          bulletActiveClass: "!bg-white w-5",
          horizontalClass: "!absolute" + "!bg-black",
          // el: ".swiper-pagination-custom",
          clickable: true,
          type: "bullets",
          // renderBullet: function (index: any, className: string) {
          //   return '<div class="flex justify-end pr-5"><span class="' + className + '"></span><div/ >';
          // },
        }}
        className="w-full relative"
      >
        <SwiperSlide>
          <div className="absolute bottom-[8%] left-[4%] ms:bottom-[7%] w-[90%]">
            <div className="text-white xl:text-6xl lg:text-5xl font-bold text-4xl pb-5 text-start w-[90%]">
              MW09 True Wireless Earphones
            </div>
            <div className="text-white text-start pb-5 w-[100%]">Our newest active noise-cancelling earphones</div>
            <div className="bg-white w-[8.5rem] h-[3.5rem] flex justify-center text-sm font-bold cursor-pointer text-center items-center">
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
            <div className="text-white xl:text-6xl lg:text-5xl text-4xl font-bold text-start pb-5">
              MG20 Wireless Gaming Headphones
            </div>
            <div className="text-white text-start pb-5 w-[80%]">Never Play the Same</div>
            <div className="bg-white w-[8.5rem] h-[3.5rem] flex justify-center text-sm font-bold cursor-pointer text-center items-center">
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
            <div className="text-white xl:text-6xl lg:text-5xl text-4xl font-bold text-start pb-5">
              MW75 Active Noise-Cancelling Wireless Headphones
            </div>
            <div className="text-white text-start pb-5 w-[90%]">Perfect silence, perfect sound</div>
            <div className="bg-white w-[8.5rem] h-[3.5rem] flex justify-center text-sm font-bold cursor-pointer text-center items-center">
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
            <div className="text-white xl:text-6xl lg:text-5xl text-4xl font-bold pb-5 text-start">
              MH40 Wireless Headphones
            </div>
            <div className="text-white text-start pb-5 w-[100%]">Iconic design and brilliant acoustics</div>
            <div className="bg-white w-[8.5rem] h-[3.5rem] flex justify-center text-sm font-bold cursor-pointer text-center items-center">
              Show Now
            </div>
          </div>
          <picture>
            <source srcSet={MobileImg4} type="image/webp" media="(max-width: 700px)" />
            <img src={slide4} alt="" className="block" />
          </picture>
        </SwiperSlide>
        <div className="w-10 h-10 absolute z-50 bottom-[4.5%] right-[2%]">
          <button onClick={toggleAutoplay}>
            {isPlaying ? (
              <img src={PauseBtn} alt="" className="w-10 h-10" /> // 정지 아이콘
            ) : (
              <img src={PlayBtn} alt="" className="w-10 h-10" /> // 재생 아이콘
            )}
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default MySwiper;
