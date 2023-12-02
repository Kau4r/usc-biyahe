'use client'

import styles from './page.module.css'

import { useState } from 'react'

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
            <div className={styles.contact_us}>
                <h1 className={styles.main_txt}>Contact Us</h1>
            </div>
            <form className={styles.contact_form} onSubmit={handleSubmit}>
                <h1 className={styles.name_txt}>Contact Form</h1>
                <div className={styles.row}>
                    <input value={formData.name} onChange={handleChange} name='name' type='text' placeholder='Full Name' className={styles.input} required/>
                    <input value={formData.email} onChange={handleChange} name='email' type='email' placeholder='email' className={styles.input} required/>
                </div>
                <div className={styles.row}>
                    <input value={formData.address} onChange={handleChange} name='address' type='text' placeholder='Address' className={styles.input} required/>
                    <input value={formData.phone} onChange={handleChange} name='phone' type='tel' placeholder='Contact #' className={styles.input}/>
                </div>
                <div className={styles.row}>
                    <textarea value={formData.main} onChange={handleChange} name='main' className={styles.txtarea} placeholder='Enter Message'/>
                </div>
                <div className={styles.row}>
                    <button type='submit' className={styles.button}>Submit</button>
                </div>
            </form>
        </div>
    )
}