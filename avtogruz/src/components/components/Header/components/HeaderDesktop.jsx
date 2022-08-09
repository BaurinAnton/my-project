import React, {useEffect} from 'react'
import HeaderStyleDesktop from '../scss/HeaderDesktop.module.scss'
import { HashLink as Link } from 'react-router-hash-link';

export const HeaderDesktop = ({ navigationList }) => {
    const ScrollToTop = () => useEffect(() => {
        const unlisten = () => (
            window.scrollTo(0, 0)
        )
        return () => unlisten();
    }, [])
    ScrollToTop()
    const navigationListContent = navigationList.map((list) =>
        <li key={list.id}>
            <Link to={list.href}
                smooth={true}
                offset={-70}
                duration={500}>{list.content}
            </Link>
        </li>
    )
    return (
        <header className={HeaderStyleDesktop.HeaderDesktop}>
            <div className={HeaderStyleDesktop.wrapper}>
                <div className={HeaderStyleDesktop.column}>
                    <a href='/#'>{''}</a>
                </div>
                <div className={HeaderStyleDesktop.column}>
                    <div className={HeaderStyleDesktop.column_row}>
                        <ul>
                            {navigationListContent}
                        </ul>
                    </div>
                    <div className={HeaderStyleDesktop.column_row}>
                        <a href="tel:+79106454545">{'Легковой автомобиль: +7(910)645-45-45'}</a>
                        <a href="tel:+79109034545">{'Грузовой автомобиль: +7(910)903-45-45'}</a>
                    </div>
                </div>
            </div>
        </header>
    )
}