/*import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Logistics Application",
      description: "Developed a logistics application for real-time shipment booking and management using Angular.js, TypeScript, Python, and MySQL.",
      technologies: ["Angular.js", "TypeScript", "Python", "MySQL"],
    },
    {
      title: "Ticketing App",
      description: "Built a ticketing app with features like event creation, ticket management, and real-time updates using React and Node.js.",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Automation with RPA",
      description: "Designed and implemented RPA bots to automate repetitive tasks and improve operational efficiency using Automation Anywhere.",
      technologies: ["Automation Anywhere"],
    },
  ];

  return (
    <section id="projects" className="projects">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <h3 className="project-tech-title">Technologies:</h3>
            <ul className="project-tech-list">
              {project.technologies.map((tech, i) => (
                <li key={i} className="project-tech-item">{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; */

/*import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Logistics Application",
      description: "A real-time logistics app for shipment booking and management.",
      technologies: ["Angular.js", "TypeScript", "Python", "MySQL"],
      details: "Developed a logistics application that includes real-time shipment booking, partial and blind manifests, inbound and outbound delivery tracking, and detailed reporting features.",
      backgroundImage: "./components/assets/About.png"
    },
    {
      title: "Teaching Application website for Clark University",
      description: "An app for creating the hassle-free selection of Teaching Assistance(TA's) by the professor and management.",
      technologies: ["Python Flask", "SQL", "HTML", "CSS", "Java", "JavaScript", "Git", "Jira"],
      details: "We propose creating a user-friendly platform to simplify and improve the process involved in recruiting teaching assistants (TAs) at Clark University. Using this application, students can submit and track their TA applications whereas the faculty can review and validate those applications to finalize a TA for their respective course without any human intervention.",
    },
    {
      title: "Plasma Donor Application",
      description: "An website for the floks who needs the Plasma during the COVID-19.",
      technologies: ["IBM Cloud", "HTML", "JavaScript", "IBM Cloud Object Storage", "Python-Flask", "Kubernetes", "Docker", "IBM DB2", "IBM Container Registry"],
      details: "During the COVID-19 crisis, the requirement for plasma became a high priority, and the donor count has become low. Saving the donor information and helping the needy by notifying the current donor list would be a helping hand. Regarding the problem faced, an application is to be built that would take the donor details, store them, and inform them upon a request.",
    },
    {
        title: "Skin Lesion Segmentation Detection Using U-Net Architecture",
        description: "This Project aims to find the real skin melonoma by the categories of the cancer",
        technologies: ["Python", "U-Net Architecture", "CNN Architecture", "HTML", "CSS"],
        details: " The project aims to develop a deep learning model for skin cancer segmentation using convolutional neural networks (CNN). The goal of training the model with normal and mask photos is to detect patterns of skin cancer and precisely segment afflicted regions. The project examines several CNN architectures to attain the highest potential accuracy, hence aiding in the diagnosis of skin cancer in healthcare.",
      },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card"
          style={{ backgroundImage: `url(${project.backgroundImage})` }}>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <button className="show-more-button" onClick={() => openModal(project)}>
              Show More
            </button>
          </div>
        ))}
      </div>

      
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">{selectedProject.title}</h2>
            <p className="modal-details">{selectedProject.details}</p>
            <h3 className="modal-tech-title">Technologies:</h3>
            <ul className="modal-technologies">
              {selectedProject.technologies.map((tech, index) => (
                <li key={index} className="modal-tech-item">{tech}</li>
              ))}
            </ul>
            <button className="modal-close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects; */

import React, { useState } from 'react';
import './Projects.css';
import log from './assets/Logistics.png';
import TA from './assets/teach.png';
import Plasma from './assets/plasma.png';
import Skin from './assets/skin.png';

const Projects = () => {
  const projects = [
    {
      title: "Logistics Application",
      description: "A real-time logistics app for shipment booking and management.",
      technologies: ["Angular.js", "TypeScript", "Python", "MySQL"],
      details: "Developed a logistics application that includes real-time shipment booking, partial and blind manifests, inbound and outbound delivery tracking, and detailed reporting features.",
      backgroundImage:log, 
      backgroundPosition: "50% 80%",
    },
    {
      title: "Teaching Application website for Clark University",
      description: "An app for creating the hassle-free selection of Teaching Assistance(TA's) by the professor and management.",
      technologies: ["Python Flask", "SQL", "HTML", "CSS", "Java", "JavaScript", "Git", "Jira"],
      details: "We propose creating a user-friendly platform to simplify and improve the process involved in recruiting teaching assistants (TAs) at Clark University. Using this application, students can submit and track their TA applications whereas the faculty can review and validate those applications to finalize a TA for their respective course without any human intervention.",
      backgroundImage: TA, 
      backgroundPosition: "10%",
      backgroundSize: "70%",
    },
    {
      title: "Plasma Donor Application",
      description: "A website for the folks who need Plasma during the COVID-19 pandemic.",
      technologies: ["IBM Cloud", "HTML", "JavaScript", "IBM Cloud Object Storage", "Python-Flask", "Kubernetes", "Docker", "IBM DB2", "IBM Container Registry"],
      details: "During the COVID-19 crisis, the requirement for plasma became a high priority, and the donor count has become low. Saving the donor information and helping the needy by notifying the current donor list would be a helping hand. Regarding the problem faced, an application is to be built that would take the donor details, store them, and inform them upon a request.",
      backgroundImage: Plasma, 
    },
    {
      title: "Skin Lesion Segmentation Detection Using U-Net Architecture",
      description: "This project aims to find the real skin melanoma by the categories of cancer.",
      technologies: ["Python", "U-Net Architecture", "CNN Architecture", "HTML", "CSS"],
      details: "The project aims to develop a deep learning model for skin cancer segmentation using convolutional neural networks (CNN). The goal of training the model with normal and mask photos is to detect patterns of skin cancer and precisely segment afflicted regions. The project examines several CNN architectures to attain the highest potential accuracy, hence aiding in the diagnosis of skin cancer in healthcare.",
      backgroundImage: Skin, 
      backgroundPosition: "10%",
      backgroundSize: "40%",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ backgroundImage: `url(${project.backgroundImage})`,backgroundPosition: project.backgroundPosition,
            backgroundSize: project.backgroundSize, }}
          >
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <button className="show-more-button" onClick={() => openModal(project)}>
              Show More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `url(${selectedProject.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#fff", // Ensure text is visible over the background
            }}
          >
            <h2 className="modal-title">{selectedProject.title}</h2>
            <p className="modal-details">{selectedProject.details}</p>
            <h3 className="modal-tech-title">Technologies:</h3>
            <ul className="modal-technologies">
              {selectedProject.technologies.map((tech, index) => (
                <li key={index} className="modal-tech-item">{tech}</li>
              ))}
            </ul>
            <button className="modal-close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

