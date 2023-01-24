import React from 'react'
import s from './countriesPage.module.css'
import { countriesData } from '../../data/data'
import Card from '../../components/card/Card'

function CountriesPage() {
    return (
        <div className={s.main}>
            <div className={`container ${s.container}`}>
                {
                    countriesData.map((country, key) => 
                    <Card 
                        name={country.name} 
                        photo={country.photos.card} 
                        key={key} 
                        url={`/countries/${country.enName}`}
                    />)
                }
            </div>
        </div>
    )
}

export default CountriesPage