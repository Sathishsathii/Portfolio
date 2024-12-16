import React from 'react';
import './Skills.css';
import pythonLogo from './assets/python.png'; 
import jsLogo from './assets/js.png';
import tsLogo from './assets/ts.png';
import sqlLogo from './assets/sql.png';
import angularLogo from './assets/angular.png';
import reactLogo from './assets/react.png';
//import automationLogo from './assets/automation.png';
import gitLogo from './assets/git.png';
import mysqlLogo from './assets/mysql.png';
import postgresqlLogo from './assets/postgres.png';
import awsLogo from './assets/aws.png';
import dockerLogo from './assets/docker.png';
import Cimage from './assets/C++.png';
import java from './assets/java.png';
import Jiralogo from './assets/jira.jpg';
import Kubernetslogo from './assets/kubernets.png';


const Skills = () => {
  return (
    <section id="check" className="skills">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-container">
        {/* Programming Languages */}
        <div className="skills-category">
          <h2 className="category-title">Programming Languages</h2>
          <div className="skills-list">
             <img src={Cimage} alt="TypeScript" className="skill-logo" />
            <img src={pythonLogo} alt="Python" className="skill-logo" />
            <img src={jsLogo} alt="JavaScript" className="skill-logo" />
            <img src={java} alt="TypeScript" className="skill-logo" />
            <img src={tsLogo} alt="TypeScript" className="skill-logo" />
            <img src={sqlLogo} alt="SQL" className="skill-logo" />
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="skills-category">
          <h2 className="category-title">Frameworks & Libraries</h2>
          <div className="skills-list">
            <img src={angularLogo} alt="Angular" className="skill-logo" />
            <img src={reactLogo} alt="React" className="skill-logo" />
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="skills-category">
          <h2 className="category-title">Tools & Technologies</h2>
          <div className="skills-list">
            <img src={gitLogo} alt="Git" className="skill-logo" />
            <img src={mysqlLogo} alt="MySQL" className="skill-logo" />
            <img src={postgresqlLogo} alt="PostgreSQL" className="skill-logo" />
            <img src={Kubernetslogo} alt="Kubernets" className="skill-logo" />
            <img src={Jiralogo} alt="Jira" className="skill-logo" />
          </div>
        </div>

        {/* Cloud & Platforms */}
        <div className="skills-category">
          <h2 className="category-title">Cloud & Platforms</h2>
          <div className="skills-list">
            <img src={awsLogo} alt="AWS" className="skill-logo" />
            <img src={dockerLogo} alt="Docker" className="skill-logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
