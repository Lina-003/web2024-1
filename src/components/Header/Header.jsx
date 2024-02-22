import { useState } from 'react'
import './header.css'

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <header>
            <section className='full'>
                <div className='left'>
                    <img src="./src/components/img/webtoon-logo-C86D23EBD9-seeklogo.com.png" width={80}></img>
                    <h4>ORIGINALES</h4>
                    <h4>GÉNEROS</h4>
                    <h4>POPULARES</h4>
                    <h4>CANVAS</h4>
                </div>
                <div className='right'>
                    <a href="https://www.webtoons.com/es/creators101/webtoon-canvas" id='Guia'>Guía para creadores</a>
                    <a href="https://www.webtoons.com/member/login?returnUrl=https%3A%2F%2Fwww.webtoons.com%2Fes%2Fchallenge%2Fpublish" id='Publish'>Publicar</a>
                    <a href="" id='Sesion'>Iniciar sesión</a>
                    <a href="" id='Search'>Buscar</a>
                </div>
            </section>

            <section className='responsive'>
            <div className='top'>
            <img src="./src/components/img/WEBTOON.svg" width={120}></img>
            <div className='right-responsive'>
                <img src="./src/components/img/Group 6.png" width={18}></img>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <div className='hamburger-menu'>
                    <img src='https://cdn-icons-png.flaticon.com/512/6499/6499731.png'/>
                    </div>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className='bottom'>
                <img src="./src/components/img/Vector 3.svg" alt='Logo' width={20}></img>
                    <img src="./src/components/img/Vector 4.svg" alt='Originales' width={20}></img>
                    <img src="./src/components/img/Vector 5.svg" alt='Canvas' width={20}></img>
                    <img src="./src/components/img/Group 5.svg" alt='Recientes' width={20}></img>
                    <img src="./src/components/img/Group 7.svg" alt='Logo' width={20}></img>
                </div>
            )}
            </section>
        </header>
    )
}