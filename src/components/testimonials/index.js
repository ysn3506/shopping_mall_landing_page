import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Virtual, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/autoplay";
import "swiper/css/navigation"
import "swiper/css/pagination"
import Card from '../card'
import useWindowSize from '../../hooks/use-window-size';
import { useSelector } from 'react-redux';
function Testimonials() {

    const bg = useSelector(
      (state) => state.reducer.testimonialBackground.url
    );
    const {  isMobileScreen, isTabletScreen } = useWindowSize();
    const newArr = [1, 2, 3, 4, 5, 6,7,8,9,10];
    return (
      <div
        className="container testimonial"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="testimonial-filter">
          <div className="testimonial-header">
            <span>Customer</span>
            <h2>Reviews</h2>
          </div>
          <div className="testimonial-wrapper">
            <Swiper
              modules={[Virtual, Pagination, Navigation]}
              spaceBetween={isMobileScreen ? 30 : isTabletScreen ? 40 : 60}
              slidesPerView={isMobileScreen ? 2 : isTabletScreen ? 3 : 5}
              virtual={{ addSlidesAfter: 2 }}
              speed={1000}
              navigation={true}
              centeredSlides={true}
              centeredSlidesBounds={true}
              edgeSwipeDetection={true}
              observer={true}
            >
              {newArr.map((index) => (
                <SwiperSlide key={index + "swiper"} virtualIndex={index}>
                  <Card />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    );
}

export default Testimonials;