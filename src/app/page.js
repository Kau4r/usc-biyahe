import styles from './page.module.css'
import Nav from '@/app/components/navbar'
import ThemeSwitcher from '@/app/components/themeSwitcher'

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav/>
      <ThemeSwitcher/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096033!2d123.90038131533512!3d10.31557399239648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9c5c26b3a3b3b%3A0x865529c586e2a3a!2sCebu%20City%2C%20Cebu%206000%20Philippines!5e0!3m2!1sen!2sus!4v1638482171020!5m2!1sen!2sus" width="600" height="450" allowFullScreen="" loading="lazy" className={styles.map}/>
    </main>
  )
}