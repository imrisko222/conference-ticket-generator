import React, { useState } from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Form from "./components/Form/Form";
import TicketComponent from "./components/Ticket/TicketComponent/TicketComponent";
import "./App.css";

function App() {
  const [formData, setFormData] = useState(null);

  return (
    <section className="appContainer">
      <Header />
      <HeroSection />
      {formData ? (
        <TicketComponent sendedFormData={formData} />
      ) : (
        <Form onSetFormData={setFormData} />
      )}
    </section>
  );
}

export default App;
