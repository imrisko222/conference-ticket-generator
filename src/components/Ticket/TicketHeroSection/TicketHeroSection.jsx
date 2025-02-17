import React from 'react'
import style from './TicketHeroSection.module.css'

const TicketHeroSection = () => {
  return (
    <div className={style.heroContainer}>
        {/* miesto 'name' a 'email' nastavit meno vlozene do formulara */}
        <h2>Congrats, <span className={style.name}>Roman Klaska!</span> Your ticket is ready.</h2>
        <p>We've emailed your ticket to <span className={style.mail}>aksalk@gmail.com</span> and will send updates in the run up to the event.</p>
    </div>
  )
}

export default TicketHeroSection