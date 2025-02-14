import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Form from "./components/Form/Form";
import TicketComponent from "./components/Ticket/TicketComponent/TicketComponent";
import "./App.css";

function App() {
  return (
    <section className="appContainer">
      {/* <Header />
      <HeroSection />
      <Form /> */}
<TicketComponent />
    </section>
  );
}

export default App;
