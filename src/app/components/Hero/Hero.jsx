import styles from './hero.module.scss'

import heroBg from '/public/assets/svgs/heroBg.svg'
import lockGif from '/public/assets/gifs/lock.gif'
import Image from 'next/image';

function Hero() {
    return ( 
        <section className={`${styles.hero} section`}>
            <div className={styles.bgSvg}>
                <Image src={heroBg}/>
            </div>
            <section>
                <h1>Asigurări</h1>
                <h2>Simplu. Rapid. Online.</h2>
                <p>Primul service complet digital din Republica Moldova. Asigurările online sunt emise instant și semnate electronic</p>
                <a href='/asigurari' className={`${styles.btn} roundBtn`} >Comandă acum</a>
            </section>
            <section style={{alignItems:'center', flex:'1'}}>
            <lord-icon
                src="https://cdn.lordicon.com/pdwpcpva.json"
                trigger="loop"
                delay="1500"
                state="in-reveal"
                colors="primary:#b89d70,secondary:#ffffff,tertiary:#ffffff"
                class={styles.animatedSvg}
                >
            </lord-icon>
            
            </section>
        </section>
     );
}

export default Hero;