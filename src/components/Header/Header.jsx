import { useState } from 'react'
import './header.css'

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <header>
            <section className='full'>
                <div className='left'>
                    <img src="./src/components/img/webtoon-logo-C86D23EBD9-seeklogo.com.png" 
                        width={80}>
                    </img>
                    <a href='https://www.webtoons.com/es/originals'>
                        <h4>ORIGINALES</h4>
                    </a>
                    <a href='https://www.webtoons.com/es/genres'>
                        <h4>GÉNEROS</h4>
                    </a>
                    <a href='https://www.webtoons.com/es/popular'>
                        <h4>POPULARES</h4>
                    </a>
                    <a href='https://www.webtoons.com/es/canvas'>
                        <h4>CANVAS</h4>
                    </a>
                </div>
                <div className='right'>
                    <a href="https://www.webtoons.com/es/creators101/webtoon-canvas" 
                        id='Guia'>
                        Guía para creadores
                    </a>
                    <a href="https://www.webtoons.com/member/login?returnUrl=https%3A%2F%2Fwww.webtoons.com%2Fes%2Fchallenge%2Fpublish" 
                    id='Publish'>
                        Publicar
                    </a>
                    <a href="https://www.webtoons.com/member/login?returnUrl=https%3A%2F%2Fwww.webtoons.com%2Fes%2Fchallenge%2Fpublish" 
                    id='Sesion'>
                        Iniciar sesión
                    </a>
                    <a id='Search'>Buscar</a>
                </div>
            </section>

            <section className='responsive'>
            <div className='top'>
            <img src="./src/components/img/WEBTOON.svg" 
                width={120}>
            </img>
            <div className='right-responsive'>
                <img src="./src/components/img/Group 6.png" 
                    width={18}>
                </img>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <div className='hamburger-menu'>
                    <img src='https://cdn-icons-png.flaticon.com/512/6499/6499731.png'/>
                    </div>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className='bottom'>
                    <a href='http://localhost:5173/'>
                        <img src="./src/components/img/Vector 3.svg" 
                        alt='Home' 
                        width={20}>
                        </img>
                    </a>
                    <a href='https://m.webtoons.com/es/originals'>
                        <img src="./src/components/img/Vector 4.svg" 
                        alt='Originales' 
                        width={20}>
                        </img>
                    </a>
                    <a href='https://m.webtoons.com/es/canvas'>
                        <img src="./src/components/img/Vector 5.svg" 
                        alt='Canvas' 
                        width={20}>
                        </img>
                    </a>
                    <a href='https://m.webtoons.com/es/recent'>
                        <img src="./src/components/img/Group 5.svg" 
                        alt='Recientes' 
                        width={20}>
                        </img>
                    </a>
                    <a href='https://m.webtoons.com/es/more'>
                        <img src="./src/components/img/Group 7.svg" 
                        alt='Más' 
                        width={20}>
                        </img>
                    </a>
                </div>
            )}
            </section>
        </header>
    )
}