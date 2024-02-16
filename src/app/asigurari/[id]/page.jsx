'use client'
import AsigurariForm from "./AsigurariForm";

import styles from './page.module.scss'

import Image from "next/image";

import { asigData } from "./asigurariData";

import { useEffect } from 'react'

import 'aos/dist/aos.css';

import AOS from 'aos';

export default function Asigurare({params}) {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation only once
    });
  }, []);

  const currentAsig = asigData[params.id]
  console.log(currentAsig)
  return (
    <section className={styles.asigurarePage}>
        <article data-aos="fade-down" className={styles.asigurareHeader}
        style={{
          background: `linear-gradient(10deg, ${currentAsig.color} 20%, #111111 100%)`}}
        >
          <Image alt="Asigurare" src={currentAsig?.imgPath} width='300' height='300'/>
          <h2>{currentAsig.name}</h2>
          <p>{currentAsig.description}</p>
        </article>
        <AsigurariForm type={currentAsig?.name}/>
    </section>
  );
}
