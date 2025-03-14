import { FaBars, FaSearch, FaTimes, FaHome, FaFile   } from 'react-icons/fa'
import { IoIosInformationCircle } from "react-icons/io";
import { FiEyeOff } from "react-icons/fi";



import sty from './style.module.css'
import { useState } from 'react';
import Link from '../Links';



export default function Header() {
    const [menuLateral, setMenuLateral] = useState(false);
    const [pesquisar, setPesquisar] = useState(false);
    const [login, setLogin] = useState(false);
    return (
        <>

            <header>
                <button className={sty.menuIcon} onClick={() => setMenuLateral(true)}>
                    <FaBars size={20} color='#36c636' />
                </button>
                <img src="https://www.placehold.co/50x50" alt="" />
                <div className={sty.busca}>
                    <input type="text" placeholder='Pesquisar' />
                    <FaSearch size={20} color='#36c636' />
                </div>
                <nav className={sty.menu}>
                    <a href="" onClick={() => setLogin(true)}>Login</a>
                    <a href="">Link</a>
                    <a href="">Link</a>
                    <a href="">Link</a>
                    <a href="">Link</a>
                    <a href="">Link</a>
                </nav>
                <button onClick={() => setPesquisar(true)} className={sty.searchIcon}>
                    <FaSearch size={20} color='#36c636' />
                </button>


            </header>
            {menuLateral && (
                <div className={sty.overlaymenuLateral} onClick={() => setMenuLateral(false)}>
                    <div onClick={(e) => e.stopPropagation()} className={sty.menulateral}>
                        <div className={sty.cabecalho}>
                            <h2>Menu</h2>
                            <button className={sty.fechar} onClick={() => setMenuLateral(false)}>
                                <FaTimes size={20} />
                            </button>

                        </div>
                        <nav className={sty.caminhos}>
                            <Link icone={FaHome} titulo="Home" />
                            <Link icone={IoIosInformationCircle} titulo="Sobre" />
                            <Link icone={FaFile} titulo="Favoritos" />

                            <button className={sty.botaologin} onClick={() => setLogin(true)}>Login</button>
                        </nav>
                    </div>

                </div>
            )}
            {pesquisar && (
                <div onClick={() => setPesquisar(false)} className={sty.overlayPesquisar}>
                    <div onClick={(e) => e.stopPropagation()} className={sty.pesquisaContainer}>
                        <input type="text" className={sty.pesquisarInput} placeholder='Pesquisar' />
                        <FaSearch />
                    </div>
                </div>

            )}
            {login && (
                <div className={sty.overlayLogin}>
                    <div onClick={(e) => e.stopPropagation()} className={sty.loginContainer}>
                        <input type="text" className={sty.loginInput} placeholder='Email' />
                        <input type="text" className={sty.loginInput} placeholder='Senha' />
                        <button onClick={() => setLogin(false)} className={sty.enviar}> Enviar</button>
                    </div>
                </div>
            )}

        </>

    )
}