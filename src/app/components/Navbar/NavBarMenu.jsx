"use client"


import styles from './navBarMenu.module.scss'
import instagram from '/public/assets/svgs/instagram.svg'


import { useEffect } from 'react';
import Image from 'next/image';

function NavBarMenu({status , setStatus}) {


    useEffect(()=>{
        const menu = document.querySelector(`.${styles.menu}`)
        if(menu){
            console.log(status , menu)
            if(status){
                menu.classList.add(`${styles.active}`)
            }else{
                menu.classList.remove(`${styles.active}`)
            }
        }
    },[status])

    const menuClick = (e)=>{
        if(e.target !== document.querySelector(`.${styles.menuContent}`
        )){
            setStatus(false)
        }
    }

    return ( 

        <section onClick={menuClick} className={styles.menu}>

            <section className={styles.menuContent}>

            <a onClick={()=>{setStatus(!status)}} title='Pagina Principala' href="/">Acasă</a>
            <a onClick={()=>{setStatus(!status)}} title='Asigurări'  href="/asigurari">Asigurări</a>
            <a onClick={()=>{setStatus(!status)}} title='Contacte' className={styles.lasta}  href="/contact">Contact</a>
        
            <a className={styles.notA} title='Telefon Gen Asig' href='tel:+37361 121 115'>+373 61 121 115 </a>
            <a className={styles.notA} title='Email Gen Asig' href='mailto:genasig111@gmail.com'>genasig111@gmail.com</a>


            <span>
                <a target='_blank' href='https://www.instagram.com/gen.asig/'><Image width='48' height='48' alt='Instagram Logo' src={instagram}/></a>
            </span>

            </section>

        </section>


    );
}

export default NavBarMenu;