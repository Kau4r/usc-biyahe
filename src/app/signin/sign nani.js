import styles from './page.module.css'
import Link from "next/link";

export default function Sign() {
  return (
   <div className={styles.con}>
     <form className={styles.myForm} action="action_page.php" method="post">
       <div className={styles.container}>
    <h1 className={styles.title}>
      Sign In
    </h1>
         <input
           type="text"
           placeholder="Enter Username"
           name="uname"
           required
           className={styles.inputText}
         />
         <input
           type="password"
           placeholder="Enter Password"
           name="psw"
           required
           className={styles.inputPassword}
         />
         <div className={styles.bottomContainer}>
           
           <label>
             <input type="checkbox" checked="checked" name="remember" /> Remember
             me
           </label>
         </div>
         <div className={styles.buttonContainer}>
           <button type="submit" className={styles.myButton}>Login</button>
         </div>
           
         <span className={styles.psw}>
             <a href="#"> Forgot password?</a>
           </span>
           <span className={styles.sign}>
             Dont have an account?<Link href="/signup"><b>Sign Up</b></Link>
           </span>
       </div>
     </form>
   </div>
  );
 }
 