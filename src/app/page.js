"use client";
import styles from "./page.module.css";
import Nav from "@/app/components/navbar";
import ThemeSwitcher from "@/app/components/themeSwitcher";
import Map from "@/app/map ";
import { useState } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav/>
      <ThemeSwitcher />
      <Map/>
    </main>
  );
}
