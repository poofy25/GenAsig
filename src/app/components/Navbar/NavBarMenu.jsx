"use client"


import styles from './navBarMenu.module.scss'


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

            <a onClick={()=>{setStatus(!status)}}  href="/acasa">Acasă</a>
            <a onClick={()=>{setStatus(!status)}}  href="/blog">Blog</a>
            <a onClick={()=>{setStatus(!status)}} className={styles.lasta}  href="/contact">contact</a>
        
            {/* <span>
                <a target='_blank' href='https://www.facebook.com/finanko.md'><img alt='Facebook Logo' src={facebook}/></a>
                <a target='_blank' href='https://www.instagram.com/finanko.md/'><img alt='Instagram Logo' src={instagram}/></a>
            </span> */}

            </section>

        </section>


    );
}

export default NavBarMenu;