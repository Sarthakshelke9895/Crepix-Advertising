import React from "react";
import "./FloatingButtons.css";
import callIcon from "../Assets/phoneicon.png";
import whatsappIcon from "../Assets/whatsapp.png";

const FloatingButtons = () => {

  const phoneNumber = "9960161934";
  const phonewhatsapp = "918767143132"

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {

    const message =
      "Hello, I would like to enquire about your cab services.";

    window.open(
      `https://wa.me/${phonewhatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

  };

  return (

    <div className="floating-buttons">

      <button
        className="call-btn"
        onClick={handleCall}
      >
        <img
          src={callIcon}
          alt="Call"
        />
      </button>

      <button
        className="whatsapp-btn"
        onClick={handleWhatsApp}
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
        />
      </button>

    </div>

  );

};

export default FloatingButtons;