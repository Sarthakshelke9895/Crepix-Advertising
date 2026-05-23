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
      title: "Printing Services",
      description: "High-quality printing solutions for all your needs.",
      details: ["Visting Card", "Brochure", "Banner", "Flex Printing", "Sticker Printing", "T-shirt Printing"]
    },
    {
      image: car2,
      title: "Design Services",
      description: "Creative design solutions to elevate your brand.",
      details: ["Logo Design", "Brand Identity", "Custom Graphics", "Packaging Design", "Social Media Graphics", "Banner Design"]
    },
    {
      image: car3,
      title: "Marketing Solutions",
      description: "Effective marketing strategies to grow your business.",
      details: ["Digital",  "Social Media ", "Email", "Content Creation", "SEO", "PPC Advertising"]
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
  const message = `Hi, I want to enquire about Crepix services.`;
  // Replace 919XXXXXXXXX with your full number (country code + number)
  window.open(`https://wa.me/919356309246?text=${encodeURIComponent(message)}`);
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

            <img src={slide.image} alt={slide.title} loading="lazy"  />

            <div className="overlay"></div>

            <div className="caption">
              <div className="caption-left">
              <h1>{slide.title}</h1>

              <p>{slide.description}</p>

              <button className="book-btn-hero"  onClick={handleEnquiry}>
                Enquire Now
                <img src={arrow} alt="Arrow" className='arrow2' />
              </button>
              </div>





              <div className="caption-right"> 
             <div className="Details">
                <ul className="details-grid">
                  {slide.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              </div>


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