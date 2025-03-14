import React from "react";
import style from "./TicketHeroSection.module.css";

const TicketHeroSection = ({ sendedFormData }) => {
  return (
    <div className={style.heroContainer}>
      <h2>
        Congrats, <span className={style.name}>{sendedFormData.fullName}!</span>{" "}
        Your ticket is ready.
      </h2>
      <p>
        We've emailed your ticket to{" "}
        <span className={style.mail}>{sendedFormData.email}</span> and will send
        updates in the run up to the event.
      </p>
    </div>
  );
};

export default TicketHeroSection;
