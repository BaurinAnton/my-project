import React from 'react'
import MainStyleSection from '../scss/MainSection.module.scss'
import borderLeft from '../../../../img/Main/sectionMain/borderLeft.svg'
import borderRight from '../../../../img/Main/sectionMain/borderRight.svg'
import autoMain from '../../../../img/Main/sectionMain/auto.svg'

export const MainSection = ({ handlerButton }) => {
    return (
        <section className={MainStyleSection.SectionMain}>
            <div className={MainStyleSection.wrapper}>
                <div className={MainStyleSection.container}>
                    <div className={MainStyleSection.column}>
                        <h1>{'Услуги эвакуации'}</h1>
                        <h2>{'Быстрая и качественная эвакуация в Рязани и области'}</h2>
                        <div className={MainStyleSection.button}>
                            <div onClick={handlerButton}>{'Заказать'}</div>
                            <span className={MainStyleSection.buttonBorder}></span>
                        </div>
                        <div className={MainStyleSection.column_box}>
                            <img src={borderLeft} alt="Border Left" />
                            <h3>{'Круглосуточная и недорогая помощь для Вас и Вашей техники с доставкой по всей России'}</h3>
                            <img src={borderRight} alt="Border Right" />
                        </div>
                    </div>
                    <div className={MainStyleSection.column}>
                        <img src={autoMain} alt="auto" />
                    </div>
                </div>
            </div>
        </section>
    )
}