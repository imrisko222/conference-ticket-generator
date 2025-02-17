import React from 'react'
import Header from '../../Header/Header'
import TicketHeroSection from '../TicketHeroSection/TicketHeroSection'
import GeneratedTicket from '../GeneratedTicket/GeneratedTicket'
import style from './TicketComponent.module.css'

const TicketComponent = () => {
  return (
    <div className={style.ticketContainer}>
<Header />
<TicketHeroSection />
<GeneratedTicket />
    </div>
  )
}

export default TicketComponent