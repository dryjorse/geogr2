import React, { useEffect, useState } from 'react'
import { NavLink, useMatch } from 'react-router-dom';
import s from './header.module.css'

function HeaderMobile() {
    const [isOpenedMenu, setOpenedMenu] = useState(false)
    const [currentPage, setCurrentPage] = useState('Главная')
    const page = useMatch(`/:page`)

    const toggleMenu = () => {
        isOpenedMenu ? setOpenedMenu(false) : setOpenedMenu(true)
    }

    const changePage = (e) => {
        setCurrentPage(e.target.innerText)
    }

    useEffect(() => {
        let currPage = !page ? 'Главная' :
        page.pathname.slice(1) === 'countries' ? 'Страны' :
        page.pathname.slice(1) === 'test' ? 'Тест' :
        page.pathname.slice(1) === 'about' ? 'О нас' : null
        setCurrentPage(currPage)
    }, [page])

    return (
        <div className={`${s.header} ${s.headerMob}`}>
            <nav className={s.menu}>
                <h2 className={s.currentPage}>{currentPage}</h2>
                <div className={`${s.burgerMenu} ${isOpenedMenu && s.openMenu}`}>
                    <ul className={`${s.menuList}  ${s.menuListMob}`}>
                        <li className={`menuLi`}><NavLink className={`linkMob`} to={'/'} onClick={changePage}>Главная</NavLink></li>
                        <li className={`menuLi`}><NavLink className={`link`} to={'/countries'} onClick={changePage}>Страны</NavLink></li>
                        <li className={`menuLi`}><NavLink className={`link`} to={'/test'} onClick={changePage}>Тест</NavLink></li>
                        <li className={`menuLi`}><NavLink className={`link`} to={'/about'} onClick={changePage}>О нас</NavLink></li>
                    </ul>
                </div>
                {isOpenedMenu && <div className={`${s.coverBody}`} onClick={toggleMenu}></div>}
            </nav>
            <div className={s.menuItemBlock} onClick={toggleMenu}>
                <div className={s.menuItem}></div>
                <div className={s.menuItem}></div>
                <div className={s.menuItem}></div>
            </div>
        </div>
    )
}

export default HeaderMobile