import React from 'react'
import { Link } from 'react-router-dom'
import s from './card.module.css'

function Card({name, photo, url}) {
    return (
        <Link to={url} className={s.card}>
            <h3>{name}</h3>
            <img src={photo} alt={name}/>
        </Link>
    )
}

export default Card