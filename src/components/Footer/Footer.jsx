import './footer.css'

export function Footer() {
    return(
        <footer>
            <section className='footer'>
                <div className='olympus'>
                    <h3>Accede a las últimas historias creadas solo para WEBTOON</h3>
                    <img src="./src/components/img/olympus.webp"></img>
                </div>
                <div className='adv'>
                    <h3>Anuncio</h3>
                    <img src="https://cdn-icons-png.flaticon.com/128/271/271228.png"></img>
                    <h3>¡Nueva actualizacion en Perfil de Creadores - IMÁGENES!</h3>
                    <h4>25-feb-2023</h4>
                </div>

                <div className="logos">
                    <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png"
                    width={20}></img>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-icon.png"
                    width={20}></img>
                    <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png"
                    width={20}></img>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png"
                    width={20}></img>
                </div>
                <div className='menu-footer'>
                    <a href="https://www.webtoons.com/es/about">Acerca de</a>
                    <li class="bar">|</li>
                    <a href="https://webtoon.zendesk.com/hc/es/requests/new">Opiniones</a>
                    <li class="bar">|</li>
                    <a href="https://webtoon.zendesk.com/hc/es">Ayuda</a>
                    <li class="bar">|</li>
                    <a href="https://www.webtoons.com/es/terms">Términos</a>
                    <li class="bar">|</li>
                    <a href="https://www.webtoons.com/es/terms/privacyPolicy">Privacidad</a>
                    <li class="bar">|</li>
                </div>


            </section>
         
        </footer>
    )
}