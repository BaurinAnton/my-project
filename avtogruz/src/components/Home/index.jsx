import React from 'react'
import { MainPage } from './MainPage'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const Home = () => {
    return (
        <>
            <Header />
            <MainPage />
            <Footer />
        </>
    )
}