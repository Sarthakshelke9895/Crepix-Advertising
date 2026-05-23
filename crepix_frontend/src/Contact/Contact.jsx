import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {

    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "9bbd17cf-e817-43bf-930c-f57e9d4f8131"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    if (data.success) {

      setResult("Sent ! We will get back to you soon.");

      event.target.reset();

    }

    else {

      console.log("Error", data);

      setResult("Something went wrong");

    }

  };

  return (

    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* LEFT SIDE — DETAILS + MAP */}

        <div className="contact-left">

          <h2>
            Contact Us
          </h2>

          <p>
            Reach out to us for bookings, enquiries, or travel assistance.
            We are available 24/7.
          </p>

          <div className="contact-details">

            <div className="contact-item">
              <h4>Name</h4>
              <p>Rohan Cab Service</p>
            </div>

            <div className="contact-item">
              <h4>Email</h4>
              <p>rohancarenterprises@gmail.com</p>
            </div>

            <div className="contact-item">
              <h4>Phone</h4>
              <p> +91 9960161934 </p>
            </div>

            <div className="contact-item">
              <h4>Location</h4>
              <p>
              Dhayreshwar Mandir, Benkar Nagar, Dhayari, Pune, Maharashtra 411041
              </p>
            </div>

          </div>

          <div className="map-container">

            <iframe
              title="Business Location"
              src="https://www.google.com/maps?q=Pooja+Heights+Sharda+Nagar+Dhayari+Pune&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </div>

        {/* RIGHT SIDE — FORM */}

        <div className="contact-right">

          <h2>
            Send Enquiry
          </h2>

          <form onSubmit={onSubmit} className="contact-form">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              pattern="[0-9]{10}"
              maxLength="10"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>

              <div className="send-and-message">
              <button type="submit">
                Send Enquiry
              </button>
                <span className="form-result">
                  {result}
                </span>
              </div>
          

          </form>

        

        </div>

      </div>

    </section>

  );

};

export default Contact;