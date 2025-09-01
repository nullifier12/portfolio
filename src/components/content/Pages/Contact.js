import { Link } from "react-router-dom";
import style from "./css/page.module.css";
import pr from "./img/1B1.jpg";

const Contact = () => {
  return (
    <div className={style.contactContainer}>
      <div className={style.greetings}>
        <h1>Let's Connect & Collaborate</h1>
      </div>
      
      <div className={style.contactSubtitle}>
        <p>I'm always interested in hearing about new opportunities, exciting projects, and innovative ideas. Let's discuss how we can work together to create something amazing!</p>
      </div>
      
      <div className="row">
        <div className="col-lg-6">
          <div className={style.contactCard}>
            <div className={style.profileImageContainer}>
              <img src={pr} alt="Roland Capinpin - Full Stack Developer" className={style.profileImage} />
              <div className={style.profileOverlay}>
                <div className={style.profileStatus}>
                  <span className={style.statusDot}></span>
                  Available for Opportunities
                </div>
              </div>
            </div>
            <div className={style.contactInfo}>
              <h2>Roland Jr. Antonio Capinpin</h2>
              <p className={style.title}>Full Stack Developer & Mobile App Specialist</p>
              <p className={style.subtitle}>Passionate about creating innovative digital solutions</p>
              
              <div className={style.contactDetails}>
                <div className={style.contactItem}>
                  <div className={style.contactIcon}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className={style.contactText}>
                    <span className={style.contactLabel}>Location</span>
                    <span className={style.contactValue}>Sta. Barbara, Victoria, Tarlac, Philippines</span>
                  </div>
                </div>
                
                <div className={style.contactItem}>
                  <div className={style.contactIcon}>
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className={style.contactText}>
                    <span className={style.contactLabel}>Phone</span>
                    <span className={style.contactValue}>+63 961 643 6968</span>
                  </div>
                </div>
                
                <div className={style.contactItem}>
                  <div className={style.contactIcon}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className={style.contactText}>
                    <span className={style.contactLabel}>Email</span>
                    <span className={style.contactValue}>capinpinroland25@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className={style.socialLinks}>
            <h3>Professional Networks</h3>
            <div className={style.socialGrid}>
              <Link to="https://www.linkedin.com/in/roland-capinpin-a20451149/" target="_blank" rel="noopener noreferrer" className={style.socialLink}>
                <div className={style.socialCard}>
                  <div className={style.socialIcon}>
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className={style.socialInfo}>
                    <span className={style.socialName}>LinkedIn</span>
                    <span className={style.socialDesc}>Professional Profile</span>
                  </div>
                </div>
              </Link>
              
              <Link to="https://github.com/nullifier12" target="_blank" rel="noopener noreferrer" className={style.socialLink}>
                <div className={style.socialCard}>
                  <div className={style.socialIcon}>
                    <i className="fab fa-github"></i>
                  </div>
                  <div className={style.socialInfo}>
                    <span className={style.socialName}>GitHub</span>
                    <span className={style.socialDesc}>Code Portfolio</span>
                  </div>
                </div>
              </Link>
              
              <Link to="https://www.facebook.com/mikee.chaingan.1/" target="_blank" rel="noopener noreferrer" className={style.socialLink}>
                <div className={style.socialCard}>
                  <div className={style.socialIcon}>
                    <i className="fab fa-facebook"></i>
                  </div>
                  <div className={style.socialInfo}>
                    <span className={style.socialName}>Facebook</span>
                    <span className={style.socialDesc}>Personal Contact</span>
                  </div>
                </div>
              </Link>
              
              <div className={style.socialCard}>
                <div className={style.socialIcon}>
                  <i className="fas fa-globe"></i>
                </div>
                <div className={style.socialInfo}>
                  <span className={style.socialName}>Portfolio</span>
                  <span className={style.socialDesc}>Current Site</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={style.availability}>
            <h3>Current Status</h3>
            <div className={style.statusCard}>
              <div className={style.statusHeader}>
                <span className={style.statusIndicator}></span>
                <span className={style.statusText}>Open to Opportunities</span>
              </div>
              <p>I'm currently available for new projects, collaborations, and exciting opportunities. Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.</p>
              <div className={style.availabilityTags}>
                <span className={style.availabilityTag}>Full-time</span>
                <span className={style.availabilityTag}>Freelance</span>
                <span className={style.availabilityTag}>Consulting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
