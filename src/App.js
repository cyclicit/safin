



import React, { useState, useEffect } from 'react';
import './App.css';
import { FaLinkedin, FaGithub, FaTwitter, FaArrowDown, FaMoon, FaSun } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiAward, FiBriefcase, FiUser, FiCode } from 'react-icons/fi';
import rrr from '../src/dp2.jpg'
import ttt from '../src/ttt.jpg'
import ppp from '../src/ppp.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or user preference
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [status, setStatus] = useState("");

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'achievements', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mblovkyv", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your message.");
    }
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div onClick={() => {
            scrollToSection('home');
            setIsMenuOpen(false);
          }} className="logo">Safin<span>Syam</span></div>

          <button className="theme-toggle" onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          
          {/* Nav Links */}
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'achievements', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                className={activeSection === section ? 'active' : ''}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            
          </div>

          {/* Mobile menu toggle */}
          <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Rest of your components remain the same */}
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className='container'>
       <div className="hero-content">
          <div className="hero-text">
            <h4>Hello, I'm</h4>
            <h1>Safin Ahmed Syam</h1>
            <h2>Funder of <a onClick={() => window.open("https://cyclicit.netlify.app", "_blank")}
       
       style={{
         color: '#4a89dc',
         textDecoration: 'none',
         fontWeight: 600
       }}
     >
       CycliciT
     </a></h2>
            <p>Developer | Innovator | Entrepreneur</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('contact')}>Contact Me</button>
              <button className="btn-secondary" onClick={() => scrollToSection('about')}>Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper mobile-spacer">
              <div className="glow"></div>
              <div className="profile-image"></div>
            </div>
          </div>
        </div>
        <div className="scroll-down" onClick={() => scrollToSection('about')}>
          <FaArrowDown className="bounce" />
        </div>
       </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
    <h2 className="section-title">About <span>Me</span></h2>

    {/* Responsive Flex Layout */}
    <div
      className="about-content"
      style={{
        display: 'flex',
        flexDirection: 'column', // mobile-first: column
        gap: '2rem',
      }}
    >
      {/* Image Section */}
      <div className="about-image" style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
        <div
          className="image-bg"
          style={{
            backgroundImage: `url(${rrr})`,
            
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '300px',
            borderRadius: '10px',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
          }}
        ></div>
      </div>

      {/* Text Section */}
      <div className="about-text">
        <h3>Who am I?</h3>
        <p>
          I'm Safin Ahmed Syam, the CEO and founder of Cyclic IT, a leading technology solutions provider.
          With over a decade of experience in the tech industry, I've dedicated my career to driving innovation
          and delivering cutting-edge solutions to complex problems.
        </p>
        <p>
          My journey began as a passionate developer, and through years of hard work and dedication,
          I've grown into a technology leader who builds teams that create impactful products.
        </p>
        <div className="about-details">
          <div className="detail-item">
            <FiUser className="detail-icon" />
            <div>
              <h4>Name:</h4>
              <p>Safin Ahmed Syam</p>
            </div>
          </div>
          <div className="detail-item">
            <HiOutlineMail className="detail-icon" />
            <div>
              <h4>Email:</h4>
              <p>safinahmedsiam@gmail.com</p>
            </div>
          </div>
          <div className="detail-item">
            <FiBriefcase className="detail-icon" />
            <div>
              <h4>Position:</h4>
              <p>CEO & Founder</p>
            </div>
          </div>
          <div className="detail-item">
            <FiCode className="detail-icon" />
            <div>
              <h4>Company:</h4>
              <p><a onClick={() => window.open("https://cyclicit.netlify.app", "_blank")}
       
       style={{
         color: '#4a89dc',
         textDecoration: 'none',
         fontWeight: 600
       }}
     >
       CycliciT
     </a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements">
        <div className="container">
    <h2 className="section-title">My <span>Achievements</span></h2>
    <div className="achievements-grid">
      {/* Card 1 */}
      <div 
        className="achievement-card" 
        style={{ 
          backgroundImage: `url(${ttt})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="achievement-content">
          <div className="achievement-icon"><FiAward /></div>
          <h3>Complete Web Development Course 2023</h3>
          <p>Recognized by Programming-Hero</p>
        </div>
      </div>
      
      {/* Card 2 */}
      <div 
        className="achievement-card" 
       style={{ 
          backgroundImage:  `url(${ppp})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="achievement-content">
          <div className="achievement-icon"><FiAward /></div>
          <h3>Responsive</h3>
          <p>Expart in making Responsive designs</p>
        </div>
      </div>
      
      {/* Card 3 */}
      <div 
        className="achievement-card" 
        style={{ 
          backgroundImage: 'url(https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2025/03/11/img_3642_0.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="achievement-content">
          <div className="achievement-icon"><FiAward /></div>
          <h3>CSE</h3>
          <p>Brac University</p>
        </div>
      </div>
      
     { /*  */}
    </div>
  </div>
        
        
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Notable <span>Projects</span></h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image" style={{backgroundImage: `url(https://i.ibb.co.com/LD5vTV8d/Screenshot-2025-05-05-104617.png)`  }}>
                <div className="project-overlay">
                  <h3>College Website</h3>
                  <p>A fully functional Project</p>
                  <button  onClick={() => window.open("https://shahidabulkashemcollege.com", "_blank")} className="btn-small">View Details</button>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image" style={{backgroundImage: `url(https://i.ibb.co.com/p6DQyhJ7/Screenshot-2025-05-05-105046.png)`}}>
                <div className="project-overlay">
                  <h3>Pet E-Commerce</h3>
                  <p>Prototype</p>
                  <button onClick={() => window.open("https://petandvet.netlify.app", "_blank")} className="btn-small">View Details</button>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image" style={{backgroundImage: `url(https://i.ibb.co.com/RpF5cSnQ/Screenshot-2025-05-06-232806.png)`}}>
                <div className="project-overlay">
                  <h3>Meat-up</h3>
                  <p>Smart startup for srtudents  meal</p>
                  <button onClick={() => window.open("https://meatupbd.netlify.app", "_blank")} className="btn-small">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
         <div className="container">
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>Feel free to reach out for collaborations, speaking engagements, or just to say hello!</p>
              <div className="info-item">
                <HiOutlineMail className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <p>safinahmedsiam@gmailcom</p>
                </div>
              </div>
              
                         </div>
           <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            required 
          />
        </div>
        <div className="form-group">
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            required 
          />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
          />
        </div>
        <div className="form-group">
          <textarea 
            name="message"
            placeholder="Your Message" 
            rows="5" 
            required
          ></textarea>
        </div>
        <button type="submit" className="btn-primary">
          Send Message
        </button>
        {status && (
          <div className={`form-status ${status.includes("success") ? "success" : "error"}`}>
            {status}
          </div>
        )}
      </form>
    </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="logo">Safin<span>Syam</span></div>
              <p>Developer | Innovator | Entrepreneur</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li onClick={() => scrollToSection('home')}>Home</li>
                <li onClick={() => scrollToSection('about')}>About</li>
                <li onClick={() => scrollToSection('achievements')}>Achievements</li>
                <li onClick={() => scrollToSection('projects')}>Projects</li>
                <li onClick={() => scrollToSection('contact')}>Contact</li>
              </ul>
            </div>
            
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Safin Ahmed Syam. All rights reserved.</p>
            <p>Funder of <a onClick={() => window.open("https://cyclicit.netlify.app", "_blank")}
       
       style={{
         color: '#4a89dc',
         textDecoration: 'none',
         fontWeight: 600
       }}
     >
       CycliciT
     </a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;