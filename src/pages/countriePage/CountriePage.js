import React, { useEffect, useState } from 'react'
import { useMatch } from 'react-router-dom'
import { countriesData } from '../../data/data'
import s from './countriePage.module.css'

function CountriePage() {
    const [countrie, setCountrie] = useState({})
    const [status, setStatus] = useState('loading')
    const match = useMatch('/countries/:countrie')

    useEffect(() => {
        setCountrie(countriesData.find(e => e.enName === match.params.countrie))
        setStatus('')
    }, [])

    if(status === 'loading') return <div className={s.main}><h2>Loading...</h2></div>
    else return (
        <div className={s.countrie}>
            <div className={s.banner}>
                <img className={s.bannerMain} src={countrie.photos.banner} alt={countrie.name} />
                <div className={`container ${s.bannerContainer}`}>
                    <img src={countrie.photos.banner} alt={countrie.name} />
                    <div className={s.bannerInfo}>
                        <ul>
                            <li>Страна: {countrie.name}</li>
                            <li>Столица: {countrie.capital}</li>
                            <li>Основано: {countrie.bazedData}</li>
                            <li>Население: {countrie.population}</li>
                            <li>Территория: {countrie.territory}</li>
                            <li>Форма правления: {countrie.governmentForm}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={s.main}>
                <div className={`container ${s.mainContainer}`}>
                    {countrie.contents.map((e, key) => <div key={key} className={s.contentBlock}>
                        <div className={`${s.content} ${(key % 2) ? s.orderOne : undefined}`}>
                            <h2 >{e.title}</h2>
                            <p>{e.text}</p>
                        </div>
                        <img src={e.photo} alt="china" />
                    </div>)}
                </div>
            </div>
        </div>
       
    )
}

export default CountriePage