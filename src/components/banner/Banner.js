import React from 'react'
import s from './banner.module.css'
import { data } from '../../data/data'
import map from '../../assets/img/map.png'

function Banner() {
    return (
        <div className={`${s.banner} mainBlock`}>
            <div className={`${s.container} container`}>
                <div className={s.mainBlock}>
                    <h1>Зарубежная <br/> Азия</h1>
                    <img src={data.mainInfo.img} alt="main" className={s.mainImg}/>
                    <img src={map} alt="map" className={s.mapImg}/>
                    <div className={s.mainTextsBlock}>
                        <h1>Зарубежная <br/> Азия</h1>
                        <p className={s.mainDescr}>{data.mainInfo.mainText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner