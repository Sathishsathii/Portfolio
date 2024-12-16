// src/pages/About.js
/*import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about"> 
      <div className="about-container">
        <h1 className="about-title">About Me</h1>

        <div className="about-section">
          <h2 className="section-title">Professional Summary</h2>
          <p className="about-text">
            Motivated SPS graduate student at Clark University with a robust academic background in Computer Science,
            seeking to leverage technical expertise in front-end and back-end development to contribute to innovative
            projects. Passionate about simplifying processes and delivering impactful solutions with a keen focus on
            design and user experience.
          </p>
        </div>

        
        <div className="about-section">
          <h2 className="section-title">Education</h2>
          <ul className="education-list">
            <li>
              <strong>Master of Science in Computer Science</strong>  
              <br />
              Clark University, Worcester, MA  
              <br />
              <span className="education-date">Expected Graduation: May 2025</span>
            </li>
            <li>
              <strong>Bachelor of Engineering in Computer Science</strong>  
              <br />
              Anna University
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About; */

// src/pages/About.js
import React from 'react';
import './About.css';
import ProfileImage from './assets/aboutt.png'; // Import your image

const About = () => {
  return (
    <section id="portfolio" className="about">
      {/* About Image */}
      <div className="about-image">
        <img src={ProfileImage} alt="Profile" />
      </div>

      {/* About Content */}
      <div className="about-container">
        <h1 className="about-title">About Me</h1>

        {/* Professional Summary */}
        <div className="about-section">
          <p className="about-text">
            I’m a Software Engineer currently based in the United States. With a strong foundation in computer science
            and software engineering, I have a passion for designing user-friendly interfaces and developing seamless,
            full-stack applications. My expertise spans both front-end and back-end development, allowing me to deliver
            dynamic and scalable solutions for a variety of technical challenges.
          </p>
          <p className="about-text">
            I am currently pursuing my Master’s degree in Computer Science at Clark University, which has allowed me to
            deepen my technical knowledge and gain a fresh perspective on innovative problem-solving in the tech
            industry. Previously, I completed my Bachelor’s in Computer Science at Anna University, where I built a
            solid understanding of core computing principles and modern technologies.
          </p>
          
          
        </div>

        
      </div>
    </section>
  );
};

export default About;
