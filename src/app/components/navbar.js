'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
            <div className={chkPage('/')}>
                <Link href='/'><FontAwesomeIcon icon={faHouse} /></Link>
            </div>
        </nav>
    )
}