// src/pages/Education.js
import React from 'react';
import './Education.css';
import TreeImage from './assets/education.png'; // Replace with your image path

const Education = () => {
  return (
    <section id="portfolio" className="education">
      <div className="education-container">
        {/* Title */}
        <h1 className="education-title">Education</h1>

        {/* Timeline Section */}
        <div className="education-timeline">
          {/* Bachelor's */}
          <div className="timeline-item">
            <h2 className="degree-title">Bachelor's</h2>
            <div className="timeline-content">
              <p className="degree-info">
                <strong>Computer Science and Engineering</strong>
                <br />
                Panimalar Engineering College
                <br />
                <span className="graduation-date">Graduated: 2019</span>
              </p>
            </div>
          </div>

          {/* Master's */}
          <div className="timeline-item">
            <h2 className="degree-title">Master's</h2>
            <div className="timeline-content">
              <p className="degree-info">
                <strong>Computer Science</strong>
                <br />
                Clark University, Worcester, MA
                <br />
                <span className="graduation-date">Expected Graduation: May 2025</span>
              </p>
            </div>
          </div>

          {/* Doctorate */}
          {/*<div className="timeline-item">
            <h2 className="degree-title">Doctorate</h2>
            <div className="timeline-content">
              <p className="degree-info">To be decided :)</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Illustration Section */}
      <div className="education-illustration">
        <img src={TreeImage} alt="Education Illustration" />
      </div>
    </section>
  );
};

export default Education;
