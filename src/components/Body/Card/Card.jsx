import './card.css'

export function Card() {
    return(
        <section className='card'>
            <div className='image'>
                <img src="./src/components/img/banner.jpg" width={132}></img>
            </div>
            <div className='description'>
                <h4>Suspenso</h4>
                <h3>Dulce hogar</h3>
            </div>
        </section>

    )
}