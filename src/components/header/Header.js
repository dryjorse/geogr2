import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './header.module.css'

function Header() {
    return (
        <div className={`${s.header}`}>
            <nav className={s.menu}>
                <ul className={s.menuList}>
                    <li className={`menuLi`}><NavLink className={`link`} to={'/'}>Главная</NavLink></li>
                    <li className={`menuLi`}><NavLink className={`link`} to={'/countries'}>Страны</NavLink></li>
                    <li className={`menuLi`}><NavLink className={`link`} to={'/test'}>Тест</NavLink></li>
                    <li className={`menuLi`}><NavLink className={`link`} to={'/about'}>О нас</NavLink></li>
                </ul>
            </nav>
            <div className={s.register}>
                <button className={s.regButton}>Зарегистрироваться</button>
                <button className={`${s.regButton} ${s.login}`}>Войти</button>
            </div>
        </div>
    )
}

export default Header;