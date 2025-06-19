import React from 'react';
import '../Style/About.css'; // optional, if you're using separate CSS files

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About MyOffice</h1>
        <p>We innovate. We deliver. We lead.</p>
      </section>

      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          MyOffice is a growing technology and consulting company operating across Noida, Gurugram, and Bangalore. 
          We specialize in delivering scalable, modern digital solutions tailored to industry needs.
        </p>

        <h2>What We Do</h2>
        <p>
          Our services range from software development and IT consulting to UI/UX design and cloud solutions.
          Our team is passionate about turning ideas into impact.
        </p>
      </section>
    </div>
  );
};

export default About;
