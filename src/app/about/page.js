import styles from './page.module.css'
import Nav from '@/app/components/navbar'
import ThemeSwitcher from '@/app/components/themeSwitcher'

import Image from 'next/image'

export const metadata = {
  title: 'Biyahe Cebu - about',
  description: 'biyahe ta bai!',
}

export default function About() {
  return (
    <main className={styles.main}>
      <Nav/>
      <ThemeSwitcher/>
      <div className={styles.about_page}>
        <section className={styles.about_1}>
          <span className={styles.headtxt}>Who are we?</span>
          <p className={styles.subtxt}>At <span className={styles.high2}>BIYAHE</span>, our misson is to simplify your travel experience in Cebu by offering detailed public transport information such as <span className={styles.high2}>fare details</span> to help you navigate through the bustling streets of <span className={styles.high2}>Cebu</span>. Whether you're exploring historic sites, seeking delicious cusine, or discovering hidden gems, our platform is your go-to resource for seamless commuting adventures in <span className={styles.high2}>Cebu</span>!</p>
        </section>
        <section className={styles.about_2}>
          <span className={styles.headtxt}>Our Team</span>
          <div className={styles.team_cont}>
            <div className={styles.team_box}>
              <Image src={'/adrianbonpin.jpg'} width={300} height={300} className={styles.image}/>
              <span className={styles.secondtxt}>Adrian Bonpin</span>
              <span className={styles.normtxt}><span className={styles.high2}>Front-End Dev</span></span>
              <span className={styles.normtxt}>BSIT - 2</span>
            </div>
            <div className={styles.team_box}>
              <Image src={'/julzcortez.jpg'} width={300} height={300} className={styles.image}/>
              <span className={styles.secondtxt}>Julz Cortes</span>
              <span className={styles.normtxt}><span className={styles.high2}>Back-End Dev</span></span>
              <span className={styles.normtxt}>BSIT - 2</span>
            </div>
            <div className={styles.team_box}>
              <Image src={'/sarahpalabrica.jpg'} width={300} height={300} className={styles.image}/>
              <span className={styles.secondtxt}>Sarah Palabrica</span>
              <span className={styles.normtxt}><span className={styles.high2}>UI/UX</span></span>
              <span className={styles.normtxt}>BSIT - 2</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}