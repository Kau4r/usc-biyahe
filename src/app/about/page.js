import styles from './page.module.css'
import Nav from '@/app/components/navbar'
import ThemeSwitcher from '@/app/components/themeSwitcher'

import Image from 'next/image'

export const metadata = {
  title: 'biyahe - about',
  description: 'biyahe ta bai!',
}

export default function About() {
  return (
    <main className={styles.main}>
      <Nav/>
      <ThemeSwitcher/>
      <div className={styles.about_cont}>

        <div className={styles.about_col}>
          <div className={styles.about_box_info}>
            <h1 className={styles.main_txt}>About Us</h1>
          </div>

          <div className={styles.about_box}>
            <Image src='/julzcortez.jpg' width={300} height={300} className={styles.photo}/> 
            <h1 className={styles.name_txt}>Cortez, Julz</h1>
            <h1 className={styles.second_txt}>Back End</h1>
          </div>

        </div>

        <div className={styles.about_col}>
          <div className={styles.about_box}>
            <Image src='/adrianbonpin.jpg' width={300} height={300} className={styles.photo}/> 
            <h1 className={styles.name_txt}>Adrian, Bonpin</h1>
            <h1 className={styles.second_txt}>Front End</h1>
          </div>

          <div className={styles.about_box}>
            <Image src='/sarahpalabrica.jpg' width={300} height={300} className={styles.photo}/> 
            <h1 className={styles.name_txt}>Palabrica, Sarah</h1>
            <h1 className={styles.second_txt}>Everything Else</h1>
          </div>


        </div>

      </div>
    </main>
  )
}