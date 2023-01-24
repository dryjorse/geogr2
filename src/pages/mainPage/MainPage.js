import React from 'react'
import s from './mainPage.module.css'
import { data } from '../../data/data'
// import mainPhoto from '../../assets/img/main'
import map from '../../assets/img/map.png'
import Banner from '../../components/banner/Banner'
import Characteristic from '../../components/characteristic/Characteristic'
import Industry from '../../components/industry/Industry'
import Recognized from '../../components/recognized/Recognized'

function MainPage() {
    return (
        <div>
            <Banner />
            <Characteristic />
            <Industry />
            <Recognized />
        </div>
    )
}

export default MainPage