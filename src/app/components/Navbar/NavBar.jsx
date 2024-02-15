"use client"

import styles from './navBar.module.scss'

import logo from '/public/assets/logos/logo_transparent.png'

import NavBarMenu from './NavBarMenu'

import { useState } from 'react'

import Image from 'next/image'




function NavBar() {


    const [menuActive , setMenuActive] = useState(false)

    const menuBtnHandler = ()=>{
        setMenuActive(!menuActive)
    }
    


    return ( 
        <nav className={`${styles.none}  ${styles.nav}`}>
            <a title='Pagina Principala' href='/' className={styles.logoBar}><Image alt='Logo' src={logo}/></a>
            <section className={styles.navigationBar}>
                <a title='Pagina Principala'  href="/" style={{marginLeft:'auto'}}>Acasă</a>
                <a title='Asigurări' href="/asigurari">Asigurări</a>
                <a title='Contacte'  href="/contact">Contact</a>

            
                <section className={styles.contactBar}>
                    <div>
                    <a title='Telefon Gen Asig' href='tel:+37361121115'>+373 61 121 115</a>
                    </div>
                    <span></span>

                    <a title='Asigurări' href='/asigurari' className={`roundBtn btnTransition`} >Comandă acum</a>

                </section>
                
            
                <button aria-label='Menu' onClick={menuBtnHandler} className={styles.menuBtn}>
                    <div className={menuActive && styles.active}></div>
                    <div className={menuActive && styles.active}></div>
                    <div className={menuActive && styles.active}></div>
                </button>
                
            
                
            </section>
            
            <NavBarMenu  status={menuActive} setStatus={setMenuActive} />
        </nav>
     );
}

export default NavBar;