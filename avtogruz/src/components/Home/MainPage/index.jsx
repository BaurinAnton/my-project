import React, { useState } from 'react'
import { MainSection } from './components/MainSection'
import { WhyMe } from './components/SectionWhyMe'
import { ModalWindow } from './components/ModalWindow'
import { SectionEvacuate } from './components/SectionEvacuate'
import { SectionMass } from './components/SectionMass'
import { SectionWork } from './components/SectionWork'
import { SectionContacts } from './components/SectionContacts'

export const MainPage = () => {
    const [isActiveModalWindow, setIsActiveModalWindow] = useState(false)
    const noScroll = () => {
        const tagBody = document.getElementById('body')
        isActiveModalWindow === false ? tagBody.style.overflow = "hidden" : tagBody.style.overflow = ""
}
    const handlerButton = () => (setIsActiveModalWindow(isActiveModalWindow => !isActiveModalWindow, noScroll())
    )
    return (
        <main>
            <MainSection handlerButton={handlerButton} />
            <WhyMe />
            <SectionEvacuate />
            <SectionMass />
            <SectionWork />
            <SectionContacts />
            {isActiveModalWindow === true ? <ModalWindow handlerButton={handlerButton} /> : ''}
        </main>
    )
}