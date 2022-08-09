import React, { useEffect } from 'react'
import HeaderStyleTablet from '../scss/HeaderTablet.module.scss'
import { BurgerMenu } from './BurgerMenu'
import auto from '../../../../img/Header/auto.svg'
import cargoTruck from '../../../../img/Header/cargoTruck.svg'

export const HeaderTablet = ({ isActiveBurgerMenu, ActiveMenu, navigationList }) => {
    const ScrollToTop = () => useEffect(() => {
        const unlisten = () => (
            window.scrollTo(0, 0)
        )
        return () => unlisten();
    }, [])
    ScrollToTop()
    return (
        <header className={HeaderStyleTablet.HeaderTablet}>
            <div className={HeaderStyleTablet.wrapper}>
                <a href="/#" className={HeaderStyleTablet.column}>{''}
                </a>
                <div className={HeaderStyleTablet.column}>
                    <img src={auto} alt="Auto" />
                    <a href="tel:+79109034545">{'+7(910)903-45-45'}</a>
                </div>
                <div className={HeaderStyleTablet.column}>
                    <img src={cargoTruck} alt="Cargo Truck" />
                    <a href="tel:+79106454545">{'+7(910)645-45-45'}</a>
                </div>
                <div className={HeaderStyleTablet.Burger} onClick={ActiveMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {isActiveBurgerMenu === true ? <BurgerMenu ActiveMenu={ActiveMenu} navigationList={navigationList} /> : ''}
        </header >
    )
}