import React from 'react'
import styles from './Form.module.css'

const Form = () => {
  return (
    <form className={styles.formContainer}>
        <label className={styles.labelStyle} htmlFor="uploadInput">
Upload Avatar</label>
        <input type='file' id='uploadInput' className={styles.fileStyle} accept='.jpg, .png' placeholder='Drag and drop or click to upload' />

        <label htmlFor="fullName" className={styles.labelStyle}>
Full Name</label>
        <input type='text' id='fullName' className={styles.inputStyle}/>
        
        <label htmlFor="emailAddress" className={styles.labelStyle}>
Email Address</label>
        <input type='email' id='emailAddress' className={styles.inputStyle} placeholder='example@email.com'/>
        
        <label htmlFor="userName" className={styles.labelStyle}>
Github Username</label>
        <input type='email' id='userName' className={styles.inputStyle} placeholder='@yournick'/>
        <button className={styles.buttonSubmit} type='submit'>Generate My Ticket</button>

    </form>
  )
}

export default Form