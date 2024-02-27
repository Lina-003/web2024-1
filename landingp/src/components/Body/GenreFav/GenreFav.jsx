import './genrefav.css'

export function Genre({image, genre, title, autor, link}) {
    return(
        <section className='genre' onClick={() => window.location.href = link}>
            <div className='image-genre'>
                <img src={image}></img>
            </div>
            <div className='description-genre'>
                <h4>{genre}</h4>
                <h3>{title}</h3>
                <h4>{autor}</h4>
            </div>
        </section>

    )
}