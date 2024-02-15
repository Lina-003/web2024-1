import './card.css'

export function Card({image, genre, title, href}) {
    return(
        <section className='card'>
            <div className='image'>
                <img src={image} alt="Portada"></img>
            </div>
            <div className='description'>
                <h4>{genre}</h4>
                <h3>{title}</h3>
            </div>
        </section>

    )
}