import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'; 
import Foot from './components/Foot';

function App() {
  useEffect(() => {
    // Scroll to the top on page refresh
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact /> 
      <Foot />
    </div>
  );
}

export default App;
