import React from "react";
import "./Whychooseus.css";

import DriverIcon from '../Assets/driver.png'
import VehicleIcon from '../Assets/cleanvehicle.png'
import TimeIcon from '../Assets/ontime.png'
import PriceIcon from '../Assets/affordable.png'
import SupportIcon from '../Assets/callsupport.png'
import Gurantee from '../Assets/gurantee.png'

const reasons = [
  { id: 1, icon: DriverIcon, title: "Professional Drivers", desc: "Experienced and licensed drivers for safe journeys." },
  { id: 2, icon: VehicleIcon, title: "Clean Vehicles", desc: "Regularly sanitized and maintained cars." },
  { id: 3, icon: TimeIcon, title: "On-time Service", desc: "We respect your time and always arrive on schedule." },
  { id: 4, icon: PriceIcon, title: "Affordable Pricing", desc: "Transparent pricing with no hidden charges." },
  { id: 5, icon: SupportIcon, title: "24/7 Availability", desc: "Reach us anytime for bookings and enquiries." },
  { id: 6, icon: Gurantee, title: "Quality Guarantee", desc: "We stand behind our services with a quality guarantee." }

];

const Whychooseus = () => {
  return (
    <section className="why-us-section">
      <div className="section-header">
        <h2>Why Choose Us</h2>
        <p>We provide premium car rental services that you can trust.</p>
      </div>

      <div className="reasons-grid">
        {reasons.map((reason) => (
          <div key={reason.id} className="reason-card">
            <div className="icon-wrapper">
              <img src={reason.icon} alt={reason.title} />
            </div>
            <h3>{reason.title}</h3>
            <p>{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whychooseus;