import React from 'react'
import SectionStyleEvacuate from '../scss/SectionStyleEvacuate.module.scss'
import CargoTransport from '../../../../img/Main/Evacuate/cargo.svg'
import Rink from '../../../../img/Main/Evacuate/rink.svg'
import Auto from '../../../../img/Main/Evacuate/auto.svg'
import Moto from '../../../../img/Main/Evacuate/moto.svg'
import Loader from '../../../../img/Main/Evacuate/loader.svg'
import Tractop from '../../../../img/Main/Evacuate/tractop.svg'

export const SectionEvacuate = () => (
    <section className={SectionStyleEvacuate.Evacuate} id={'Evacuate'}>
        <div className={SectionStyleEvacuate.wrapper}>
            <div className={SectionStyleEvacuate.row}>
                <h3>{'Эвакуируем'}</h3>
            </div>
            <div className={SectionStyleEvacuate.row}>
                <div className={SectionStyleEvacuate.column}>
                    <img src={Auto} alt="auto" />
                    <h4>{'Легковые автомобили'}</h4>
                </div>
                <div className={SectionStyleEvacuate.column}>
                    <img src={Moto} alt="Passenger cars" />
                    <h4>{'Мотоциклы'}</h4>
                </div>
                <div className={SectionStyleEvacuate.column}>
                    <img src={CargoTransport} alt="Commercial vehicles" />
                    <h4>{'Грузовые автомобили'}</h4>
                </div>
                <div className={SectionStyleEvacuate.column}>
                    <img src={Tractop} alt="Tractor" />
                    <h4>{'Трактора'}</h4>
                </div>
                <div className={SectionStyleEvacuate.column}>
                    <img src={Loader} alt="Loader" />
                    <h4>{'Погрузчики'}</h4>
                </div>
                <div className={SectionStyleEvacuate.column}>
                    <img src={Rink} alt="Ice rink" />
                    <h4>{'Катки'}</h4>
                </div>
            </div>
        </div>
    </section>
)