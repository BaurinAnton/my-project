import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/scrollbar';
// import SwiperStyle from '../scss/SwiperStyle.module.scss'

SwiperCore.use([Scrollbar, Autoplay]);

export const SwiperJsDesktop = ({ slideContent }) => {
    const slideContentDesktop = slideContent.map((list) =>
        <SwiperSlide key={list.id} className={SwiperStyle.swiperSlide}>
            <img src={list.content} className={SwiperStyle.imgSlide} alt="" />
        </SwiperSlide>
    )
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={false}
            scrollbar={{ draggable: true }}
            className={SwiperStyle.swiperContainer}
            loop={true}
            autoplay={{ delay: 2000 }}
            disableOnInteraction={true}
        >
            <>
                { slideContentDesktop }
            </>
        </Swiper>
    )
}