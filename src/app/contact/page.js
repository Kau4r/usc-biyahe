import styles from './page.module.css'
import Nav from '@/app/components/navbar'
import ThemeSwitcher from '@/app/components/themeSwitcher'

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav/>
      <ThemeSwitcher/>
      <div className={styles.temp}>
        Contact Page
      </div>
    </main>
  )
}