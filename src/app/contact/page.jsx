
import AsigurariForm from '../asigurari/[id]/AsigurariForm';

import styles from './page.module.scss'
import Image from "next/image";

import call from '/public/assets/svgs/call.svg'
import mail from '/public/assets/svgs/mail.svg'
import location from '/public/assets/svgs/location.svg'
import instagram from '/public/assets/svgs/instagramBlack.svg'
import talking from '/public/assets/svgs/talking.svg'



export default function Contact() {

  return (
    <section className={styles.contactPage}>
        <article className={styles.contactHeader}>
          <Image src={talking} width='300' height='300'/>
          <h2>Contacte</h2>
          <p>Te putem contacta completând formularul sau ne puteți contacta cu linkurile de mai jos.</p>
        </article>
        <section className={styles.wrapper}>
          <AsigurariForm type="Contact"/>
          <div><h3>Sau</h3></div>
          <section className={styles.contactsSection}>
              <div><p>Contactează-ne</p></div>
              <a href='tel:+373 61 121 115'><Image src={call} width='64' height='64'/>+373 61 121 115</a>
              <a href='mailto:genasig111@gmail.com'><Image src={mail} width='64' height='64'/>genasig111@gmail.com</a>
              <p><Image src={location} width='64' height='64'/>or. Chișinău, str. Focșani 4</p>
              <a><Image src={instagram} width='64' height='64'/> @gen.asig</a>
          </section>
        </section>
    </section>
  );
}
