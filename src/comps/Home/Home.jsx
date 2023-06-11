


import React from 'react'
import Header from '../Header/Header'
import About from '../AboutUs/About'
import Animation from './childComps/Animation/Animation'
import ChooseUs from './childComps/ChooseUs/ChooseUs'
import OurFood from './childComps/OurFood/OurFood'
import Client from './childComps/Client/Client'

export default function Home() {
    return (
        <>
        <Header body={true} head={true}/>
        <About head={false}/>
        <Animation />
        <ChooseUs />
        <OurFood />
        <Client/>
        </>
    )
}
