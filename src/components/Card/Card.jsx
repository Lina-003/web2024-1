
import './card.css'

export function Card() {
    return(
        <section className='card'>
            <div className='image'>
                <img src="./src/components/img/banner.jpg" width={100}></img>
            </div>
            <div className='description'>
                <h4>Sobrenatural</h4>
                <h3>Sweet Home</h3>
            </div>
        </section>

    )
}