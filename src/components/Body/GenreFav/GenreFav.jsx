import './genrefav.css'

export function Genre({image, genre, title, autor}) {
    return(
        <section className='Genre'>
            <div className='ImageG'>
                <img src={image} width={80}></img>
            </div>
            <div className='DescriptionG'>
                <h4>{genre}</h4>
                <h3>{title}</h3>
                <h4>{autor}</h4>
            </div>
        </section>

    )
}