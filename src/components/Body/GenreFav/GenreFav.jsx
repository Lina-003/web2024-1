import './genrefav.css'

export function Genre({image, genre, title, autor}) {
    return(
        <section className='genre'>
            <div className='imageG'>
                <img src={image} width={80}></img>
            </div>
            <div className='descriptionG'>
                <h4>{genre}</h4>
                <h3>{title}</h3>
                <h4>{autor}</h4>
            </div>
        </section>

    )
}