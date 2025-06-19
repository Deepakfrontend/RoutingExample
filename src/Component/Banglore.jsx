import React from 'react';
import '../Style/officelocation.css';

const Banglore = () => {
  return (
    <div className="banglore-container">
      <h3>Banglore Office</h3>
      <p>Visit our Banglore branch located in Electronic City.</p>
      <div className="map-wrapper">
        <iframe
          title="Banglore Office Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62227.29263216445!2d77.61548420614707!3d12.845436110160388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6cfc228e727f%3A0x93d2f1d5fc4b2e91!2sElectronic%20City%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1718706443442!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Banglore;
