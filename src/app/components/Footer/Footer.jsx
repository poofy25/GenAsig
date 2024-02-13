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
                    <a  href="/#acasa">Medicală peste hotare</a>
                    <a  href="/#desprenoi">Ipotecă</a>
                    <a  href="/#proiecte">Carte Verde</a>
                    <a  href="/#servicii">Accidente</a>
                    <a  href="/#parteneri">Casco</a>
                    <a  href="/#contacte">Vinietă</a>
                    <a  href="/#contacte">RCA</a>

                </article>
                <article>
                    <h3>TELEFON</h3>
                    <a href='tel:+37361 121 115'>+373 61 121 115 </a>
                    <h3>EMAIL</h3>
                    <a href='mailto:genasig111@gmail.com'>genasig111@gmail.com</a>
                </article>
                <article>
                    <h3>URMAREȘTE-NE</h3>
                    <a href='/' alt='Logo' className={styles.logo}><Image width='100' height='100' alt='Logo' src={logo}/></a>
                    <h3>SUNTEM ÎN REȚELELE SOCIALE</h3>
                    <span>
                        <a  target='_blank' href='https://www.instagram.com/finanko.md/' className={styles.social}><Image width='100' height='100'  alt='Instagram Logo' src={instagram}/></a>
                    </span>
                </article>
            </section>
            <section className={styles.bottom}>
                <p>© 2024 Gen Asig</p>
                <a href='https://www.facebook.com/buzacristian25' target='_blank'>Website creat de Buza Cristian</a>
            </section>
        </footer>
     );
}

export default Footer;