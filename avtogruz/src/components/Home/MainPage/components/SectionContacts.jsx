import React from 'react'
import SectionStyleContacts from '../scss/SectionStyleContacts.module.scss'
import WhatsAppAuto from '../../../../img/Main/Contacts/WhatsappAuto.svg'
import WhatsAppTruck from '../../../../img/Main/Contacts/WhatsappTruck.svg'
import auto from '../../../../img/Header/auto.svg'
import cargoTruck from '../../../../img/Header/cargoTruck.svg'

export const SectionContacts = () => (
    <section className={SectionStyleContacts.Contacts} id={'Contacts'}>
        <div className={SectionStyleContacts.wrapper}>
            <div className={SectionStyleContacts.container}>
                <div className={SectionStyleContacts.row}>
                    <h2>{'Свяжитесь с нами'}</h2>
                </div>
                <div className={SectionStyleContacts.row}>
                    <div className={SectionStyleContacts.column}>
                        <div className= {SectionStyleContacts.box}>
                            <img src={auto} alt="" />
                            <a href="tel:+79106454545">{'+7(910)645-45-45'}</a>
                        </div>
                        <div className= {SectionStyleContacts.box}>
                            <img src={cargoTruck} alt="" />
                            <a href="tel:+79109034545">{'+7(910)903-45-45'}</a>
                        </div>
                    </div>
                    <a href="https://wa.me/qr/4XMXIU4QPVWGD1" className={SectionStyleContacts.column}>
                        <img src={WhatsAppAuto} alt="" />
                        <p>{'Для легковых авто'}</p>
                    </a>
                    <a href="https://wa.me/qr/4XMXIU4QPVWGD1" className={SectionStyleContacts.column}>
                        <img src={WhatsAppTruck} alt="" />
                        <p>{'Для грузовых авто'}</p>
                    </a>
                </div>
            </div>
        </div>
    </section >
)