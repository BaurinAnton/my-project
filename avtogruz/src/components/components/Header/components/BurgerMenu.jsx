import React from 'react'
import BurgerStyleMenu from '../scss/BurgerMenu.module.scss'
import auto from '../../../../img/Header/auto.svg'
import cargoTruck from '../../../../img/Header/cargoTruck.svg'
import { HashLink as Link } from 'react-router-hash-link';

export const BurgerMenu = ({ActiveMenu, navigationList}) => {
    const navigationListContent = navigationList.map((list) =>
        <li key={list.id} onClick={ActiveMenu}>
            <Link to={list.href}
                smooth={true}
                offset={-70}
                duration={500}>{list.content}
            </Link>
        </li>
    )
    return (
        <div className={BurgerStyleMenu.BurgerMenu}>
            <div className={BurgerStyleMenu.column}>
                <ul>
                    {navigationListContent}
                </ul>
            </div>
            <div className={BurgerStyleMenu.column} onClick={ActiveMenu}>
                <span></span>
                <span></span>
            </div>
            <div className={BurgerStyleMenu.column}>
                <div className={BurgerStyleMenu.column_box}>
                    <img src={auto} alt="Auto" />
                    <a href="tel:+79109034545">{'+7(910)903-45-45'}
                    </a>
                </div>
                <div className={BurgerStyleMenu.column_box}>
                    <img src={cargoTruck} alt="Cargo Truck" />
                    <a href="tel:+79106454545">{'+7(910)645-45-45'}
                    </a>
                </div>
            </div>
        </div>
    )
}