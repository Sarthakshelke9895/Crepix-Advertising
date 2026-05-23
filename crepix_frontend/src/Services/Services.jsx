import React from "react";
import "./Services.css";
import Service1 from "../Assets/service1.png";
import Service2 from "../Assets/service2.png";
import Service3 from "../Assets/service3.png";  
import Service4 from "../Assets/service4.png";
import Service5 from "../Assets/service5.png";
import Service6 from "../Assets/service6.png";

const Services = ({ onSelectService }) => {

  const services = [
    {
      id: "local",
      image: Service1,
      title: "Local City Rides",
      description: "Fast and affordable rides for daily travel,across the city with ease."
    },
    {
      id: "airport",
     image: Service2,
      title: "Airport Pickup & Drop",
      description: "On-time airport transfers with professional drivers."
    },
    {
      id: "outstation",
      image: Service3,
      title: "Outstation Travel",
      description: "Comfortable long-distance journeys."
    },
    {
      id: "corporate",
      image: Service4,
      title: "Corporate Travel",
      description: "Reliable transportation for businesses."
    },
    {
      id: "hourly",
      image : Service5,
      title: "Hourly Rental",
      description: "Flexible booking based on your schedule."
    },
    {
      id: "events",
      image: Service6,
      title: "Wedding / Events",
      description: "Premium cars for special occasions."
    }
  ];
const handleClick = (service) => {

  onSelectService(service);

  setTimeout(() => {

    const carsSection = document.getElementById("car");

    if (carsSection) {

      const yOffset = -200;

      const y =
        carsSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });

    }

  }, 120);

};

  return (

    <section className="services fade-in" id="services">

      <div className="services-header">

        <h2>Our Services</h2>

        <p>
          Choose the service that fits your journey.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service) => (

          <div
            key={service.id}
            className="service-card"
            onClick={() => handleClick(service)}
          >

            <div className="service-icon">
                <img src={service.image} alt={service.title}  className="service-card-images" />
            </div>

            <h3>
              {service.title}
            </h3>

            <p id="service-description">
              {service.description}
            </p>

          </div>

        ))}

      </div>

    </section>

  );

};

export default Services;