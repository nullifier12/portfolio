import { Link } from "react-router-dom";
import style from "./css/page.module.css";
import phnma from "./img/phnma.png";
import mmhr from "./img/mmhr.png";
import lbc from "./img/iapp.png";
import raquel from "./img/raq.png";
import raqCar from "./img/raqcar3.png";
import lbcCar from "./img/lbcCar.png";
import github from "./img/GitHub-Logo.png";
import Carousel from "react-bootstrap/Carousel";

const Work = () => {
  return (
    <div className={style.workContainer}>
      <div className={style.greetings}>
        <h1>Professional Experience & Projects</h1>
      </div>

      {/* Professional Experience Section */}
      <section className={style.experienceSection}>
        <h2 className={style.sectionTitle}>Professional Experience</h2>

        <div className={style.experienceCard}>
          <div className={style.companyHeader}>
            <h3>Arcadier / BCAA Auto Marketplace</h3>
            <span className={style.role}>Junior Full Stack Developer & Lead Developer</span>
            <span className={style.duration}>2024 - Present</span>
          </div>
          <ul className={style.achievementList}>
            <li>Led development of <strong>BCAA Auto Marketplace</strong>, a comprehensive car listing platform using React, Redux, Node.js, and Express.js with real-time features</li>
            <li>Integrated <strong>Auth0</strong> for secure authentication and user management across multiple marketplaces with role-based access control</li>
            <li>Supported and maintained marketplaces for <strong>Investin</strong>, <strong>Home Credit</strong>, <strong>Bepensa</strong>, <strong>Farmatodo</strong>, and others under the Client Management Group</li>
            <li>Contributed to <strong>Arcadier Test Marketplaces</strong> using C# (MVC), React, and JavaScript to ensure platform consistency and scalability</li>
            <li>Acted as <strong>Dev Lead</strong> for client support initiatives, improving onboarding and integration workflows by 40%</li>
            <li>Implemented <strong>CI/CD pipelines</strong> using Azure DevOps for automated testing and deployment</li>
          </ul>
        </div>

        <div className={style.experienceCard}>
          <div className={style.companyHeader}>
            <h3>Abacus Digitals</h3>
            <span className={style.role}>Junior Full Stack Developer & Pioneer</span>
            <span className={style.duration}>2022 - 2024</span>
          </div>
          <ul className={style.achievementList}>
            <li>Spearheaded development of a <strong>modular HR system</strong> using Next.js, TypeScript, and MySQL with advanced reporting and analytics</li>
            <li>Built multiple mobile apps with React Native (Expo) for attendance tracking, geo-tagging, and photo-based verification with 99.9% accuracy</li>
            <li>Developed <strong>IAPP Inventory System</strong> using EJS, Express.js, Node.js, and MySQL for LBC logistics, reducing inventory errors by 60%</li>
            <li>Created companion React Native mobile apps for real-time inventory scanning and branch-level tracking with offline capabilities</li>
            <li>Implemented <strong>QR code integration</strong> and barcode scanning for efficient product management and tracking</li>
            <li>Reduced manual data entry time by <strong>70%</strong> through automated processes and smart form validation</li>
          </ul>
        </div>

        <div className={style.experienceCard}>
          <div className={style.companyHeader}>
            <h3>MM Business Solutions</h3>
            <span className={style.role}>Junior Full Stack Developer</span>
            <span className={style.duration}>2021 - 2022</span>
          </div>
          <ul className={style.achievementList}>
            <li>Built multiple mobile apps with React Native (Expo) for attendance tracking, geo-tagging, and photo-based verification</li>
            <li>Developed <strong>Raquel Pawnshop App</strong>: Branch locator with real-time navigation and comprehensive points system</li>
            <li>Created <strong>KOC HR App</strong>: Digital ID management, attendance tracking, and automated request submission system</li>
            <li>Built <strong>Attendance Monitoring App</strong>: Synced with HR backend for real-time tracking and automated approval workflows</li>
            <li>Collaborated with cross-functional teams to design scalable backend services and optimize user experience</li>
            <li>Implemented <strong>push notifications</strong> and real-time updates for enhanced user engagement</li>
          </ul>
        </div>
      </section>

      {/* Key Projects Section */}
      <section className={style.projectsSection}>
        <h2 className={style.sectionTitle}>Featured Projects</h2>

        <div className={style.cardCont}>
          <div className="d-flex flex-wrap justify-content-center">
            <div className={`${style.desc} card m-3`} style={{ width: "20rem" }}>
              <div className={style.projectImageContainer}>
                <img className={`card-img-top ${style.projectImage}`} src={phnma} alt="PHNMA Project" />
                <div className={style.projectOverlay}>
                  <span className={style.projectTech}>React • Node.js • MySQL</span>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">PHNMA Student Portal</h5>
                <p className="card-text">
                  Comprehensive school management system for processing student records, handling requests, and managing academic workflows efficiently.
                </p>
                <div className={style.projectFeatures}>
                  <span className={style.featureTag}>Student Records</span>
                  <span className={style.featureTag}>Request Management</span>
                  <span className={style.featureTag}>Academic Tracking</span>
                </div>
              </div>
            </div>

            <div className={`${style.desc} card m-3`} style={{ width: "20rem" }}>
              <div className={style.projectImageContainer}>
                <img className={`card-img-top ${style.projectImage}`} src={mmhr} alt="MMHR System" />
                <div className={style.projectOverlay}>
                  <span className={style.projectTech}>React Native • Node.js • MySQL</span>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">MMHR Employee System</h5>
                <p className="card-text">
                  Advanced employee monitoring system with real-time attendance tracking, calendar integration, and comprehensive reporting dashboard.
                </p>
                <div className={style.projectFeatures}>
                  <span className={style.featureTag}>Attendance Tracking</span>
                  <span className={style.featureTag}>Calendar Integration</span>
                  <span className={style.featureTag}>Reporting Dashboard</span>
                </div>
              </div>
            </div>

            <div className={`${style.desc} card m-3`} style={{ width: "20rem" }}>
              <div className={style.projectImageContainer}>
                <img className={`card-img-top ${style.projectImage}`} src={lbc} alt="LBC iAPP" />
                <div className={style.projectOverlay}>
                  <span className={style.projectTech}>EJS • Express.js • MySQL</span>
                </div>
              </div>
              <div className="card-body">
                <h5 className={`${style.iapp} card-title`}>LBC iAPP Inventory</h5>
                <p className={`card-text`}>
                  Enterprise inventory management system with QR/barcode scanning, real-time product tracking, and comprehensive warehouse management.
                </p>
                <div className={style.projectFeatures}>
                  <span className={style.featureTag}>QR/Barcode Scanning</span>
                  <span className={style.featureTag}>Real-time Tracking</span>
                  <span className={style.featureTag}>Warehouse Management</span>
                </div>
              </div>
            </div>

            <div className={`${style.desc} card m-3`} style={{ width: "20rem" }}>
              <div className={style.projectImageContainer}>
                <img className={`card-img-top ${style.projectImage}`} src={raquel} alt="Raquel App" />
                <div className={style.projectOverlay}>
                  <span className={style.projectTech}>React Native • Node.js • Geolocation</span>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Raquel Loyalty App</h5>
                <p className="card-text">
                  Feature-rich loyalty application with points system, nearest station tracking, navigation features, and customer engagement tools.
                </p>
                <div className={style.projectFeatures}>
                  <span className={style.featureTag}>Loyalty Points</span>
                  <span className={style.featureTag}>Location Services</span>
                  <span className={style.featureTag}>Navigation</span>
                </div>
              </div>
            </div>

            <div className={`${style.desc} card m-3`} style={{ width: "20rem" }}>
              <div className={style.projectImageContainer}>
                <img className={`card-img-top ${style.projectImage}`} src={github} alt="GitHub" />
                <div className={style.projectOverlay}>
                  <span className={style.projectTech}>Open Source • Collaboration</span>
                </div>
              </div>
              <div className="card-body">
                <h5 className={`${style.gitHub} card-title`}>GitHub Portfolio</h5>
                <p className="card-text">
                  Explore my complete collection of projects, contributions, and open-source work showcasing my development journey and expertise.
                </p>
                <div className={style.projectFeatures}>
                  <span className={style.featureTag}>Open Source</span>
                  <span className={style.featureTag}>Code Samples</span>
                  <span className={style.featureTag}>Collaboration</span>
                </div>
                <Link to={"https://github.com/nullifier12?tab=repositories"}>
                  <div className={style.greetings}>
                    <button className={`${style.buttonGoTo} btn`}>
                      <h3>Explore Repository</h3>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Work;
