
import AsigurariForm from "./AsigurariForm";

import styles from './page.module.scss'

import Image from "next/image";

import { asigData } from "./asigurariData";

export default function Asigurare({params}) {

  const currentAsig = asigData[params.id]
  console.log(currentAsig)
  return (
    <section className={styles.asigurarePage}>
        <article className={styles.asigurareHeader}
        style={{
          background: `linear-gradient(10deg, ${currentAsig.color} 20%, #111111 100%)`}}
        >
          <Image src={currentAsig?.imgPath} width='300' height='300'/>
          <h2>{currentAsig?.name}</h2>
          <p>{currentAsig?.description}</p>
        </article>
        <AsigurariForm/>
    </section>
  );
}
