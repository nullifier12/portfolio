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
    <div className={style.greetings}>
      <h1>Projects</h1>
      <Carousel onSelect={() => null}>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={phnma}
            alt="First slide"
            style={{ height: 550 }}
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={raqCar}
            alt="Second slide"
            style={{ width: 50, height: 550 }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={mmhr}
            alt="Third slide"
            style={{ height: 550 }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={lbcCar}
            alt="Fourth slide"
            style={{ height: 550 }}
          />
        </Carousel.Item>
      </Carousel>
      <div className={style.cardCont}>
        <div className="d-flex flex-wrap justify-content-center">
          <div className={`${style.desc} card m-2`} style={{ width: "18rem" }}>
            <img className={`card-img-top `} src={phnma} alt="" />
            <div className="card-body">
              <h5 className="card-title">PHNMA</h5>
              <p className="card-text">
                This is a school project processing of student record that is
                being requested by student
              </p>
            </div>
          </div>
          <div className={`${style.desc} card m-2`} style={{ width: "18rem" }}>
            <img className={`card-img-top `} src={mmhr} alt="" />
            <div className="card-body">
              <h5 className="card-title">MMHR</h5>
              <p className="card-text">
                This app is made for monitoring IN and OUT of every employee
                inside the company and plot them into the calendar
              </p>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            <div
              className={`${style.desc} card m-2`}
              style={{ width: "18rem" }}
            >
              <img className={`card-img-top `} src={lbc} alt="" />
              <div className="card-body">
                <h5 className={`${style.iapp} card-title`}>LBC iAPP</h5>
                <p className={`card-text`}>
                  This app is for tracking the product by scanning qr code or
                  barcode and update if the product is arive in warehouse
                </p>
              </div>
            </div>
            <div
              className={`${style.desc} card m-2`}
              style={{ width: "18rem" }}
            >
              <img className={`card-img-top `} src={raquel} alt="" />
              <div className="card-body">
                <h5 className="card-title">Raquel App</h5>
                <p className="card-text">
                  This app is a loyalty app with pointing system , it contains
                  tracking of nearest station,ploting them and navigating from
                  stations
                </p>
              </div>
            </div>
            <div
              className={`${style.desc} card m-2`}
              style={{ width: "18rem" }}
            >
              <img className={`card-img-top `} src={github} alt="" />
              <div className="card-body">
                <h5 className={`${style.gitHub} card-title`}>GitHub</h5>
                <p className="card-text">
                  My repositories of project are posted here
                </p>
                <Link to={"https://github.com/nullifier12?tab=repositories"}>
                  <div className={style.greetings}>
                    <button className={`${style.buttonGoTo} btn`}>
                      <h3>Go to repository</h3>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="d-flex flex-wrap justify-content-center"> */}
        </div>
      </div>
    </div>
  );
};
export default Work;
