import style from "./css/page.module.css";
import pr from "./img/1B1.jpg";
const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.greetings}>
        <h1>Hi my name is</h1>
      </div>
      <div className={style.name}>
        <h2 className={style.innerH2}>Roland Capinpin.</h2>
      </div>
      <div className={style.intro}>
        <h3 className={style.int}>
          I build things for web
          <br />
          and mobile application using React
        </h3>
      </div>
      <div className={style.aboutself}>
        I’m a software engineer specializing in building
        <div>web applications and mobile application</div>
      </div>
      <section className={style.aboutSection}>
        <div className={style.aboutMe}>
          <div className="row">
            <div className="col-md-6">
              <div className={style.tittle}>About</div>
              <div className={style.aboutDesc}>
                Hello! My name is{" "}
                <span className={style.hightlight}>Roland</span> and I enjoy
                creating things that live on the internet and mobile devices. My
                interest in web development and app development started back in
                2022 when <br />I decided to regain my skill again
                <div className={style.workExp}>
                  I work for M&M business solutions for about 1 year{" "}
                  <span className={style.hightlight}>developing</span> web
                  application and mobile application
                </div>
              </div>
              <div className={style.recenTech}>
                Here are a few technologies I’ve been working with recently:
                <ul className={style.skillList}>
                  <li>JavaScript</li>
                  <li>Css</li>
                  <li>HTML</li>
                  <li>React(js) Web</li>
                  <li>React Native</li>
                  <li>Node(express)</li>
                  <li>MySQL</li>
                  <li>EJS</li>
                  <li>JQuery</li>
                  <li>Ajax</li>
                  <li>KNEX</li>
                  <li>Axios</li>
                </ul>
              </div>
            </div>

            <div className={`${style.picContainer} col-md-6`}>
              <img src={pr} alt="" className={style.myPic} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
