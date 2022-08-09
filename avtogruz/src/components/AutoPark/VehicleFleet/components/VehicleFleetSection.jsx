import React from 'react'
import PricesStyle from '../scss/vehicleFleetStyle.module.scss'
import { Swiper } from '../../../components/Swiper'
import scheme from '../../../../img/AutoPark/scheme.jpg'

export const VehicleFleetSection = ({ slideContentAuto, slideContentTruck }) => {
    return (
        <section className={PricesStyle.AutoPark}>
            <div className={PricesStyle.wrapper}>
                <div className={PricesStyle.row}>
                    <h2>{'Автопарк'}</h2>
                    <div className={PricesStyle.column}>
                        <p>
                            <span className={PricesStyle.colorWhite}>{'Наш автопарк состоит из'}</span>
                            <span className={PricesStyle.colorOrange}>{' 3-х автомобилей:'}</span>
                        </p>
                        <p>
                            <span className={PricesStyle.colorOrange}>{'2 MERCEDES ATEGO '}</span>
                            <span className={PricesStyle.colorWhite}>{'с выдвижными платформами'}</span>
                        </p>
                        <p>
                            <span className={PricesStyle.colorWhite}>{'и '}</span>
                            <span className={PricesStyle.colorOrange}>{'грузовой MERCEDES 1838 '}</span>
                            <span className={PricesStyle.colorWhite}>{'с краном-манипулятором'}
                            </span>
                        </p>
                    </div>
                </div>
                <div className={PricesStyle.row}>
                    <h2>{'Автомобильный эвакуатор'}</h2>
                    <section className={PricesStyle.swiper}>
                        <Swiper slideContent={slideContentAuto}/>
                    </section>
                </div>
                <div className={PricesStyle.row}>
                    <h2>{'Габариты'}</h2>
                    <img src={scheme} alt=""/>
                </div>
                <div className={PricesStyle.row}>
                    <h2>{'Грузовой эвакуатор'}</h2>
                    <Swiper slideContent={slideContentTruck}/>
                </div>
            </div>
        </section>
    )
}