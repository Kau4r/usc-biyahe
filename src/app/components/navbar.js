"use client";

import Login from "@/app/components/login.js";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Dash() {
  const pathname = usePathname();

  const chkPage = (href) => {
    return pathname === href ? styles.current : styles.Link;
  };

  const [loginOpen, setLoginOpen] = useState(false);

  function handleCloseLogin() {
    setLoginOpen(false);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logocont}>
        <Image
          src="/logo.png"
          width={100}
          height={100}
          className={styles.logo}
          alt="Logo"
        />
      </div>
      <div className={styles.links}>
        <div className={chkPage("/")}>
          <Link href="/">Routes</Link>
        </div>
        <div className={chkPage("/about")}>
          <Link href="/about">About</Link>
        </div>
        <div className={chkPage("/contact")}>
          <Link href="/contact">Contact</Link>
        </div>
        <button
          className={styles.Login}
          onClick={() =>
            import("./login").then((module) => {
              setLoginOpen(true);
            })
          }
        >
          Login
        </button>
      </div>
      {loginOpen && <Login onClose={handleCloseLogin} />}
    </nav>
  );
}
