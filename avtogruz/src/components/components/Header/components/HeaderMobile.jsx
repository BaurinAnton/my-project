import React, { useEffect } from 'react'
import HeaderStyleMobile from '../scss/HeaderMobile.module.scss'
import auto from '../../../../img/Header/auto.svg'
import cargoTruck from '../../../../img/Header/cargoTruck.svg'
import { BurgerMenu } from './BurgerMenu'

export const HeaderMobile = ({ isActiveBurgerMenu, ActiveMenu, navigationList }) => {
    const ScrollToTop = () => useEffect(() => {
        const unlisten = () => (
            window.scrollTo(0, 0)
        )
        return () => unlisten();
    }, [])
    ScrollToTop()
    return (
        <header className={HeaderStyleMobile.HeaderMobile}>
            <div className={HeaderStyleMobile.wrapper}>
                <a className={HeaderStyleMobile.column} href='/#'>{''}</a>
                <div className={HeaderStyleMobile.column}>
                    <div className={HeaderStyleMobile.column_box}>
                        <img src={auto} alt="Auto" />
                        <a href="tel:+79109034545">{'+7(910)645-45-45'}</a>
                    </div>
                    <div className={HeaderStyleMobile.column_box}>
                        <img src={cargoTruck} alt="Cargo Truck" />
                        <a href="tel:+79106454545">{'+7(910)903-45-45'}</a>
                    </div>
                </div>
                <div className={HeaderStyleMobile.Burger} onClick={ActiveMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {isActiveBurgerMenu === true ? <BurgerMenu ActiveMenu={ActiveMenu} navigationList={navigationList} /> : ''}
        </header>
    )
}