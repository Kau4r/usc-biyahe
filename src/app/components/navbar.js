"use client";

import Link from "next/link";
import styles from "@/app/components/navbar.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Autocomplete } from "@react-google-maps/api";

export default function Dash({setFrom,setTo}) {
  const pathname = usePathname();

  const chkPage = (href) => {
    return pathname === href ? styles.current : styles.Link;
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logocont}>
        <Image
          src="/logo.png"
          width={100}
          height={100}
          className={styles.logo}
        />
      </div>
      <div className={chkPage("/")}>
        <Link href="/">Routes</Link>
      </div>
      <div className={chkPage("/about")}>
        <Link href="/about">About</Link>
      </div>
      <div className={chkPage("/contact")}>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
