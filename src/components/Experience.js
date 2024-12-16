import React from 'react';
import './Experience.css';
import ExperienceImage from './assets/exper.png'; 

const Experience = () => {
  return (
    <section id="experience" className="experience">
      {/* Left Image Section */}
      <div className="experience-image">
        <img src={ExperienceImage} alt="Experience Illustration" />
      </div>

      {/* Right Text Section */}
      <div className="experience-container">
        <h1 className="experience-title">Experience</h1>

        {/* Job 1 */}
        <div className="job">
          <h2 className="job-title">Software Engineer Intern</h2>
          <p className="job-company">Tata Consultancy Services</p>
          <p className="job-duration">June 2020 - August 2022</p>
          <ul className="job-responsibilities">
            <li>Completed an intensive training program that provided a strong foundation in software development, covering various programming languages, software development methodologies, and hands-on experience with project management practices.</li>
            <li>Through this training, I gained expertise in the software development lifecycle (SDLC), including designing, developing, and testing custom software solutions across diverse system components and applications..</li>
            <li>I am proficient in creating implementation and integration strategies that optimize efficiency and align with project goals.</li>
            <li>Additionally, I have experience translating system requirements into design specifications, supporting application release installations, and adhering to programming standards and interface specifications while delivering robust and efficient software solutions.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
