import './card.css'

export function Card({image, genre, title, link}) {
    return(
        <section className='card' onClick={() => window.location.href = link}>
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