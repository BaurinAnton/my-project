import React from 'react'
import { SwiperJsDesktop } from './components/SwiperJsDesktop'
import { SwiperJsTablet } from './components/SwiperJsTablet'
import { SwiperJsMobile } from './components/SwiperJsMobile'
import { useIsMobile } from '../MediaWidthRequest/components/MediaWidthMobile'
import { useIsTablet } from '../MediaWidthRequest/components/MediaWidthTablet'
import { useIsDesktop } from '../MediaWidthRequest/components/MediaWidthDesktop'

export const Swiper = ({slideContent}) => {
    const useIsMobileActive = useIsMobile()
    const useIsTabletActive = useIsTablet()
    const useIsDesktopActive = useIsDesktop()
    return (
        <>
            {
                useIsDesktopActive ? <SwiperJsDesktop slideContent={slideContent} />
                    : useIsTabletActive ? <SwiperJsTablet slideContent={slideContent}/>
                        : useIsMobileActive ? <SwiperJsMobile slideContent={slideContent}/>
                            : ''
            }
        </>
    )
}