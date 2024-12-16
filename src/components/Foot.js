import React from 'react';
import './Foot.css';
import { useState, useEffect } from 'react';
//import githubLogo from './assets/git.png'; // Path to GitHub logo
//import linkedinLogo from './assets/linkedin.png'; // Path to LinkedIn logo
//import instalogo from './assets/insta.png'; // Path to Instagram logo

/* const Foot = () => {
  const [pageViews, setPageViews] = useState(0);

  useEffect(() => {
    const storedPageViews = localStorage.getItem('pageViews');

    if (storedPageViews) {
      setPageViews(parseInt(storedPageViews, 10));
    }

    setPageViews((prevPageViews) => {
      const newPageViews = prevPageViews + 1;
      localStorage.setItem('pageViews', newPageViews.toString());
      return newPageViews;
    });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-left">
          <p>Handcrafted By</p>
        </div>

        
        <div className="footer-info">
          <p>Sathish Kumar Gatamani Sekar</p>
        </div>
        <div className="visitor-counter">
        <p>Visitors: {pageViews}</p>
      </div>

        Social Media Links 
        <div className="social-links">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="social-logo" />
          </a>
          <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instalogo} alt="Instagram" className="social-logo" />
          </a>
        </div> 
      </div>
    </footer>
  );
};

export default Foot;*/



const Foot = () => {
  const [pageViews, setPageViews] = useState(0);

  useEffect(() => {
    const storedPageViews = localStorage.getItem('pageViews');

    if (storedPageViews) {
      setPageViews(parseInt(storedPageViews, 10));
    }

    setPageViews((prevPageViews) => {
      const newPageViews = prevPageViews + 1;
      localStorage.setItem('pageViews', newPageViews.toString());
      return newPageViews;
    });
  }, []);

  return (
    <footer className="footer">
      {/* Left Section */}
      <div className="footer-left">
        <p>Handcrafted by: Sathish Kumar Gatamani Sekar</p>
      </div>

      {/* Center Section */}
      <div className="footer-info">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>

      {/* Visitor Counter */}
      <div className="visitor-counter">
        <p>{pageViews.toString().padStart(8, '0')}</p>
      </div>
    </footer>
  );
};

export default Foot;

