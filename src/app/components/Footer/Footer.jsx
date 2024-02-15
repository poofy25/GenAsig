import styles from './footer.module.scss'

import logo from '/public/assets/logos/logo_transparent.png'

import instagram from '/public/assets/svgs/instagram.svg'

import Image from 'next/image';

function Footer() {
    return ( 
        <footer className={styles.footer}>
            
            <section className={styles.content}>
                <article>
                    <h3>ADRESA</h3>
                    <p>or. Chișinău, str. Focșani 4</p>
                </article>
                <article>
                    <h3>ASIGURĂRI</h3>
                    <a title='Asigurare Medicala' href="/asigurari/medicala-peste-hotare">Medicală peste hotare</a>
                    <a title='Asigurare Ipotecă' href="/asigurari/ipoteca">Ipotecă</a>
                    <a title='Asigurare Carte Verde' href="/asigurari/carte-verde">Carte Verde</a>
                    <a title='Asigurare Accidente' href="/asigurari/accidente">Accidente</a>
                    <a title='Asigurare Casco' href="/asigurari/casco">Casco</a>
                    <a title='Asigurare Vinietă' href="/asigurari/vinieta">Vinietă</a>
                    <a title='Asigurare RCA' href="/asigurari/rca">RCA</a>

                </article>
                <article>
                    <h3>TELEFON</h3>
                    <a title='Telefon Gen Asig' href='tel:+37361 121 115'>+373 61 121 115 </a>
                    <h3>EMAIL</h3>
                    <a title='Email Gen Asig' href='mailto:genasig111@gmail.com'>genasig111@gmail.com</a>
                </article>
                <article>
                    <h3>URMAREȘTE-NE</h3>
                    <a title='Pagina Principala' href='/' alt='Logo' className={styles.logo}><Image width='300' height='300' alt='Logo' src={logo}/></a>
                    <h3>SUNTEM ÎN REȚELELE SOCIALE</h3>
                    <span>
                        <a title='Instagram Gen Asig'  target='_blank' href='https://www.instagram.com/gen.asig/' className={styles.social}><Image width='100' height='100'  alt='Instagram Logo' src={instagram}/></a>
                    </span>
                </article>
            </section>
            <section className={styles.bottom}>
                <p>© 2024 Gen Asig</p>
                <a title='Facebook Dezvoltator Site' href='https://www.facebook.com/buzacristian25' target='_blank'>Website creat de Buza Cristian</a>
            </section>
        </footer>
     );
}

export default Footer;