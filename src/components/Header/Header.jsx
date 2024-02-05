import React from 'react'
import './header.css'

export function Header() {
    return(
        <header>
            <section>
                <img src="./src/components/img\WEBTOON.svg" width={120}></img>
                <img src="./src/components/img/Group 6.png" width={18}></img>
            </section>
            <div>
                <img src="./src/components/img/Vector 3.svg" alt='Logo' width={20}></img>
                <img src="./src/components/img/Vector 4.svg" alt='Originales' width={20}></img>
                <img src="./src/components/img/Vector 5.svg" alt='Canvas' width={20}></img>
                <img src="./src/components/img/Group 5.svg" alt='Recientes' width={20}></img>
                <img src="./src/components/img/Group 7.svg" alt='Logo' width={20}></img>
            </div>
        </header>
    )
}

//https://cdn.worldvectorlogo.com/logos/webtoon-logo.svg