import React from 'react'
import s from './footer.module.css'
import whatsapp from '../../assets/img/whatsapp.svg'
import instagram from '../../assets/img/instagram.svg'

function Footer() {
    return (
        <div className={`${s.footer} mainBlock`}>
            <div className={`container`}>
                <h3 className={s.title}>Мы в соц. сетях</h3>
                <div className={s.social}>
                    <a href=""><img src={whatsapp} alt="whatsapp" /></a>
                    <a href="https://www.instagram.com/hee1_sen/" target="_blank"><img src={instagram} alt="instagram" /></a>
                </div>
            </div>
        </div>  
    )
}

export default Footer;