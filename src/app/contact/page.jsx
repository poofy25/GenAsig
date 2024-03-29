'use client'
import AsigurariForm from '../asigurari/[id]/AsigurariForm';

import styles from './page.module.scss'
import Image from "next/image";

import call from '/public/assets/svgs/call.svg'
import mail from '/public/assets/svgs/mail.svg'
import location from '/public/assets/svgs/location.svg'
import instagram from '/public/assets/svgs/instagramBlack.svg'
import talking from '/public/assets/svgs/talking.svg'

import { useEffect } from 'react'

import 'aos/dist/aos.css';

import AOS from 'aos';


export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation only once
    });
  }, []);
  return (
    <section className={styles.contactPage}>
        <article data-aos="fade-down" className={styles.contactHeader}>
          <Image alt='Contact Image' src={talking} width='300' height='300'/>
          <h2>Contacte</h2>
          <p>Te putem contacta completând formularul sau ne puteți contacta cu linkurile de mai jos.</p>
        </article>
        <section className={styles.wrapper}>
          <AsigurariForm type="Contact"/>
          <div data-aos="fade-down"><h3>Sau</h3></div>
          <section data-aos="fade-up" className={styles.contactsSection}>
              <div><p>Contactează-ne</p></div>
              <a title='Telefon Gen Asig' href='tel:+373 61 121 115'><Image alt='Telefon' src={call} width='64' height='64'/>+373 61 121 115</a>
              <a title='Email Gen Asig' href='mailto:genasig111@gmail.com'><Image alt='Mail' src={mail} width='64' height='64'/>genasig111@gmail.com</a>
              <p><Image alt='Locatie' src={location} width='64' height='64'/>or. Chișinău, str. Focșani 4</p>
              <a title='Instagram Gen Asig' target='_blank' href='https://www.instagram.com/gen.asig/'><Image alt='Instagram' src={instagram} width='64' height='64'/> @gen.asig</a>
          </section>
        </section>
    </section>
  );
}
