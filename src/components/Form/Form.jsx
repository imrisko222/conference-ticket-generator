import React from 'react'
import styles from './Form.module.css'

const Form = () => {
  return (
    <form className={styles.formContainer}>
        <label htmlFor="">
Full Name</label>
        <input type='text'/>
        
        <label htmlFor="">
Email Address</label>
        <input type='email' placeholder='example@email.com'/>
        
        <label htmlFor="">
Full Name</label>
        <input type='email' placeholder='@yournick'/>
        <button type='submit'>Generate My Ticket</button>

    </form>
  )
}

export default Form