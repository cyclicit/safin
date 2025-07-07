import React, { useState, useEffect } from 'react';
import './App.css';
import { FaLinkedin, FaGithub, FaTwitter, FaArrowDown } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiAward, FiBriefcase, FiUser, FiCode } from 'react-icons/fi';
import rrr from '../src/dp2.jpg';
import ppp from '../src/ttt.jpg';
import jej from '../src/pic2.png';
import wer from '../src/pic3.png';
import pre from '../src/pic4.jpg';
import abam from '../src/abam.jpg';
import football from '../src/football.jpg';
import s2 from '../src/s3.jpg';
import sp2 from '../src/sp2.jpg';
import tkr from '../src/tkr.png';
import ggg from '../src/pro.png';
import pro from '../src/pro.png'
import l2 from '../src/l2.jpg'
import l3 from '../src/l3.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [status, setStatus] = useState("");

  // Typewriter effect state
  const [currentText, setCurrentText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(10000);




 
  const images = [
    { src: pro, id: 1, cut: 'polygon' },
    { src: l2, id: 2, cut: 'circle' },
    
    { src: wer, id: 4, cut: 'zigzag' },
    { src: pre, id: 5, cut: 'polygon' },
   
    
    { src: s2, id: 8, cut: 'polygon' },
    { src: l3, id: 6, cut: 'zigzag' },
    { src: jej, id: 9, cut: 'polygon' },
     { src: abam, id: 7, cut: 'circle' },
    
  ];




  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, []);

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

  useEffect(() => {
    const phrases = ["Developer", "Innovator", "Entrepreneur"];
    let timer;
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isDeleting) {
      setCurrentText(currentPhrase.substring(0, currentText.length - 1));
      setTypingSpeed(10000);
    } else {
      setCurrentText(currentPhrase.substring(0, currentText.length + 1));
      setTypingSpeed(10000);
    }

    if (!isDeleting && currentText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
      timer = setTimeout(() => {}, 2000);
    } else {
      timer = setTimeout(() => {}, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, typingSpeed]);

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
    <div className="App dark-mode">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div style={{cursor: 'pointer'}} onClick={() => {
            scrollToSection('home');
            setIsMenuOpen(false);
          }} className="logo">
            <span style={{ color:"#00ff88" }}>S</span>
            <span style={{color: '#00c853'}}>a</span>
            <span style={{color: '#00ff88'}}>f</span>
            <span style={{color: '#00c853'}}>i</span>
            <span style={{color: '#00ff88'}}>n</span>
            <span>S<span style={{color: '#00c853'}}>i</span>
            <span style={{color: '#00ff88'}}>a</span>m</span>
          </div>
          
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

          <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className='container'>
          <div className="hero-content">
            <div className="hero-text">
              <h4 className="fade-in"><span style={{ animationDelay: '0.2s', color: '#00ff88'}}>Hello,</span> I'm</h4>
              <h1 className="text-gradient pop-in" style={{ animationDelay: '0.3s' }}>
                <span style={{color: '#00c853'}}>Safin</span><span style={{ color:"#00ff88" }}> Ahmed</span> <span style={{color: '#00c853'}}>Siam</span>
              </h1>
              <h2 className="slide-up" style={{ animationDelay: '0.5s', color: 'white'}}>
                "I code to bring ideas to life and turn dreams into reality."
              </h2>
              <p className="typewriter" style={{ animationDelay: '2s', minHeight: '1.5em', color: 'white'}}>
                {currentText}
              </p>
              <div className="hero-buttons">
                <button 
                  className="btn-primary pulse-on-hover" 
                  onClick={() => scrollToSection('contact')}
                  style={{ animationDelay: '1s' }}
                  
                >
                  Contact Me
                </button>
                <button 
                  className="btn-secondary float-on-hover" 
                  onClick={() => scrollToSection('about')}
                  style={{ animationDelay: '1.2s' }}
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-wrapper mobile-spacer">
                <div className="glow pulsate" style={{ animation: 'pulsate 3s infinite ease-in-out' }}></div>
                <div className="profile-image floating" style={{ animation: 'floating 4s infinite ease-in-out' }}></div>
              </div>
            </div>
          </div>
          <div 
            className="scroll-down bounce" 
            onClick={() => scrollToSection('about')}
            style={{ animation: 'bounce 2s infinite', color: '#00ff88' }}
          >
            <FaArrowDown className="spin-on-hover" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title"><span style={{color: '#00ff88'}}>About</span> <span style={{color: '#00c853'}}>Me</span></h2>
          
          <div className="about-content">
            <div className="about-text">
              <h3 style={{color: '#00ff88'}}>Who am I?</h3>
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <p className="about-paragraph">
                  I'm <span className="highlight-text">Safin Ahmed</span>, a <span className="highlight-text-2">web and software</span> technology <span className="highlight-text-3">solutions provider</span>.
                  With experience in the tech industry, I've dedicated my career to <span className="highlight-text-4">driving innovation </span>
                  and delivering <span className="highlight-text-5">cutting-edge solutions</span> to businesses, institutes and individuals.
                </p>

                <p className="about-paragraph">
                  My journey began as a <span className="highlight-text-6">passionate developer</span>, and through <span className="highlight-text-7">years of dedication</span>,
                  I've grown into a <span className="highlight-text-8">technologist</span> who builds teams that create <span className="highlight-text-9">impactful work</span> and products.
                </p>
              </div>

              <div className="about-details">
                <div className="detail-item">
                  <FiUser className="detail-icon" />
                  <div>
                    <h4>Name:</h4>
                    <p style={{color: '#00ff88'}}>Safin Ahmed</p>
                  </div>
                </div>
                <div className="detail-item">
                  <HiOutlineMail className="detail-icon" />
                  <div>
                    <h4>Email:</h4>
                    <p style={{color: '#00c853'}}>safinahmedsiam@gmail.com</p>
                  </div>
                </div>
                <div className="detail-item">
                  <FiBriefcase className="detail-icon" />
                  <div>
                    <h4>Position:</h4>
                    <p style={{color: '#00ff88'}}>CEO & Co-Founder <span style={{color:'var(--text-color'}}>at</span> <button style={{margin:'5px',padding:'5px',backgroundColor:'white'}} >
                      <a 
                        onClick={() => window.open("https://cyclicit.com", "_blank")}
                        className="cyclicit-link"
                        style={{ cursor: 'pointer', color:'#00ff88' ,textDecoration: 'none' ,fontSize: '16px', fontWeight: 'bold' }}
                      >
                        Cyclic-iT
                      </a>
                    </button></p>
                  </div>
                </div>
                <div className="detail-item">
                  <FiBriefcase className="detail-icon" />
                  <div>
                    <h4>Skills:</h4>
                    <p style={{color: '#00c853'}}>React.js , Front-end Engineering</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-image" style={{ width: '100%', maxWidth: '400px', margin: '0 auto', position: 'relative' }}>
              <div
                className="image-bg"
                style={{
                  backgroundImage: `url(${rrr})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '300px',
                  borderRadius: '10px',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
                  transition: 'var(--transition)',
                }}
              >
               
              </div>
              
              <div className="animated-text-overlay">
                <p className="wave-text">
                  <span>G</span>
                  <span>r</span>
                  <span>e</span>
                  <span>e</span>
                  <span>t</span>
                  <span>i</span>
                  <span>n</span>
                  <span>g</span>
                  <span>s</span>
                  <span>!</span>
                </p>
                <p className="overlay-subtext">
                  Hope you're doing well. For any queries, fill out the contact form or mail me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Achievements Section - New Design */}
<section id="achievements" className="achievements-new">
  <div className="container-new">
    <h2 className="section-title-new">
      <span className="title-part-1">My</span>
      <span className="title-part-2">Achievements</span>
    </h2>

    <div className="achievements-container">
      

      {/* Other Achievements Grid */}
      <div className="achievements-grid-new">
        <div className="achievement-card-new">
          <div className="card-imagec" style={{backgroundImage: `url(${ppp})`}}></div>
          <div className="card-content">
            
            <h3>Complete Web Development Course 2023</h3>
          </div>
        </div>
        
        <div className="achievement-card-new">
          <div className="card-imagec" style={{backgroundImage: 'url(https://i.ibb.co/LD5vTV8d/Screenshot-2025-05-05-104617.png)'}}></div>
          <div className="card-content">
            
            <h3>Website for Educational Institute</h3>
          </div>
        </div>
        
        <div className="achievement-card-new">
          <div className="card-imagec" style={{backgroundImage: 'url(https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2025/03/11/img_3642_0.jpg)'}}></div>
          <div className="card-content">
           
            <h3>CSE, Brac University</h3>
          </div>
        </div>
      </div>

      {/* Highlight Card */}
      <div className="highlight-card-new">
        <div className="card-content">
          <h3>Represented Bangladesh National Team in Roller Skating</h3>
          <p className="location-date">Kathmandu, Nepal - 2017</p>
          
        </div>
        <div className="card-banner">
          <div className="banner-overlay"></div>
          <div className="card-image" style={{backgroundImage: `url(${sp2})`}}></div>
        </div>
        
      </div>
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title"> 
            <span style={{color: '#00c853'}}>Notable</span> 
            <span>Projects/ <span style={{color: '#00ff88'}}>Prototypes</span></span>
          </h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image" style={{backgroundImage: `url(https://i.ibb.co.com/LD5vTV8d/Screenshot-2025-05-05-104617.png)`}}>
                <div className="project-overlay">
                  <h3>College Website</h3>
                  <button onClick={() => window.open("https://shahidabulkashemcollege.com", "_blank")} className="btn-small">View Details</button>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image" style={{backgroundImage: `url(https://i.ibb.co.com/p6DQyhJ7/Screenshot-2025-05-05-105046.png)`}}>
                <div className="project-overlay">
                  <h3>Pet E-Commerce</h3>
                  <button onClick={() => window.open("https://petandvet.netlify.app", "_blank")} className="btn-small">View Details</button>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image" style={{backgroundImage: `url(https://i.ibb.co/rKbQRSFw/Screenshot-2025-07-01-235933.png)`}}>
                <div className="project-overlay">
                  <h3>Isalamic Stories</h3>
                  <button onClick={() => window.open("https://qstories.netlify.app", "_blank")} className="btn-small">View Details</button>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image" style={{backgroundImage: `url(https://i.ibb.co/v6BPfdx1/Screenshot-2025-07-02-000456.png)`}}>
                <div className="project-overlay">
                  <h3>Explore-Bangladesh</h3>
                  <button onClick={() => window.open("https://explorebangladesh.netlify.app/", "_blank")} className="btn-small">View Details</button>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image" style={{backgroundImage: `url(https://i.ibb.co/xtVg13d4/Screenshot-2025-07-02-001239.png)`}}>
                <div className="project-overlay">
                  <h3>MCQ-Test</h3>
                  <button onClick={() => window.open("https://mcqtestbysafin.netlify.app/", "_blank")} className="btn-small">View Details</button>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image" style={{backgroundImage: `url(https://i.ibb.co.com/RpF5cSnQ/Screenshot-2025-05-06-232806.png)`}}>
                <div className="project-overlay">
                  <h3>Meat-up</h3>
                  <button onClick={() => window.open("https://meatupbd.netlify.app", "_blank")} className="btn-small">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section id="image-showcase" className="image-showcase">
      <div className="container">
        <h2 className="section-title">
          <span style={{ color: '#00ff88' }}>Safin's </span>{' '}
          <span style={{ color: '#00c853' }}>Gallery</span>
        </h2>
        
        <div className="showcase-grid">
          {images.map((image) => (
            <div 
              key={image.id} 
              className={`showcase-item ${image.cut}`}
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="image-overlay">
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title"> 
            <span style={{color: '#00c853'}}>Get <span style={{color: '#00ff88'}}>In</span></span> 
            <span>Touch</span>
          </h2>
          
          <div className="contact-content">
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
            <div className="contact-info">
              <h3 style={{color: '#00c853'}}>Contact Information</h3>
              <p>Feel free to reach out for collaborations, speaking engagements, or just to say hello!</p>
              <div className="info-item">
                <HiOutlineMail className="info-icon" />
                <div>
                  <h4 style={{color: '#00ff88'}}>Email</h4>
                  <p>safinahmedsiam@gmail.com</p>
                  <p>+8801783245-100</p>
                  <p className="typewriter" style={{ animationDelay: '0.8s', minHeight: '1.5em', color: '#00ff88'}}>
                    {currentText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



     
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <h4>
                <span style={{ color: '#00ff88' }}>Quick</span>{' '}
                <span style={{ color: '#00c853' }}>Links</span>
              </h4>
              <ul>
                <li onClick={() => scrollToSection('home')}>
                  <span>Home</span>
                </li>
                <li onClick={() => scrollToSection('about')}>
                  <span style={{ color: '#00c853' }}>About</span>
                </li>
                <li onClick={() => scrollToSection('achievements')}>
                  <span style={{ color: '#00ff88' }}>Achievements</span>
                </li>
                <li onClick={() => scrollToSection('projects')}>
                  <span style={{ color: '#00c853' }}>Projects</span>
                </li>
                <li onClick={() => scrollToSection('contact')}>
                  <span style={{ color: '#00ff88' }}>Contact</span>
                </li>
              </ul>
            </div>
            <div className="footer-video">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="footer-video-element"
              >
                <source src='https://videos.pexels.com/video-files/2887463/2887463-hd_1920_1080_25fps.mp4' type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="footer-bottom">
            <p style={{ color: '#00c853' }}>
              &copy; {new Date().getFullYear()} Safin Ahmed. All rights reserved.
            </p>
            <p>
              <span style={{ color: '#00ff88' }}>+8801783245-100</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;