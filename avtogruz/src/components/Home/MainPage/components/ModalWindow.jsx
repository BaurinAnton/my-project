import React from 'react'
import MainStyleModalWindow from '../scss/MainModalWindow.module.scss'
import imgWhatsapp from '../../../../img/Main/sectionMain/Whatsapp.svg'

export const ModalWindow = ({ handlerButton }) => {
    return (
        <div className={MainStyleModalWindow.WindowModal}>
        <div className={MainStyleModalWindow.container}>
            <div className={MainStyleModalWindow.column}>
                <h2>{'Заказать эвакуатор'}</h2>
                <p className={MainStyleModalWindow.manual}>{'Просто кликните по нужному Вам телефону'}</p>
                <a href="tel:+79106454545"className={MainStyleModalWindow.number_one}>
                    <span>{'Легковой автомобиль:'}</span>
                    <span>{'+7(910)645-45-45'}</span>
                </a>
                <a href="tel:+79109034545" className={MainStyleModalWindow.number_to}>
                    <span>{'Грузовой автомобиль:'}</span>
                    <span>{'+7(910)903-45-45'}</span>
                </a>
                <div className={MainStyleModalWindow.messenger}>
                    <a href="https://wa.me/qr/4XMXIU4QPVWGD1" className={MainStyleModalWindow.messenger_auto}>
                        <img src={imgWhatsapp} alt="WhatsApp Auto" />
                        <p>{'Для легковых авто'}</p>
                    </a>
                    <a href="https://wa.me/qr/4XMXIU4QPVWGD1" className={MainStyleModalWindow.messenger_truck}>
                        <img src={imgWhatsapp} alt="WhatsApp Truck" />
                        <p>{'Для грузовых авто'}</p>
                    </a>
                </div>
            </div>
            <div className={MainStyleModalWindow.column} onClick= {handlerButton}>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    )
    
}