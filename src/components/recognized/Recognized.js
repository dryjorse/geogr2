import React from 'react'
import s from './recognized.module.css'
import { data } from '../../data/data'

function Recognized() {
    const {recognized} = data
    return (
        <div className={`${s.recognized} mainBlock`}>
            <div className={`container`}>
                <h2>Что мы узнали?</h2>
                <p className={s.text}>{recognized.text}</p>
            </div>
        </div>
    )
}

export default Recognized