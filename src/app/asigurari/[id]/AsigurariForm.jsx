'use client'

import styles from './asigurariForm.module.scss'
export default function AsigurariForm ()  {


    return (
        <>
            <form className={styles.form}>
            <div className={styles.formHeader}><p>Trimite cerere</p></div>

                <label >Nume, Prenume</label>
                <input placeholder='Nume | Prenume' type="text" required/>

                <label>Nr. Telefon</label>
                <input type="number" id="phone" name="phone" placeholder="060-00-000-000" required/>

                <label>Email</label>
                <input placeholder='Adresa Email' type="email"/>

                <button type='submit'>Trimite cerere</button>
            </form>
        </>
    )
}