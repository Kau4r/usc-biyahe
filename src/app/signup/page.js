import styles from '@/app/signin/page.module.css'
import Nav from '@/app/components/navbar'
import ThemeSwitcher from '@/app/components/themeSwitcher'
import Signu  from './signu'

export const metadata = {
  title: 'biyahe - contact',
  description: 'biyahe ta bai!',
}

export default function Contact() {

  return (
    <main className={styles.main}>
      <Nav/>
      <ThemeSwitcher/>
      <Signu/>
    </main>
  )
}