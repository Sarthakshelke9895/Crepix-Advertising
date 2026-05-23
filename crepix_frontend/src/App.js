import "./App.css";
import { useState } from "react";

import Cars from "./Cars/Cars";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Services from "./Services/Services";
import Whychooseus from "./Whychooseus/Whychooseus";
import Reviews from "./Reviews/Reviews";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import FloatingButtons from "./FloatingButtons/FloatingButtons";

function App() {
  const defaultService = {
    id: "local",
    title: "Local City Rides",
  };

  const [selectedService, setSelectedService] = useState(defaultService);

  const handleBook = (car, service) => {
    const activeService = service || selectedService || defaultService;

    const message = `Hi, I want to book ${car.name} for ${activeService.title} service.`;

    window.open(
      `https://wa.me/918767143132?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="Hello">
      <Navbar />
      <Hero />
      <Services onSelectService={setSelectedService} />
      <Cars selectedService={selectedService} onBook={handleBook} />
      <Whychooseus />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;