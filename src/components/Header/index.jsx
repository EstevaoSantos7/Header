import { FaBars, FaSearch } from 'react-icons/fa'

import sty from './style.module.css'


export default function Header() {
    return (
        <>

            <header>
                <button className={sty.menuIcon}>
                    <FaBars size={20} color='#36c636' />
                </button>
                <img src="https://www.placehold.co/50x50" alt="" />
                <div className={sty.busca}>
                    <input type="text" placeholder='Pesquisar' />
                    <FaSearch size={20} color='#36c636' />
                </div>
                <nav className={sty.menu}>
                    <a href="">Link</a>
                    <a href="">Link</a>
                    <a href="">Link</a>
                    <a href="">Link</a>
                    <a href="">Link</a>
                    <a href="">Link</a>
                </nav>
                <button className={sty.searchIcon}>
                    <FaSearch size={20} color='#36c636' />
                </button>

            </header>
        </>

    )
}