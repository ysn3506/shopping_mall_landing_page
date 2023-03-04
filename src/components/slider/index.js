import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Autoplay, EffectFade } from "swiper";
import SliderSlide from "../slide";
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { useSelector } from "react-redux";



function Slider() {

    const slides=useSelector(state=>state.reducer.sliderPhotos)

    return (
      <Swiper
        modules={[Virtual, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        virtual
        autoplay={{ delay: 2500 , disableOnInteraction:false}}
        speed={1000}
        effect="fade"
            
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index + item.name + "swiper"} virtualIndex={index}>
            <SliderSlide key={index + item.name} content={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
}

export default Slider;
