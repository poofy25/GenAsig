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

function Asig() {
    return ( 
        <section className={`${styles.asig} section`}>
            <h2>Asigurări</h2>
            <p>Comparăm oferte de la majoritatea companiilor pentru a găsi asigurarea potrivită pentru dvs.</p>
            <section className={styles.asigsSection}>
                <a href='/asigurari/medicala-peste-hotare'>
                    <Image src={medicala} width='200' height='200'/>
                    <h3>Medicală peste hotare</h3>
                    <p>Pentru rezidenți, valabilă peste hotare.</p>
                    <a>Comandă <Image src={navIcon}/> </a>
                </a>
                <a href='/asigurari/ipoteca'>
                    <Image src={ipoteca} width='200' height='200'/>
                    <h3>Ipotecă</h3>
                    <p>Pentru ipotecă și bunuri imobile gajate.</p>
                    <a>Comandă <Image src={navIcon}/> </a>
                </a>
                <a href='/asigurari/carte-verde'>
                    <Image src={carteverde} width='100' height='100'/>
                    <h3>Carte Verde</h3>
                    <p>Pentru vehicule înmatriculate în Moldova, valabilă peste hotare.</p>
                    <a>Comandă <Image src={navIcon}/> </a>
                </a>
                <a href='/asigurari/accidente'>
                    <Image src={accidente} width='200' height='200'/>
                    <h3>Accidente</h3>
                    <p>Siguranță financiară în cazul unor evenimente neașteptate.</p>
                    <a>Comandă <Image src={navIcon}/> </a>
                </a>
                <a href='/asigurari/casco'>
                    <Image src={casco} width='200' height='200'/>
                    <h3>Casco</h3>
                    <p>Protecție completă pentru vehiculul tău împotriva daunelor.</p>
                    <a>Comandă <Image src={navIcon}/> </a>
                </a>
                <a href='/asigurari/vinieta'>
                    <Image src={vinieta} width='200' height='200'/>
                    <h3>Vinietă</h3>
                    <p>Acoperire pentru taxele de drum, asigurându-ți conformitatea legală.</p>
                    <a>Comandă <Image src={navIcon}/> </a>
                </a>
                <a href='/asigurari/rca'>
                    <Image src={rca} width='200' height='200'/>
                    <h3>RCA</h3>
                    <p>Pentru vehicule înmatriculate în Moldova.</p>
                    <a>Comandă <Image src={navIcon}/> </a>
                </a>
                
                
                
            </section>
        </section>
     );
}

export default Asig;