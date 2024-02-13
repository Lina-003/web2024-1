import './card.css'

export function Card({image, genre, title}) {
    return(
        <section className='card'>
            <div className='image'>
                <img src={image} width={132} alt="Portada"></img>
            </div>
            <div className='description'>
                <h4>{genre}</h4>
                <h3>{title}</h3>
            </div>
        </section>

    )
}