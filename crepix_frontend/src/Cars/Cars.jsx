import React from "react";
import "./Cars.css";

import arrow from "../Assets/arrow.png";
import swift from "../Assets/Swift-Dzire.jpg";
import ertiga from "../Assets/Ertiga.jpg";
import innova from "../Assets/Innova-Crysta.jpg";
import dzire from "../Assets/Dzire.jpg";
import mercedes from "../Assets/Mercedez-e-class.jpg";
import bmw from "../Assets/BMW.jpg";
import hyundai from '../../src/Assets/hyundai.jpg';

import seat from "../Assets/seat.png";
import fuel from "../Assets/fuel.png";
import ruppee from "../Assets/rupee.png";

const Cars = ({ selectedService, onBook }) => {
  const carData = {
    local: [
      {
        id: 1,
        name: "Swift Dzire",
        seats: 5,
        fuel: " CNG + Petrol",
        price: "₹2400",
        image: swift,
      },
      {
        id: 2,
        name: "Ertiga",
        seats: 6,
        fuel: "CNG + Petrol",
        price: "₹2700",
        image: ertiga,
      },
       {
        id: 3,
        name: "Innova Crysta",
        seats: 7,
        fuel: "Diesel",
        price: "₹3500",
        image: innova,
      },
            {
        id: 9,
        name: "Hyundai Aura",
        seats: 5,
        fuel: "CNG + Petrol",
        price: "₹2400",
        image: hyundai,
      },
      
    ],
    airport: [
      {
        id: 3,
        name: "Innova Crysta",
        seats: 7,
        fuel: "Diesel",
        price: "₹5000",
        image: innova,
      },
      {
        id: 4,
        name: "Swift Dzire",
        seats: 4,
        fuel: "CNG + Petrol",
        price: "₹3000",
        image: dzire,
      },
            {
        id: 2,
        name: "Ertiga",
        seats: 7,
        fuel: "CNG + Petrol",
        price: "₹4000",
        image: ertiga,
      },
    ],
    outstation: [
      {
        id: 5,
        name: "Innova Crysta",
        seats: 7,
        fuel: "Diesel",
        price: "₹20/km",
        image: innova,
      },
            {
        id: 4,
        name: "Swift Dzire",
        seats: 5,
        fuel: "CNG + Petrol",
        price: "₹13/km",
        image: dzire,
      },
            {
        id: 2,
        name: "Ertiga",
        seats: 7,
        fuel: "CNG + Petrol",
        price: "₹15/km",
        image: ertiga,
      },
      {
        id: 9,
        name: "Hyundai Aura",
        seats: 5,
        fuel: "CNG + Petrol",
        price: "₹13/km",
        image: hyundai,
      },
      
    ],

    corporate: [
      {
        id: 6,
        name: "Mercedes E-Class",
        seats: 4,
        fuel: "Petrol",
        price: "₹4500/day",
        image: mercedes,
      },
    ],
    hourly: [
     {
        id: 1,
        name: "Swift Dzire",
        seats: 5,
        fuel: " CNG + Petrol",
        price: "₹2400",
        image: swift,
      },
      {
        id: 2,
        name: "Ertiga",
        seats: 6,
        fuel: "CNG + Petrol",
        price: "₹2700",
        image: ertiga,
      },
       {
        id: 3,
        name: "Innova Crysta",
        seats: 7,
        fuel: "Diesel",
        price: "₹3500",
        image: innova,
      },
            {
        id: 9,
        name: "Hyundai Aura",
        seats: 5,
        fuel: "CNG + Petrol",
        price: "₹2400",
        image: hyundai,
      },
      
    ],
    events: [
      {
        id: 8,
        name: "BMW 7 Series",
        seats: 4,
        fuel: "Petrol",
        price: "₹6000/day",
        image: bmw,
      },
    ],
  };

  const defaultService = {
    id: "local",
    title: "Local City Rides",
  };

  const activeService = selectedService || defaultService;
  const cars = carData[activeService.id] || [];

  const handleBookClick = (car) => {
    if (onBook) {
      onBook(car, activeService);
    }
  };

  return (
    <section id="car" className="cars-section">
      <div className="cars-header">
        <h2>Available Cars for {activeService.title}</h2>
        <p>Choose a car and continue booking.</p>
      </div>

      <div className="cars-grid">
        {cars.length > 0 ? (
          cars.map((car) => (
            <div key={car.id} className="car-card">
              <div className="car-image">
                <img src={car.image} alt={car.name} />
              </div>

              <div className="car-details gradient-overlay">
                <div className="card-info">
                  <div className="name">
                    <h3>{car.name}</h3>

                    <div className="info">
                      <div className="logo-and-type">
                        <img src={seat} alt="Seats" className="icon-car" />
                        <span>{car.seats}</span>
                      </div>

                      <div className="logo-and-type">
                        <img src={fuel} alt="Fuel" className="icon-car" />
                        <span>{car.fuel}</span>
                      </div>

                      <div className="logo-and-type">
                        <img src={ruppee} alt="Price" className="icon-car" />
                        <span>{car.price}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    className="book-btn-car"
                    onClick={() => handleBookClick(car)}
                  >
                    Book Now
                    <img src={arrow} alt="Arrow" className="arrow3" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No cars available for this service.</p>
        )}
      </div>
    </section>
  );
};

export default Cars;