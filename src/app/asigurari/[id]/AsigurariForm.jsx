'use client'

import { useState } from 'react'
import styles from './asigurariForm.module.scss'
export default function AsigurariForm ({type})  {

    const [formType, setFormType] = useState(type)    
        console.log(formType)
    return (
        <>
            <form className={styles.form}>
                <div className={styles.formHeader}><p>Trimite {formType==="Contact" ? "contactul tău" : "cerere"}</p></div>

                <label >Nume, Prenume</label>
                <input placeholder='Nume | Prenume' type="text" required/>

                <label>Nr. Telefon</label>
                <input type="number" id="phone" name="phone" placeholder="060-00-000-000" required/>

                <label>Email</label>
                <input placeholder='Adresa Email' type="email"/>

                <button className='btnTransition roundBtn' type='submit'>Trimite {formType==="Contact" ? "contact" : "cerere"}</button>
            </form>
        </>
    )
}