import React, { useState, useEffect } from 'react';
import './App.css';
import { FaLinkedin, FaGithub, FaTwitter, FaArrowDown } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiAward, FiBriefcase, FiUser, FiCode } from 'react-icons/fi';
import p1 from './Screenshot 2025-05-05 104617.png';
import p2 from './Screenshot 2025-05-05 105046.png';
import p3 from './Screenshot 2025-05-06 232806.png';

function App() {
  

  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ state for mobile nav

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
    setIsMenuOpen(false); // ✅ close mobile menu on navigation
  };

  return (
    <div className="App">
       {/* Navigation */}
       <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div onClick={() => {
      scrollToSection('home');
      setIsMenuOpen(false);
    }} className="logo">Safin<span>Syam</span></div>
          
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
          backgroundImage: 'url(data:image/jpeg;base64,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)',
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