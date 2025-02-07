import React from 'react'
import styles from './Form.module.css'

const Form = () => {
  return (
    <form className={styles.formContainer}>
        <label htmlFor="">
Full Name
        <input type='text'/>
        </label>
        <label htmlFor="">
Email Address
        <input type='email'/>
        </label>
        <label htmlFor="">
Full Name
        <input type='email'/>
        </label>

    </form>
  )
}

export default Form