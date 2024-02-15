import './body.css'
import { Card } from './Card/Card'
import { Genre } from './GenreFav/GenreFav'
import { data, dataG } from '../../data'

export function Body() {
    return(
        <body>
            <div className='Banner'>
                <img src="./src/components/img/banner.jpg" alt='banner' width={400}></img>
            </div>
            <div className='News'>
                <h3>Novedades de WEBTOON</h3>
                <img src="https://shop.webtoon.com/cdn/shop/files/231026_BigBanner_Boyfriedns_4500x.png?v=1700131767" width={400}></img>
            </div>
            <div className='Selections'>
                <h3>Selecciones del día</h3>
                <div className='Cards'>
                    {data.map((movie, index) =>
                        <Card
                        key={index}
                        genre={movie.genre}
                        image={movie.image}
                        title={movie.title}
                        />
                    )}
                </div>
            </div>
            <div className='Favorites'>
                <h3>Más populares por género</h3>
                <div className='CardG'>
                    {dataG.map((movie2, index) =>
                        <Genre
                        key={index}
                        genre={movie2.genre}
                        image={movie2.image}
                        title={movie2.title}
                        autor={movie2.autor}
                        />
                    )}
                </div>
            </div>
        </body>
    )
}