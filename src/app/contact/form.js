'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './page.module.css'

import { useState } from 'react'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function contactForm() {

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        main: '',
    })
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevdata) => ({
        ...prevdata,
        [name] : value,
        }))
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
    
        try {
        const res = await fetch('/api/mail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(formData),
        })
        } catch (error) {
            console.error('Error', error)
        }
    }

    return(
        <div className={styles.contact}>
            <div className={styles.left_box}>
                <div className={styles.left_cont}>
                    <span className={styles.headtxt}><FontAwesomeIcon icon={faPaperPlane} className={styles.cont_icn}/> Contact Us</span>
                    <span className={styles.subtxt}>For inquiries, collaborations, or suggestions,</span>
                    <span className={styles.subtxt}>let's make your Cebu journy an unforgettable ride!</span>
                </div>
            </div>
            <div className={styles.right_box}>
                <form onSubmit={handleSubmit} className={styles.form_cont}>
                    <div className={styles.input_cont}>
                        <label className={styles.label}>Full Name*</label>
                        <input value={formData.name} onChange={handleChange} name='name' type='text' placeholder='Enter Full Name' className={styles.input} required/>
                    </div>
                    <div className={styles.input_cont}>
                        <label className={styles.label}>Email*</label>
                        <input value={formData.email} onChange={handleChange} name='email' type='email' placeholder='Enter Email' className={styles.input} required/>
                    </div>
                    <div className={styles.input_cont}>
                        <label className={styles.label}>Address</label>
                        <input value={formData.address} onChange={handleChange} name='address' type='text' placeholder='Enter Address' className={styles.input}/>
                    </div>
                    <div className={styles.input_cont}>
                        <label className={styles.label}>Phone</label>
                        <input value={formData.phone} onChange={handleChange} name='phone' type='tel' placeholder='Enter Phone Number' className={styles.input}/>
                    </div>
                    <div className={styles.input_cont}>
                        <label className={styles.label}>Message</label>
                        <textarea name='main' value={formData.main} placeholder='Comments, Suggestions, Questions?' onChange={handleChange} className={styles.txtbox}/>
                    </div>
                    <button type='submit' className={styles.form_button}>Send</button>
                </form>
            </div>
        </div>
    )
}