import React, { useState } from 'react'
import { HeaderDesktop } from './components/HeaderDesktop'
import { HeaderTablet } from './components/HeaderTablet'
import { HeaderMobile } from './components/HeaderMobile'
import { useIsMobile } from '../MediaWidthRequest/components/MediaWidthMobile'
import { useIsTablet } from '../MediaWidthRequest/components/MediaWidthTablet'
import { useIsDesktop } from '../MediaWidthRequest/components/MediaWidthDesktop'


export const Header = () => {
    const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState(false)
    const ActiveMenu = () => { setIsActiveBurgerMenu(isActiveBurgerMenu => !isActiveBurgerMenu) }
    const useIsMobileActive = useIsMobile()
    const useIsTabletActive = useIsTablet()
    const useIsDesktopActive = useIsDesktop()
    const navigationList = [
        { id: 1, content: 'Почему мы', href: '/home#SectionWhyMe' },
        { id: 2, content: 'Услуги', href: '/home#Evacuate' },
        { id: 3, content: 'Цены', href: '/price' },
        { id: 4, content: 'Работы', href: '/home#Work' },
        { id: 5, content: 'Автопарк', href: '/autopark' },
        { id: 6, content: 'Отзывы', href: '/reviews' },
        { id: 7, content: 'Контакты', href: '/home#Contacts' },
    ]
    return (
        <>
            {useIsMobileActive ? <HeaderMobile
                isActiveBurgerMenu={isActiveBurgerMenu}
                ActiveMenu={ActiveMenu}
                navigationList={navigationList} />
                : useIsTabletActive ? <HeaderTablet
                    isActiveBurgerMenu={isActiveBurgerMenu}
                    ActiveMenu={ActiveMenu}
                    navigationList={navigationList} />
                    : useIsDesktopActive ? <HeaderDesktop
                        navigationList={navigationList} />
                        : ''}
        </>
    )
}