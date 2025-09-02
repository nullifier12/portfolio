import style from "./css/page.module.css";
import pr from "./img/1B1.jpg";
const Home = () => {
  return (
    <div className={style.homeContainer}>
      {/* Hero Section */}
      <section className={style.heroSection}>
        <div className={style.heroContent}>
          <div className={style.heroText}>
            <div className={style.greetings}>
              <h1>Hi there, I'm</h1>
            </div>
            <div className={style.name}>
              <h2 className={style.innerH2}>Roland Jr. Antonio Capinpin</h2>
            </div>
            <div className={style.intro}>
              <h3 className={style.int}>
                I craft exceptional digital experiences for the modern web and
                <br />
                mobile applications using cutting-edge technologies
              </h3>
            </div>
            <div className={style.aboutself}>
              I'm a <span className={style.hightlight}>Passionate Full Stack Developer</span> with expertise in building
              <div>scalable web applications, cross-platform mobile solutions, and innovative digital products</div>
              {/* <div style={{ marginTop: "15px", fontSize: "18px", color: "#8892b0" }}>
                Currently crafting digital solutions at <span className={style.hightlight}>Arcadier / BCAA Auto Marketplace</span>
              </div> */}
            </div>
            <div className={style.heroButtons}>
              <a href="#about" className={style.primaryButton}>
                Explore My Work
              </a>
              <a href="/projects" className={style.secondaryButton}>
                View Projects
              </a>
            </div>
          </div>
          <div className={style.heroImage}>
            <img src={pr} alt="Roland Capinpin - Full Stack Developer" className={style.heroPic} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={style.aboutSection} id="about">
        <div className={style.aboutMe}>
          <div className="row" style={{ margin: '20px' }}>
            <div className="col-12">
              <div className={style.tittle}>About Me</div>
              <div className={style.aboutDesc}>
                Hello! I'm <span className={style.hightlight}>Roland</span>, a passionate and innovative developer who loves
                creating solutions that make a difference in the digital world. My journey in software development
                began in 2021, and I've been continuously evolving, learning, and pushing the boundaries of what's possible.
                <div className={style.workExp}>
                  I serve as a <span className={style.hightlight}>Full Stack Developer & Lead Developer</span>
                  <span className={style.hightlight}> On high level companies</span>, where I lead development
                  initiatives and support multiple client marketplaces across different industries.
                </div>
                <div className={style.workExp}>
                  I specialize in <span className={style.hightlight}>React ecosystems</span>, <span className={style.hightlight}>mobile development</span>,
                  and <span className={style.hightlight}>full-stack solutions</span> that deliver exceptional user experiences.
                </div>
              </div>

              <div className={style.recenTech}>
                Here are the key technologies and tools I've been working with recently:
                <ul className={style.skillList}>
                  <li>React & React Native</li>
                  <li>Next.js & TypeScript</li>
                  <li>Node.js & Express.js</li>
                  <li>C# (.NET MVC)</li>
                  <li>MySQL & MS SQL</li>
                  <li>Redux & RESTful APIs</li>
                  <li>HTML, CSS & JavaScript</li>
                  <li>Git & CI/CD</li>
                  <li>Azure DevOps</li>
                  <li>Postman & API Testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      {/* <section className={style.statsSection}>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <div className={style.statCard}>
                <div className={style.statNumber}>3+</div>
                <div className={style.statLabel}>Years Experience</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className={style.statCard}>
                <div className={style.statNumber}>15+</div>
                <div className={style.statLabel}>Projects Completed</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className={style.statCard}>
                <div className={style.statNumber}>5+</div>
                <div className={style.statLabel}>Technologies Mastered</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className={style.statCard}>
                <div className={style.statNumber}>100%</div>
                <div className={style.statLabel}>Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};
export default Home;
