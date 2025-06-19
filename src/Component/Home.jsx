import React from 'react';
import '../Style/Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to MyOffice</h1>
        <p>Your trusted partner for digital solutions across India.</p>
      </section>

      <section className="info-section">
        <h2>Our Mission</h2>
        <p>
          At MyOffice, we aim to provide top-tier services and innovative solutions to our clients across Noida, Gurugram, and Bangalore. Explore our site to learn more about our team, projects, and how to get in touch.
        </p>
      </section>
    </div>
  );
};

export default Home;
