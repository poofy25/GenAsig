'use client'

import { useState } from 'react'
import styles from './asigurariForm.module.scss'

import { useEffect } from 'react'

import 'aos/dist/aos.css';

import AOS from 'aos';

export default function AsigurariForm ({type})  {

    const [formType, setFormType] = useState(type)   
    
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)


    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: true, // Animation only once
        });
      }, []);


    const handleSubmit = async (e) => {
        e.preventDefault()

        setError(null)
        setSuccess(null)
        setLoading(true)

        const chat_id = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID
        const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN

        const message = `Tip Formular: ${formType} %0A| Nume, Prenume: ${name} %0A| Telefon: ${phone} %0A| Email: ${email}`;

        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}'&text=${message}`;

        const response = await fetch(url)

        if(response.ok) {
            setLoading(false)
            setEmail('')
            setName('')
            setPhone('')
            setError(null)
            setSuccess(true)
        }
        if(!response.ok){
            setError(`A aparut o eroare, vă rugăm să incercați mai târziu.`)
            setLoading(false)
            setSuccess(null)
        }
        
    

    }

    return (
            <form data-aos="fade-up" onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formHeader}><p>Trimite {formType==="Contact" ? "contactul tău" : "cerere"}</p></div>

                <label >Nume, Prenume</label>
                <input onChange={(e)=>{setName(e.target.value)}} value={name} placeholder='Nume | Prenume' type="text" required/>

                <label>Nr. Telefon</label>
                <input onChange={(e)=>{setPhone(e.target.value)}} value={phone} type="number" id="phone" name="phone" placeholder="060-00-000-000" required/>

                <label>Email</label>
                <input onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder='Adresa Email' type="email"/>

                <button disabled={loading ? true : false} className='btnTransition roundBtn' type='submit'>{loading ? "Se trimite" : "Trimite"} {formType==="Contact" ? "contact" : "cerere"} {loading && " ..."}</button>
                {error && <div className='erorrBox'>{error}</div>}
                {success && <div className='sucessBox'>Formularul a fost trimis cu succes!</div>}
            </form>
    )
}