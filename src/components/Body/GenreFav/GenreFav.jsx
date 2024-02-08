import './genrefav.css'

export function Genre() {
    return(
        <section className='genre'>
            <div className='imageG'>
                <img src="https://mms.businesswire.com/media/20211207005260/en/933529/5/Lore_Olympus_2.jpg" width={80}></img>
            </div>
            <div className='descriptionG'>
                <h4>Género</h4>
                <h3>Título</h3>
                <h4>Autor</h4>
            </div>
        </section>

    )
}