import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Form from "./components/Form/Form";
import "./App.css";

function App() {
  return (
    <section className="appContainer">
      <Header />
      <HeroSection />
      <Form />
    </section>
  );
}

export default App;
