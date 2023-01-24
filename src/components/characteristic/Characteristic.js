import React from 'react'
import s from './characteristic.module.css'
import { data } from '../../data/data'

function Characteristic() {
    const {characteristic} = data
    return (
        <div className={`${s.characteristic} mainBlock`}>
            <div className={`container ${s.container}`}>
                <div className={s.body}>
                    <h2 className={s.title}>Общая <br/> характеристика</h2>
                    <p className={s.infoText}>{characteristic.chrMainText}</p>
                    {
                        characteristic.chrTexts.map((info, key) => <p className={s.infoText} key={key}>{info}</p>)
                    }
                </div>
                <div className={s.box}>
                    {
                        characteristic.importantInfo.map((info, key) => <div className={`${s.person} person${++key}`} key={key}>
                            <div className={`${s.personHead} personHead`}><p>{info.head}</p></div>
                            <div className={`${s.personBody} personBody`}><p>{info.body}</p></div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Characteristic