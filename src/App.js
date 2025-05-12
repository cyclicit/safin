



import React, { useState, useEffect } from 'react';
import './App.css';
import { FaLinkedin, FaGithub, FaTwitter, FaArrowDown, FaMoon, FaSun } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiAward, FiBriefcase, FiUser, FiCode } from 'react-icons/fi';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or user preference
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

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
            <h2>CEO of <a onClick={() => window.open("https://cyclicit.netlify.app", "_blank")}
       
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
            backgroundImage: `url('https://scontent.fdac31-2.fna.fbcdn.net/v/t39.30808-6/486780033_3966792500244829_4260637186472550903_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=BspfcK1UeggQ7kNvwElKG2n&_nc_oc=AdkgjJM8an7LgOoFjsav2nWii5lyKxEkBT-F4oo7gWOpqsC8GblnlnwIR7pRA3sN3mM&_nc_zt=23&_nc_ht=scontent.fdac31-2.fna&_nc_gid=ok6djC9hsgXY7XXTtGCBGA&oh=00_AfLsuoXcRWNQMksuPP0MWAtt0ZM9KnIx_u3m5Fd9DMSUbw&oe=681FF63F')`,
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
          backgroundImage: 'url(https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/476799616_3921804448076968_4418551915789673150_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=15d38e&_nc_ohc=N7ecblxM5xUQ7kNvwG_deZ7&_nc_oc=Admg19oOVOwY5CHHILxwoznved5u58cChZPAOeoj6iAe0bbOTW-KFTq6vU3uwG_eMsY&_nc_zt=23&_nc_ht=scontent.fdac31-1.fna&_nc_gid=UPmOCP5ceH3dJGOAaSgglQ&oh=00_AfI1Y58VBHLlEvSI_mfcjNSGPKR_laOBu2_vK6JkOQNHrA&oe=6820025E)',
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
          backgroundImage: 'url(https://studio.uxpincdn.com/studio/wp-content/uploads/2022/01/Responsive-design-best-practices.png.webp)',
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
      
      {/* Card 4 */}
      <div 
        className="achievement-card" 
        style={{ 
          backgroundImage: 'url(https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/462968447_3825029681087779_2358784359962963659_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=TP2q36gAEVMQ7kNvwHO9Jf4&_nc_oc=AdlQBKG9IlWJgGKSBNXe2j9f_MwqdQEtrxP6JWBKeNCr4T8ExH_csJcWJYeR0sro0Yo&_nc_zt=23&_nc_ht=scontent.fdac31-1.fna&_nc_gid=KyL23_aUCTNkUWHchCRHkA&oh=00_AfKy_g-AScuJrruEBNbJN-kahZEApacgQMN-NE_cp2TY4g&oe=681FF74B)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="achievement-content">
          <div className="achievement-icon"><FiAward /></div>
          <h3>Former National Player</h3>
          <p>Bangladesh Roller Skating Fedaration</p>
        </div>
      </div>
      
      {/* Card 5 */}
      <div 
        className="achievement-card" 
        style={{ 
          backgroundImage: 'url(https://scontent.fdac31-2.fna.fbcdn.net/v/t39.30808-6/467893025_122101790156629280_137397698288239201_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=6IOGGg4H2G0Q7kNvwGKSM8Q&_nc_oc=AdnQSFh_8qXg250poHV5LH4LD3spjV3pD68nRz_z1ccU4c_4HEHtEVYZ--IN3Rmja2k&_nc_zt=23&_nc_ht=scontent.fdac31-2.fna&_nc_gid=EgthEy1KCOFywGHn3TRWTw&oh=00_AfJENLh_Z8YbcQ1RrFYTsQBgZRQEaCTXauW68lDRvgdCiw&oe=681FFF36)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="achievement-content">
          <div className="achievement-icon"><FiAward /></div>
          <h3>Community Impact</h3>
          <p>Founded tech education program reaching students by social-media</p>
        </div>
      </div>
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
              
              <div className="social-links">
                <a href="#" className="social-icon"><FaLinkedin /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
                <a href="#" className="social-icon"><FaGithub /></a>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
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
            <div className="footer-social">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaGithub /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Safin Ahmed Syam. All rights reserved.</p>
            <p>CEO of <a onClick={() => window.open("https://cyclicit.netlify.app", "_blank")}
       
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