import React from 'react'
import style from './GeneratedTicket.module.css'
import Icon from '../../../assets/images/logo-mark.svg'

const GeneratedTicket = () => {
  return (
<div class={style.ticketBorder}>
  <div className={style.partOfTicketOne}>
    <div className={style.namedSection}>

    <img src={Icon} alt="Conference icon" />
    <p>Coding Conf</p>
    </div>
  </div>
  <div className={style.partOfTicketTwo}></div>
  <div className={style.partOfTicketThree}></div>
</div>
  )
}

export default GeneratedTicket