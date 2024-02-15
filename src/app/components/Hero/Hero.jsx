import styles from './hero.module.scss'

import heroBg from '/public/assets/svgs/heroBg.svg'
import lockGif from '/public/assets/gifs/lock.gif'
import Image from 'next/image';

function Hero() {
    return ( 
        <section className={`${styles.hero} section`}>
            <div className={styles.bgSvg}>
                <Image alt='Background blobs' src={heroBg}/>
            </div>
            <section>
                <h1>Asigurări Consultanță și Asistență</h1>
                <p>Oferim soluții în asigurări și asistență specializată pentru toate nevoile tale.</p>
                <a title='Asigurări' href='/asigurari' className={`${styles.btn} btnTransition roundBtn`} >Comandă acum</a>
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