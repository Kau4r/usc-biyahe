import styles from "./page.module.css";
import Nav from "@/app/components/navbar";
import ThemeSwitcher from "@/app/components/themeSwitcher";
import Map from "@/app/components/map";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Biyahe Cebu",
  description: "biyahe ta bai!",
};

export default function Home() {
  return (
      <main className={styles.main}>
        <Nav />
        <ThemeSwitcher />
        <Map />
      </main>
  );
}
