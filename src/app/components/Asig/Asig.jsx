'use client'

import styles from './asig.module.scss'

import navIcon from '/public/assets/icons/navigateIcon.svg'

import carteverde from '/public/assets/imgs/carteverde.png'
import rca from '/public/assets/imgs/rca.png'
import medicala from '/public/assets/imgs/medicala.png'
import casco from '/public/assets/imgs/casco.png'
import ipoteca from '/public/assets/imgs/ipoteca.png'
import vinieta from '/public/assets/imgs/vinieta.png'
import accidente from '/public/assets/imgs/accidente.png'

import Image from 'next/image'

import { useEffect } from 'react'

import 'aos/dist/aos.css';

import AOS from 'aos';

function Asig() {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: true, // Animation only once
        });
      }, []);

    return ( 
        <section className={`${styles.asig} section`}>
            <h2>Asigurări</h2>
            <p>Descoperă consultanța și asistența noastră în asigurări. Oferim soluții personalizate pentru toate nevoile tale. Protejează-ți viitorul cu noi!</p>
            <section className={styles.asigsSection}>
                <a data-aos="fade-right" title='Asigurare Medicala' href='/asigurari/medicala-peste-hotare'>
                    <Image  alt='Asigurare Medicala' src={medicala} width='200' height='200'/>
                    <h3>Medicală peste hotare</h3>
                    <p>Pentru rezidenți, valabilă peste hotare.</p>
                    <span>Comandă <Image alt='Navigheaza' src={navIcon}/> </span>
                </a>
                <a data-aos="fade-right" title='Asigurare Ipoteca' href='/asigurari/ipoteca'>
                    <Image alt='Asigurare Ipoteca' src={ipoteca} width='200' height='200'/>
                    <h3>Ipotecă</h3>
                    <p>Pentru ipotecă și bunuri imobile gajate.</p>
                    <span>Comandă <Image alt='Navigheaza' src={navIcon}/> </span>
                </a>
                <a data-aos="fade-left" title='Asigurare Carte Verde' href='/asigurari/carte-verde'>
                    <Image alt='Asigurare Carte Verde' src={carteverde} width='100' height='100'/>
                    <h3>Carte Verde</h3>
                    <p>Pentru vehicule înmatriculate în Moldova, valabilă peste hotare.</p>
                    <span>Comandă <Image alt='Navigheaza' src={navIcon}/> </span>
                </a>
                <a data-aos="fade-left" title='Asigurare Accidente' href='/asigurari/accidente'>
                    <Image alt='Asigurare Accidente' src={accidente} width='200' height='200'/>
                    <h3>Accidente</h3>
                    <p>Siguranță financiară în cazul unor evenimente neașteptate.</p>
                    <span>Comandă <Image alt='Navigheaza' src={navIcon}/> </span>
                </a>
                <a data-aos="fade-right" title='Asigurare Casco' href='/asigurari/casco'>
                    <Image alt='Asigurare Casco' src={casco} width='200' height='200'/>
                    <h3>Casco</h3>
                    <p>Protecție completă pentru vehiculul tău împotriva daunelor.</p>
                    <span>Comandă <Image alt='Navigheaza' src={navIcon}/> </span>
                </a>
                <a data-aos="fade-up" title='Asigurare Vinieta' href='/asigurari/vinieta'>
                    <Image alt='Asigurare Vinieta' src={vinieta} width='200' height='200'/>
                    <h3>Vinietă</h3>
                    <p>Acoperire pentru taxele de drum, asigurându-ți conformitatea legală.</p>
                    <span>Comandă <Image alt='Navigheaza' src={navIcon}/> </span>
                </a>
                <a data-aos="fade-left" title='Asigurare RCA' href='/asigurari/rca'>
                    <Image alt='Asigurare RCA' src={rca} width='200' height='200'/>
                    <h3>RCA</h3>
                    <p>Pentru vehicule înmatriculate în Moldova.</p>
                    <span>Comandă <Image alt='Navigheaza' src={navIcon}/> </span>
                </a>
                
                
            </section>
        </section>
     );
}

export default Asig;