import React from 'react'
import { useState } from 'react'
import style from './GeneratedTicket.module.css'
import Icon from '../../../assets/images/logo-mark.svg'
import Avatar from '../../../assets/images/image-avatar.jpg'


const GeneratedTicket = () => {

  const generatedNumber = () => {
    const randomNumber = Math.floor(10000 + Math.random() * 90000); // generuje číslo od 10000 do 99999
    return `#${randomNumber}`;
  };
  
  const [ticketNumber] = useState(generatedNumber);

  return (
<div class={style.ticketBorder}>
  <div className={style.partOfTicketOne}>
    <div className={style.namedSection}>
      <img src={Icon} alt="Conference icon" />
      <p>Coding Conf</p>
    </div>
    <div className={style.avatarSection}>
      <img src={Avatar} alt="Conference attendees photo" />
      <div>
        <p>Meno</p>
        <p>odkaz na github</p>
      </div>
    </div>
  </div>
  <div className={style.partOfTicketTwo}></div>
  <div className={style.partOfTicketThree}>
    <p className={style.generatedNumber}>{ticketNumber}</p>
  </div>
</div>
  )
}

export default GeneratedTicket