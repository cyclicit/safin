import React, { useState, useEffect } from 'react';
import './App.css';
import { FaLinkedin, FaGithub, FaTwitter, FaArrowDown } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiAward, FiBriefcase, FiUser, FiCode } from 'react-icons/fi';
import rrr from '../src/dp2.jpg'
import ttt from '../src/ttt.jpg'
import ppp from '../src/ppp.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [status, setStatus] = useState("");

  // Apply dark mode class to body
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
          <div onClick={() => {
            scrollToSection('home');
            setIsMenuOpen(false);
          }} className="logo">Safin<span>siam</span></div>
          
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

      {/* Hero Section */}
      <section id="home" className="hero">
  <div className='container'>
    <div className="hero-content">
      <div className="hero-text">
        <h4 className="fade-in" style={{ animationDelay: '0.2s' }}>Hello, I'm</h4>
        <h1 className="text-gradient pop-in" style={{ animationDelay: '0.4s' }}>
          Safin Ahmed siam
        </h1>
        <h2 className="slide-up" style={{ animationDelay: '0.6s' }}>
          CEO & Co-Founder of <a 
            onClick={() => window.open("https://cyclicit.com", "_blank")}
            className="cyclicit-link"
            onMouseEnter={(e) => e.target.classList.add('hover-effect')}
            onMouseLeave={(e) => e.target.classList.remove('hover-effect')}
          >
            CycliciT
          </a>
        </h2>
        <p className="typewriter" style={{ animationDelay: '0.8s' }}>Developer | Innovator | Entrepreneur</p>
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
      style={{ animation: 'bounce 2s infinite' }}
    >
      <FaArrowDown className="spin-on-hover" />
    </div>
  </div>
</section>

<style jsx>{`
  /* Text gradient effect */
  .text-gradient {
    background: linear-gradient(45deg, #4a89dc, #3ba0ff, #4a89dc);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-size: 200% auto;
    animation: gradient-shift 3s ease infinite;
  }

  /* Link hover effect */
  .cyclicit-link {
    color: #4a89dc;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
  }
  
  .cyclicit-link:hover {
    color: #3ba0ff;
  }
  
  .cyclicit-link.hover-effect::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background: linear-gradient(90deg, #4a89dc, #3ba0ff);
    transform: scaleX(1);
    transition: transform 0.3s ease;
  }

  /* Animations */
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes pop-in {
    0% { transform: scale(0.8); opacity: 0; }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes slide-up {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes typewriter {
    from { width: 0; }
    to { width: 100%; }
  }

  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes pulsate {
    0% { transform: scale(0.95); opacity: 0.7; }
    50% { transform: scale(1.05); opacity: 1; }
    100% { transform: scale(0.95); opacity: 0.7; }
  }

  @keyframes floating {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-20px); }
    60% { transform: translateY(-10px); }
  }

  /* Element classes */
  .fade-in {
    animation: fade-in 1s ease forwards;
  }

  .pop-in {
    animation: pop-in 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  }

  .slide-up {
    animation: slide-up 0.8s ease forwards;
  }

  .typewriter {
    overflow: hidden;
    white-space: nowrap;
    animation: typewriter 1.5s steps(40) forwards;
  }

  .pulse-on-hover:hover {
    animation: pulsate 1s infinite;
  }

  .float-on-hover:hover {
    animation: floating 2s infinite ease-in-out;
  }

  .spin-on-hover:hover {
    animation: spin 1s ease;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`}</style>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
    <h2 className="section-title">About <span>Me</span></h2>

    {/* Responsive Flex Layout */}
    <div
      className="about-content"
      style={{
        display: 'flex',
        flexDirection: 'column',
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
          I'm Safin Ahmed siam, the CEO and Co-Funder of Cyclic IT, a technology solutions provider.
          With over a decade of experience in the tech industry, I've dedicated my career to driving innovation
          and delivering cutting-edge solutions to complex problems.
        </p>
        <p>
          My journey began as a passionate developer, and through years of hard work and dedication,
          I've grown into a technologist who builds teams that create impactful products.
        </p>
        <div className="about-details">
          <div className="detail-item">
            <FiUser className="detail-icon" />
            <div>
              <h4>Name:</h4>
              <p>Safin Ahmed siam</p>
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
              <p>CEO & Co-Founder</p>
            </div>
          </div>
          <div className="detail-item">
            <FiCode className="detail-icon" />
            <div>
              <h4>Company:</h4>
              <p><a onClick={() => window.open("https://cyclicit.com", "_blank")}
       style={{
         color: '#4a89dc',
         textDecoration: 'none',
         fontWeight: 600,
         cursor: 'pointer'
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
          
        </div>
      </div>
      
      {/* Card 2 */}
      <div 
        className="achievement-card" 
       style={{ 
          backgroundImage:  `url(https://i.ibb.co.com/LD5vTV8d/Screenshot-2025-05-05-104617.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="achievement-content">
          <div className="achievement-icon"><FiAward /></div>
          <h3>Website for Educational Institute</h3>
          
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
          <h3>CSE,Brac University</h3>
          
        </div>
      </div>
    </div>
  </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Notable <span>Projects/Prototypes</span></h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image" style={{backgroundImage: `url(https://i.ibb.co.com/LD5vTV8d/Screenshot-2025-05-05-104617.png)`  }}>
                <div className="project-overlay">
                  <h3>College Website</h3>
                  
                  <button  onClick={() => window.open("https://shahidabulkashemcollege.com", "_blank")} className="btn-small">View Details</button>
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
                  <p>+8801783245100</p>
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
              <div className="logo">Safin<span>siam</span></div>
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
            <p>&copy; {new Date().getFullYear()} Safin Ahmed siam. All rights reserved.</p>
        <p> +8801783245100</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;