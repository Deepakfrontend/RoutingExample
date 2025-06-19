import React from 'react';
import '../Style/officelocation.css';

const Gurugram = () => {
  return (
    <div className="gurugram-container">
      <h3>Gurugram Office</h3>
      <p>Visit our Gurugram branch located in Cyber City.</p>
      <div className="map-wrapper">
        <iframe
          title="Gurugram Office Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7011.75943881486!2d77.08412352537152!3d28.495440073106993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1948b5ed2b7f%3A0x7cf69b43c47a3cb3!2sCyber%20City%2C%20DLF%20Phase%202%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1718705740272!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Gurugram;
