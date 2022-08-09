import React from 'react'
import FooterStyleDesktopTablet from '../scss/FooterStyleDesktopTablet.module.scss'
import Auto from '../../../../img/Header/auto.svg'
import CargoTruck from '../../../../img/Header/cargoTruck.svg'
import Logo from '../../../../img/Header/logo.svg'
import Telegram from '../../../../img/Footer/telegram.svg'
import Instagram from '../../../../img/Footer/instagram.svg'
import Behance from '../../../../img/Footer/behance.svg'

export const FooterDesktopTablet = () => (
    <footer className={FooterStyleDesktopTablet.FooterDesktopTablet}>
        <div className={FooterStyleDesktopTablet.wrapper}>
            <div className={FooterStyleDesktopTablet.container}>
                <div className={FooterStyleDesktopTablet.column}>
                    <img src={Logo} alt="Logo" className={FooterStyleDesktopTablet.Logo} />
                    <div className={FooterStyleDesktopTablet.box}>
                        <div className={FooterStyleDesktopTablet.box_contacts}>
                            <img src={Auto} alt="Auto" />
                            <a href="tel:+79106454545">{'+7(910)645-45-45'}</a>
                        </div>
                        <div className={FooterStyleDesktopTablet.box_contacts}>
                            <img src={CargoTruck} alt="Cargo Truck" />
                            <a href="tel:+79109034545">{'+7(910)903-45-45'}</a>
                        </div>
                    </div>
                    <p className={FooterStyleDesktopTablet.copyright}>
                        <span>&#169;</span>
                        <span>{'“Автогруз” 2021'}</span>
                    </p>
                </div>
                <div className={FooterStyleDesktopTablet.column}>
                    <p>{'Сайт запустили'}</p>
                    <div className={FooterStyleDesktopTablet.box}>
                        <span>{'Создание сайта by BaurinAnton '}</span>
                        <a href="https://t.me/baurinanton">
                            <img src={Telegram} alt="Telegram" />
                        </a>
                        <a href="https://www.instagram.com/baurin.anton">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                    </div>
                    <div className={FooterStyleDesktopTablet.box}>
                        <span>{'Дизайн сайта by BaurinArtem'}</span>
                        <a href="https://t.me/artembaurin">
                            <img src={Telegram} alt="Telegram" />
                        </a>
                        <a href="https://www.behance.net/artemartemartem">
                            <img src={Behance} alt="Behance" />
                        </a>
                    </div>
                    <p>{'Копирование материалов сайта запрещено.'}</p>
                </div>
            </div>
        </div>
    </footer>
)