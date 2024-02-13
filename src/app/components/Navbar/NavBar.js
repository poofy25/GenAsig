"use client"

import styles from './navBar.module.scss'

import logo from '/public/assets/logos/logo_transparent.png'

import NavBarMenu from './NavBarMenu'

import { useState } from 'react'

import Image from 'next/image'




function NavBar() {


    const [menuActive , setMenuActive] = useState(false)
    const width = window.innerWidth

    const menuBtnHandler = ()=>{
        setMenuActive(!menuActive)
    }
    


    return ( 
        <nav className={`${styles.none}  ${styles.nav}`}>
            <a href='/acasa' className={styles.logoBar}><Image alt='Logo' src={logo}/></a>
            <section className={styles.navigationBar}>
                <a  href="/acasa" style={{marginLeft:'auto'}}>Acasă</a>
                <a  href="/blog">Blog</a>
                <a  href="/contact">Contact</a>

                {width > 992 ? 
                <>
                   <section className={styles.contactBar}>
                <div>
                  <a href='tel:+37369374873'>+373 69 374 873</a>
                </div>
                <span></span>

                <a href='/asigurari' className={`roundBtn`} >Comandă acum</a>

                </section>
                </>
                :
                <>
                <button aria-label='Menu' onClick={menuBtnHandler} className={styles.menuBtn}>
                    <div className={menuActive && styles.active}></div>
                    <div className={menuActive && styles.active}></div>
                    <div className={menuActive && styles.active}></div>
                </button>
                
                </>
                }
                
            </section>
            
            <NavBarMenu  status={menuActive} setStatus={setMenuActive} />
        </nav>
     );
}

export default NavBar;