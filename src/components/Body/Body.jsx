import './body.css'
import { Card } from './Card/Card'
import { Genre } from './GenreFav/GenreFav'
import { data, dataG } from '../../data'

export function Body() {
    return(
        <body>
            <section className='body-full'>
            <div className='banner-full'>
                    <a href="https://www.webtoons.com/es/romance/maybe-meant-to-be/list?title_no=4503"><img 
                     src="https://pbs.twimg.com/media/FX1VX-bUEAE3xoO?format=jpg&name=large"
                     width={1000} 
                     height="auto"/>
                    </a>
                </div>
                <div className='news-full'>
                    <h3>Novedades de WEBTOON</h3>
                    <a href="https://www.webtoons.com/es/slice-of-life/boyfriends/list?title_no=3046"><img 
                     src="https://shop.webtoon.com/cdn/shop/files/231026_BigBanner_Boyfriedns_4500x.png?v=1700131767"
                     width={1000} 
                     height="auto"/>
                    </a>
                </div>
                <div className='selections-full'>
                    <h3>Selecciones del día</h3>
                    <div className='cards-full'>
                        {data.map((movie, index) =>
                            <Card
                            key={index}
                            genre={movie.genre}
                            image={movie.image}
                            title={movie.title}
                            link={movie.link}
                            />
                        )}
                    </div>
                </div>
                <div className='favorites-full'>
                    <h3>Más populares por género</h3>
                    <div className='card-full'>
                        {dataG.map((movie2, index) =>
                            <Genre
                            key={index}
                            genre={movie2.genre}
                            image={movie2.image}
                            title={movie2.title}
                            autor={movie2.autor}
                            link={movie2.link}
                            />
                        )}
                    </div>
                </div>
            </section>

            <section className='body-responsive'>
                <div className='banner'>
                    <a href="https://www.webtoons.com/es/thriller/sweet-home/list?title_no=1786"><img 
                     src="./src/components/img/banner.jpg"
                     width={400} 
                     height="auto"/>
                    </a>
                </div>
                <div className='news'>
                    <h3>Novedades de WEBTOON</h3>
                    <a href="https://www.webtoons.com/es/slice-of-life/boyfriends/list?title_no=3046"><img 
                     src="https://shop.webtoon.com/cdn/shop/files/231026_BigBanner_Boyfriedns_4500x.png?v=1700131767"
                     width={400} 
                     height="auto"/>
                    </a>
                </div>
                <div className='selections'>
                    <h3>Selecciones del día</h3>
                    <div className='cards-resp'>
                        {data.map((movie, index) =>
                            <Card
                            key={index}
                            genre={movie.genre}
                            image={movie.image}
                            title={movie.title}
                            link={movie.link}
                            />
                        )}
                    </div>
                </div>
                <div className='favorites'>
                    <h3>Más populares por género</h3>
                    <div className='card-resp'>
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
            </section>
        </body>
    )
}