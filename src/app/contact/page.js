import styles from './page.module.css'
import Nav from '@/app/components/navbar'
import ThemeSwitcher from '@/app/components/themeSwitcher'

export const metadata = {
  title: 'biyahe - contact',
  description: 'biyahe ta bai!',
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav/>
      <ThemeSwitcher/>
      <div className={styles.contact}>
          <div className={styles.contact_us}>
            <h1 className={styles.main_txt}>Contact Us</h1>
          </div>
          <form className={styles.contact_form}>
            <h1 className={styles.name_txt}>Contact Form</h1>
            <div className={styles.row}>
              <input type='text'placeholder='Full Name' className={styles.input} required/>
              <input type='email'placeholder='email' className={styles.input} required/>
            </div>
            <div className={styles.row}>
              <input type='text'placeholder='Address' className={styles.input} required/>
              <input type='tel'placeholder='Contact #' className={styles.input} required/>
            </div>
            <div className={styles.row}>
              <textarea className={styles.txtarea} placeholder='Enter Message'/>
            </div>
            <div className={styles.row}>
              <button onClick={console.log('clicked')} className={styles.button}>Submit</button>
            </div>
          </form>
      </div>
    </main>
  )
}