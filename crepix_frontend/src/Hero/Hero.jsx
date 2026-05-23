import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";

import car1 from "../Assets/car1.jpg";
import car2 from "../Assets/car2.jpg";
import car3 from "../Assets/car3.jpg";
import arrow from '../Assets/arrow.png'


const Hero = () => {

  const slides = [
    {
      image: car1,
      title: "Reliable City Rides",
      description: "Comfortable and safe travel for daily transportation."
    },
    {
      image: car2,
      title: "Airport Pickup Service",
      description: "On-time pickup with professional drivers."
    },
    {
      image: car3,
      title: "Outstation Travel",
      description: "Travel long distances safely and comfortably."
    }
  ];

  const extendedSlides = [...slides, slides[0]];

  const [current, setCurrent] = useState(0);

  const intervalRef = useRef(null);

  const startAutoSlide = () => {

    intervalRef.current = setInterval(() => {

      setCurrent(prev => prev + 1);

    }, 4000);

  };

  const stopAutoSlide = () => {

    clearInterval(intervalRef.current);

  };

  useEffect(() => {

    startAutoSlide();

    return () => stopAutoSlide();

  }, []);

  useEffect(() => {

    if (current === slides.length) {

      setTimeout(() => {

        document.querySelector(".carousel-track").style.transition = "none";

        setCurrent(0);

        setTimeout(() => {

          document.querySelector(".carousel-track").style.transition = "transform 0.7s ease";

        }, 50);

      }, 700);

    }

  }, [current, slides.length]);
    const handleEnquiry = () => {
  const message = `Hi, I want to enquire about your car services.`;
  // Replace 919XXXXXXXXX with your full number (country code + number)
  window.open(`https://wa.me/918767143132?text=${encodeURIComponent(message)}`);
};

  return (

    <section
    id="home"
      className="hero"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >

      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${current * 100}%)`
        }}
      >

        {extendedSlides.map((slide, index) => (

          <div className="slide" key={index}>

            <img src={slide.image} alt={slide.title} />

            <div className="overlay"></div>

            <div className="caption">

              <h1>{slide.title}</h1>

              <p>{slide.description}</p>

              <button className="book-btn-hero"  onClick={handleEnquiry}>
                Book Now
                <img src={arrow} alt="Arrow" className='arrow2' />
              </button>

            </div>

          </div>

        ))}

      </div>

      <div className="dots">

        {slides.map((_, index) => (

          <span
            key={index}
            className={index === current % slides.length ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>

        ))}

      </div>

 

    </section>

  );

};

export default Hero;