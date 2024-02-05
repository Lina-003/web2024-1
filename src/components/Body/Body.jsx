import React from 'react'
import './body.css'
import { Card } from '../Card/Card'

export function Body() {
    return(
        <body>
            <section className='banner'>
                <img src="./src/components/img/banner.jpg" alt='banner'></img>
            </section>
            <div className='News'>
                <h3>Novedades de WEBTOON</h3>
                <img src="https://shop.webtoon.com/cdn/shop/files/231026_BigBanner_Boyfriedns_4500x.png?v=1700131767" width={400}></img>
            </div>
            <div className='Selections'>
                <h3>Selecciones del día</h3>
                <Card/>
            </div>
        </body>
    )
}