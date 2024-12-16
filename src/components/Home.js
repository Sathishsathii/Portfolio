// src/pages/Home.js
/* import React from 'react';
import './Home.css';
import Comic from './assets/comic.png';

const Home = () => {
  return (
    <section className="home">
      <div className="home-left">
        <h1 className="home-greeting">Hi,</h1>
        <h1 className="home-name">I’m Sathish Kumar</h1>
        <p className="home-title">Software Engineer</p>
        <p className="home-description">
          Massachusetts-based software engineer dedicated to building accessible, human-centered digital products.
        </p>
      </div>
      <div className="home-right">
        <img
          src= {Comic} // Replace with your image URL
          alt="Illustration of a software engineer"
          className="home-image"
        />
      </div>
    </section>
  );
};

export default Home; */


import React from 'react';
import './Home.css';
import Comic from './assets/comic.png';

const Home = () => {
  const name = "I’m Sathish Kumar"; // Name to animate
  return (
    <section id="portfolio" className="home">
      <div className="home-left">
        <h1 className="home-greeting">Hi,</h1>
        <h1 className="home-name">
          {name.split("").map((char, index) => (
            <span
              key={index}
              className={`letter ${char === " " ? "space" : ""}`} // Add class for spaces
              style={{ animationDelay: `${index * 0.1}s` }} // Delay for sequential animation
            >
              {char}
            </span>
          ))}
        </h1>
        <p className="home-title">Software Engineer</p>
        <p className="home-description">
          Massachusetts-based software engineer dedicated to building accessible, human-centered digital products.
        </p>
      </div>
      <div className="home-right">
        <img
          src={Comic} // Use the imported image
          alt="Comic illustration of a software engineer"
          className="home-image"
        />
      </div>
    </section>
  );
};

export default Home;



