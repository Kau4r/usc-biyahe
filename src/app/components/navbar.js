'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

import { useEffect, useState } from 'react'

import styles from '@/app/components/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export default function Dash() {

    const pathname = usePathname()

    const chkPage = (href) => {
        return pathname === href ? styles.current : styles.Link
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.logocont}>
                <Image src='/logo.png' width={100} height={100} className={styles.logo}/>
            </div>
            <div className={styles.txtbox}>
                <input type='text' placeholder='From'>
                </input>
            </div>
            <div className={styles.txtbox}>
                <input type='text' placeholder='To'>
                </input>
            </div>
            <div className={chkPage('/')}>
                <Link href='/'>Routes</Link>
            </div>
            {/* <div className={chkPage('/ceres')}>
                <Link href='/ceres'>Ceres</Link>
            </div> */}
            <div className={chkPage('/about')}>
                <Link href='/about'>About</Link>
            </div>
            <div className={chkPage('/contact')}>
                <Link href='/contact'>Contact</Link>
            </div>
        </nav>
    )
}