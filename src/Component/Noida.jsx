import React from "react";
import "../Style/officelocation.css";

const Noida = () => {
  return (
    <div className="noida-container">
      <h3>Noida Office</h3>
      <p>Visit our Noida branch located in Sector 62.</p>
      <div className="map-wrapper">
        <iframe
          title="Noida Office Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.428329260826!2d77.3598754!3d28.6138955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56b8c304a33%3A0x7f43c7b2382c6f1e!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1681199324356!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Noida;
