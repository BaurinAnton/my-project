import React from 'react'
import SectionStyleWork from '../scss/SectionStyleWork.module.scss'
import { Swiper } from '../../../components/Swiper'
import autoSlideWork1 from '../../../../img/Swiper/SwiperMain/autoSlide1.jpg'
import autoSlideWork2 from '../../../../img/Swiper/SwiperMain/autoSlide2.jpg'
import autoSlideWork3 from '../../../../img/Swiper/SwiperMain/autoSlide3.jpg'
import autoSlideWork4 from '../../../../img/Swiper/SwiperMain/autoSlide4.jpg'
import autoSlideWork5 from '../../../../img/Swiper/SwiperMain/autoSlide5.jpg'
import autoSlideWork6 from '../../../../img/Swiper/SwiperMain/autoSlide6.jpg'
import autoSlideWork7 from '../../../../img/Swiper/SwiperMain/autoSlide7.jpg'
import autoSlideWork8 from '../../../../img/Swiper/SwiperMain/autoSlide8.jpg'
import autoSlideWork9 from '../../../../img/Swiper/SwiperMain/autoSlide9.jpg'
import autoSlideWork10 from '../../../../img/Swiper/SwiperMain/autoSlide10.jpg'
import autoSlideWork11 from '../../../../img/Swiper/SwiperMain/autoSlide11.jpg'
import autoSlideWork12 from '../../../../img/Swiper/SwiperMain/autoSlide12.jpg'
import autoSlideWork13 from '../../../../img/Swiper/SwiperMain/autoSlide13.jpg'
import autoSlideWork14 from '../../../../img/Swiper/SwiperMain/autoSlide14.jpg'
import autoSlideWork15 from '../../../../img/Swiper/SwiperMain/autoSlide15.jpg'
import autoSlideWork16 from '../../../../img/Swiper/SwiperMain/autoSlide16.jpg'

export const SectionWork = () => {
    const slideContent = [
        { id: 1, content: autoSlideWork1 },
        { id: 2, content: autoSlideWork2 },
        { id: 3, content: autoSlideWork3 },
        { id: 4, content: autoSlideWork4 },
        { id: 5, content: autoSlideWork5 },
        { id: 6, content: autoSlideWork6 },
        { id: 7, content: autoSlideWork7 },
        { id: 8, content: autoSlideWork8 },
        { id: 9, content: autoSlideWork9 },
        { id: 10, content: autoSlideWork10 },
        { id: 11, content: autoSlideWork11 },
        { id: 12, content: autoSlideWork12 },
        { id: 13, content: autoSlideWork13 },
        { id: 14, content: autoSlideWork14 },
        { id: 15, content: autoSlideWork15 },
        { id: 16, content: autoSlideWork16 },
    ]
    return (
        <section className={SectionStyleWork.Work} id={'Work'}>
            <div className={SectionStyleWork.wrapper}>
                <div className={SectionStyleWork.container}>
                    <div className={SectionStyleWork.row}>
                        <h2>{'Примеры наших работ'}</h2>
                    </div>
                    <div className={SectionStyleWork.row}>
                        <Swiper slideContent={slideContent}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
