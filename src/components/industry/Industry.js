import React from 'react'
import { data } from '../../data/data';
import s from './industry.module.css'

function Industry() {
    const {industry} = data
    return (
        <div className={`${s.industry} mainBlock`}>
            <div className={`container`}>
                <h2>Промышленность <br/> и сельское хозяйство</h2>
                <h3>По уровню развития промышленности выделяют 6 групп стран:</h3>
                <ul className={s.groups}>
                    {
                        industry.devGroups.map((group, key) => <li key={key} className={s.list}>{group}</li>)
                    }
                </ul>
            </div>
        </div>  
    )
}

export default Industry;