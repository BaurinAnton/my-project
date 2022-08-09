import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperStyle from '../scss/SwiperStyle.module.scss'

SwiperCore.use([Scrollbar, Autoplay]);

export const SwiperJsTablet = ({ slideContent }) => {
    const slideContentTablet = slideContent.map((list) =>
        <SwiperSlide key={list.id} className={SwiperStyle.swiperSlide}>
            <img src={list.content} alt="" />
        </SwiperSlide>
    )
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={2}
            centeredSlides={true}
            className={SwiperStyle.swiperContainer}
            loop={true}
            autoplay={{ delay: 2000 }}
            disableOnInteraction={true}
        >
            { slideContentTablet }
        </Swiper>
    )
}