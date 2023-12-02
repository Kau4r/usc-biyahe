import styles from './page.module.css'
import Nav from '@/app/components/navbar'
import ThemeSwitcher from '@/app/components/themeSwitcher'
import Form from '@/app/contact/form'

export const metadata = {
  title: 'biyahe - contact',
  description: 'biyahe ta bai!',
}

export default function Contact() {

  return (
    <main className={styles.main}>
      <Nav/>
      <ThemeSwitcher/>
      <Form/>
    </main>
  )
}