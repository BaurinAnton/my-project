import React from 'react'
import SectionStyleWhyMe from '../scss/SectionStyleWhyMe.module.scss'
import Number1 from '../../../../img/Main/WhyMe/1.svg'
import Number2 from '../../../../img/Main/WhyMe/2.svg'
import Number3 from '../../../../img/Main/WhyMe/3.svg'
import Number4 from '../../../../img/Main/WhyMe/4.svg'
import Number5 from '../../../../img/Main/WhyMe/5.svg'
import Number6 from '../../../../img/Main/WhyMe/6.svg'
import Number7 from '../../../../img/Main/WhyMe/7.svg'
import Number8 from '../../../../img/Main/WhyMe/8.svg'
import Number9 from '../../../../img/Main/WhyMe/9.svg'

export const WhyMe = () => (
    <section className={SectionStyleWhyMe.SectionWhyMe} id={'SectionWhyMe'}>
        <div className={SectionStyleWhyMe.wrapper}>
            <div className={SectionStyleWhyMe.container}>
                <div className={SectionStyleWhyMe.row}>
                    <h2>{'Почему мы?'}</h2>
                </div>
                <div className={SectionStyleWhyMe.row}>
                    <div className={SectionStyleWhyMe.column}>
                        <img src={Number1} alt="Number one"/>
                        <h3>{'Быстрая подача эвакуатора'}</h3>
                    </div>
                    <div className={SectionStyleWhyMe.column}>
                        <img src={Number2} alt="Number two"/>
                        <h3>{'Эвакуация любого транспорта'}</h3>
                    </div>
                    <div className={SectionStyleWhyMe.column}>
                        <img src={Number3} alt="Number three"/>
                        <h3>{'Любой способ оплаты'}</h3>
                    </div>
                    <div className={SectionStyleWhyMe.column}>
                        <img src={Number4} alt="Number four"/>
                        <h3>{'Выдаём акт выполненных работ'}</h3>
                    </div>
                    <div className={SectionStyleWhyMe.column}>
                        <img src={Number5} alt="number five"/>
                        <h3>{'Низкая и адекватная стоимость'}</h3>
                    </div>
                    <div className={SectionStyleWhyMe.column}>
                        <img src={Number6} alt="Number six"/>
                        <h3>{'Большой автопарк эвакуаторов'}</h3>
                    </div>
                    <div className={SectionStyleWhyMe.column}>
                        <img src={Number7} alt="Number seven"/>
                        <h3>{'Эвакуируем более 20 лет'}</h3>
                    </div>
                    <div className={SectionStyleWhyMe.column}>
                        <img src={Number8} alt="Number eight"/>
                        <h3>{'Оперативная доставка в сервис'}</h3>
                    </div>
                    <div className={SectionStyleWhyMe.column}>
                        <img src={Number9} alt="Number nine"/>
                        <h3>{'Работаем в любое время и погоду'}</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
)