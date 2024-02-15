import './footer.css'

export function Footer() {
    return(
        <footer>
            <section className='Footer'>
                <div className='Olympus'>
                    <h3>Accede a las últimas historias creadas solo para WEBTOON</h3>
                    <img src="./src/components/img/olympus.webp"></img>
                </div>
                <div className='AdvMBL'>
                    <h3>Anuncio</h3>
                    <img src="https://cdn-icons-png.flaticon.com/128/271/271228.png"></img>
                    <h3>¡Nueva actualizacion en Perfil de Creadores ...</h3>
                </div>
                <div className="Logos">
                    <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png"
                    width={20}></img>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-icon.png"
                    width={20}></img>
                    <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png"
                    width={20}></img>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png"
                    width={20}></img>
                </div>
                <div className='Menu-Footer'>
                    <a href="https://webtoon.zendesk.com/hc/es/requests/new">Opiniones</a>
                    <li class="bar">|</li>
                    <a href="https://webtoon.zendesk.com/hc/es">Ayuda</a>
                    <li class="bar">|</li>
                    <a href="https://www.webtoons.com/es/terms">Términos</a>
                    <li class="bar">|</li>
                    <a href="https://www.webtoons.com/es/terms/privacyPolicy">Privacidad</a>
                </div>
                <div className='Copyright'>
                    <img src="https://logos-world.net/wp-content/uploads/2023/09/Webtoon-Emblem.png"
                    width={70}></img>
                    <p>
					ⓒ NAVER WEBTOON Ltd.<span class="tab_space"></span>
					Tax ID : 81-3830533<span class="tab_space"></span>Address : 5700 Wilshire Blvd. Suite 220 Los Ángeles, CA 90036, EE.UU.<span class="tab_space"></span>
					E-mail : ayuda@webtoon.com<span class="tab_space"></span>Tel : (001) 323-297-3406
				    </p>
                </div>
            </section>
        </footer>
    )
}