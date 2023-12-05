import Link from "next/link";
import styles from '@/app/signin/page.module.css'

export default function Signu() {
  return (
    <div className={styles.con}>
      <form className={styles.myForm} action="action_page.php" method="post">
        <div className={styles.container}>
          <h1 className={styles.title}>Sign Up</h1>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
            className={styles.inputText}
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            className={styles.inputPassword}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            className={styles.inputPassword}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="psw"
            required
            className={styles.inputPassword}
          />
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.myButton}>
              Sign Up
            </button>
          </div>
          <span className={styles.sign}>
            Already have an account?
            <Link href="/signin">
              <b>Sign In</b>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
