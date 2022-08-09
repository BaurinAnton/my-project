import React from 'react'
import { FooterDesktopTablet } from './components/FooterDesktopTablet'
import { FooterMobile } from './components/FooterMobile'
import { useIsMobile } from '../MediaWidthRequest/components/MediaWidthMobile'

export const Footer = () => {
    const useIsMobileActive = useIsMobile()
    return (
        <>
            {
                useIsMobileActive ? <FooterMobile /> : <FooterDesktopTablet />
            }
        </>
    )
}