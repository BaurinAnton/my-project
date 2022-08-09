import React from 'react'
import { VehicleFleetSection } from './components/VehicleFleetSection'
import autoSlideAutoParkAuto1 from '../../../img/Swiper/SwiperAutoPark/autoSlide1.jpg'
import autoSlideAutoParkAuto2 from '../../../img/Swiper/SwiperAutoPark/autoSlide2.jpg'
import autoSlideAutoParkAuto3 from '../../../img/Swiper/SwiperAutoPark/autoSlide3.jpg'
import autoSlideAutoParkTruck1 from '../../../img/Swiper/SwiperAutoPark/autoSlideTruck1.jpg'
import autoSlideAutoParkTruck2 from '../../../img/Swiper/SwiperAutoPark/autoSlideTruck2.jpg'
import autoSlideAutoParkTruck3 from '../../../img/Swiper/SwiperAutoPark/autoSlideTruck3.jpg'
import autoSlideAutoParkTruck4 from '../../../img/Swiper/SwiperAutoPark/autoSlideTruck4.jpg'

export const VehicleFleet = () => {
    const slideContentAuto = [
        { id: 1, content: autoSlideAutoParkAuto1 },
        { id: 2, content: autoSlideAutoParkAuto2 },
        { id: 3, content: autoSlideAutoParkAuto3 },
    ]
    const slideContentTruck = [
        { id: 1, content: autoSlideAutoParkTruck1 },
        { id: 2, content: autoSlideAutoParkTruck2 },
        { id: 3, content: autoSlideAutoParkTruck3 },
        { id: 3, content: autoSlideAutoParkTruck4 },
    ]
    return (
        <main>
            <VehicleFleetSection slideContentAuto={slideContentAuto} slideContentTruck={slideContentTruck} />
        </main>
    )
}