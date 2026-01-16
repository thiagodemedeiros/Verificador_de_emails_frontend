import './styles/Header.css'
import logo from '/logo.svg'

export default function Header() {
    return(<header className='Header'>
        <div className='Header_itens'>
            <img src={logo} alt="Logo do site" />
            <div className='Header_itens_paginas'>
                <a href="">Início</a>
                <a href="/sobre">Sobre</a>
            </div>
        </div>
    </header>)
}