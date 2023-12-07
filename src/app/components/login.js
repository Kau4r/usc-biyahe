import styles from '@/app/components/login.module.css'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function login({onClose}) {

    const [ signUp, setSignUp ] = useState(false)

    function changeSign(){
        setSignUp(!signUp)
    }

    const [ signInData, setSignInData ] = useState({
        email: '',
        pass: '',
        keep: false,
    })

    const [ signUpData, setSignUpData ] = useState({
        username: '',
        email: '',
        pass: '',
        pass_conf: '',
    })

    function signInChange(e){
        const { name, value } = e.target
        setSignInData((prev) => ({
            ...prev,
            [name] :value,
        }))
    }

    function keepChange(e){
        const { checked } = e.target
        setSignInData((prev) => ({
            ...prev,
            keep: checked,
        }))
    }

    function signUpChange(e){
        const { name, value } = e.target
        setSignUpData((prev) => ({
            ...prev,
            [name] :value,
        }))
    }

    async function handleSignIn(e){
        try {
            const res = await fetch('/api/sign-in', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',},
                body: JSON.stringify(signInData),
            })
        } catch (error) {
            console.error('Error Logging In')
        }
    }

    async function handleSignUp(e){
        try {
            const res = await fetch('/api/sign-up', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',},
                body: JSON.stringify(signUpData),
            })
        } catch (error) {
            console.error('Error Logging In')
        }
    }

    return (
        <div className={styles.login_bg}>
            <div className={styles.login_box}>
                <div className={styles.box_close}>
                    <button onClick={onClose} className={styles.close_button}>
                        <FontAwesomeIcon icon={faX}/>
                    </button>
                </div>
                <form onSubmit={handleSignIn} className={ signUp === false ? styles.signIn : styles.hide }>
                    <span className={styles.maintxt}>Welcome Back</span>
                    <div className={styles.input_cont}> 
                        <label className={styles.label}>Email Address</label>
                        <input name='email' type='email' value={signInData.email} onChange={signInChange} className={styles.input} placeholder='Enter Email' required/>
                    </div>
                    <div className={styles.input_cont}> 
                        <label className={styles.label}>Password</label>
                        <input name='pass' type='password' value={signInData.pass} onChange={signInChange} className={styles.input} placeholder='Enter Password' required/>
                    </div>
                    <span className={styles.chkBox}><label className={styles.label}>Stay Signed In? <input name='keep' type='radio' value={signInData.keep} onChange={keepChange} placeholder='Enter Password' required/></label></span>
                    <button type='submit' className={styles.form_button}>Log In</button>
                    <span className={styles.sign_txt}>Don't have an account? <a onClick={changeSign} className={styles.sign_txt_act}>Sign Up</a></span>
                </form>
                <form onSubmit={handleSignUp} className={ signUp === true ? styles.signUp : styles.hide }>
                    <span className={styles.maintxt}>Join Us</span>
                    <div className={styles.input_cont}> 
                        <label className={styles.label}>Username</label>
                        <input name='username' type='text' value={signUpData.username} onChange={signUpChange} className={styles.input} placeholder='Enter Username' required/>
                    </div>
                    <div className={styles.input_cont}> 
                        <label className={styles.label}>Email</label>
                        <input name='email' type='email' value={signUpData.email} onChange={signUpChange} className={styles.input} placeholder='Enter Email' required/>
                    </div>
                    <div className={styles.input_cont}> 
                        <label className={styles.label}>Password</label>
                        <input name='pass' type='password' value={signUpData.pass} onChange={signUpChange} className={styles.input} placeholder='Enter Password' required/>
                    </div>
                    <div className={styles.input_cont}> 
                        <label className={styles.label}>Confirm Password</label>
                        <input name='pass_conf' type='password' value={signUpData.pass_conf} onChange={signUpChange} className={styles.input} placeholder='Confirm Password' required/>
                    </div>
                    <button type='submit' className={styles.form_button}>Sign Up</button>
                    <span className={styles.sign_txt}>Already have an account? <a onClick={changeSign} className={styles.sign_txt_act}>Sign In</a></span>
                </form>
            </div>
        </div>
    )
}