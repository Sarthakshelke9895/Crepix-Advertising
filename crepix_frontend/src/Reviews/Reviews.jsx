import React from "react";
import "./Reviews.css";
import  { useEffect, useState } from "react";
import StarIcon from "../Assets/star.png"; // small star icon for rating
import person1 from "../Assets/person1.jpg";
import person2 from "../Assets/person2.jpg";
import person3 from "../Assets/person3.jpg";

const reviews = [
  { id: 1, image: person1, name: "Prajwal Chormale", rating: 5, message: "Excellent service! The car was clean and the driver was very professional." },
  { id: 2, image: person2, name: "Shubham Yadav", rating: 4, message: "Smooth ride and on-time pickup. Highly recommend!" },
  { id: 3, image: person3, name: "Sunil Magar", rating: 5, message: "Affordable pricing and friendly drivers. Will book again." },
];

const ourWork = [
  { id: 1, number: 1000, suffix: "+", label: "Cabs Delivered" },
  { id: 2, number: 500, suffix: "+", label: "Happy Customers" },
  { id: 3, number: 250, suffix: "+", label: "Corporate Trips" },
  { id: 4, number: 50, suffix: "+", label: "Events Served" },
];


const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1500;
    const stepTime = 20;

    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <h3>
      {count}
      {suffix}
    </h3>
  );
};


const Reviews = () => {
    
  return (
    <section className="reviews-section" id="reviews">
      <div className="section-header">
        <h2>About us</h2>
        <p>See why our customers love Rohan Car Services</p>
      </div>
      <div className="our-work">
        {ourWork.map((item) => (
          <div key={item.id} className="work-card">
            <Counter
            target={item.number}
            suffix={item.suffix}
            />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      <div className="reviews-grid">
        
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-rating">
                <div className="name-and-icon">
            <img src={review.image} alt={review.name} className="review-image" />
            <div className="name-and-rating">
                <h4 className="reviewer-name">{review.name}</h4>
                <div className="star">
                 {Array.from({ length: review.rating }).map((_, i) => (
                <img key={i} src={StarIcon} alt="star" />
              ))}
                   </div>
            </div>

                </div>
            </div>
            <p className="review-message">"{review.message}"</p>

          </div>
        ))}
      </div>


    </section>
  );
};

export default Reviews;