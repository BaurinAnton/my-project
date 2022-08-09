import React from 'react'
import SectionStyleMass from '../scss/SectionStyleMass.module.scss'
import borderLeft from '../../../../img/Main/SectionMass/borderLeft.svg'
import borderRight from '../../../../img/Main/SectionMass/borderRight.svg'
import auto from '../../../../img/Main/SectionMass/auto.svg'

export const SectionMass = () => (
    <section className={SectionStyleMass.MassSection}>
        <div className={SectionStyleMass.wrapper}>
            <div className={SectionStyleMass.container}>
                <div className={SectionStyleMass.column}>
                    <h2>{'Грузоподъёмность'}</h2>
                    <h3>
                        <span>{'Автомобили '}</span>
                        <span>{'до 5 тонн'}</span>
                    </h3>
                    <h3>
                        <span>{'Грузовая техника '}</span>
                        <span>{'до 20-ти тонн'}</span>
                    </h3>
                    <h3>
                        <span>{'Цена за вызов '}</span>
                        <span>{'от 1500 рублей *'}</span>
                    </h3>
                    <div className={SectionStyleMass.box}>
                        <img src={borderLeft} alt="Border Left"/>
                        <p>{'*Цены зависят от расстояния перевозки, состояния автомобиля, массы техники.'}</p>
                        <img src={borderRight} alt="Border Right"/>
                    </div>
                </div>
                <div className={SectionStyleMass.column}>
                    <img src={auto} alt=""/>
                </div>
            </div>
        </div>
    </section>
)