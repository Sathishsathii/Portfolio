/*import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-container">
        
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p>Email: <a href="mailto:sathishsathii.gs@gmail.com">sathishsathii.gs@gmail.com</a></p>
          <p>Phone: +1 (774)701-3737</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
        </div>

        
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact; */

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3iaxq7t", // Replace with your EmailJS service ID
        "template_j78090b", // Replace with your EmailJS template ID
        form.current,
        "6LqNYAuuNosoKHYya" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Message failed to send. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h1 className="contact-title">Get in touch</h1>
      <div className="contact-container">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

