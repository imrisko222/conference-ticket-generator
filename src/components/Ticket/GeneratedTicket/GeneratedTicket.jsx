import React from "react";
import { useState } from "react";
import style from "./GeneratedTicket.module.css";
import Icon from "../../../assets/images/logo-mark.svg";
import Avatar from "../../../assets/images/image-avatar.jpg";
import Ticket from "../../../assets/images/ticket_bg.svg";

const GeneratedTicket = () => {
  const generatedNumber = () => {
    const randomNumber = Math.floor(10000 + Math.random() * 90000); // generuje číslo od 10000 do 99999
    return `#${randomNumber}`;
  };

  const [ticketNumber] = useState(generatedNumber);

  return (
    <div class={style.ticketContainer}>
      <div className={`${style.box} ${style.itemOne}`}>
        <img src={Icon} alt="Conference icon" />
        <div className={style.conferenceDetails}>
          <p>Coding Conf</p>
          <p>Jan 31, 2025 / Offline</p>
        </div>        
      </div>
      <div className={`${style.box} ${style.itemTwo}`}>
        <img src={Avatar} alt="Conference attendees photo" />
         <div className={style.userInfo}>
          <p>Name</p>
          <p>Link for github</p>
         </div>
      </div>
      <div className={`${style.box} ${style.itemThree}`}>
        <p className={style.generatedNumber}>{ticketNumber}</p>
      </div>
      {/* <img src={Ticket} alt="ticket" /> */}
    </div>
  );
};

export default GeneratedTicket;
