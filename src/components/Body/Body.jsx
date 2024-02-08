import './body.css'
import { Card } from './Card/Card'
import { Genre } from './GenreFav/GenreFav'

export function Body() {
    return(
        <body>
            <div className='banner'>
                <img src="./src/components/img/banner.jpg" alt='banner' width={400}></img>
            </div>
            <div className='News'>
                <h3>Novedades de WEBTOON</h3>
                <img src="https://shop.webtoon.com/cdn/shop/files/231026_BigBanner_Boyfriedns_4500x.png?v=1700131767" width={400}></img>
            </div>
            <div className='Selections'>
                <h3>Selecciones del día</h3>
                <div className='cards'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
            <div className='favorites'>
                <h3>Más populares por género</h3>
                <div className='cardG'>
                    <Genre/>
                    <Genre/>
                    <Genre/>
                </div>
            </div>
        </body>
    )
}