import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import style from "../css/home.module.css";
import MainNav from "../nav/MainNav";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Skill from "./Pages/Skill";
import Work from "./Pages/Work";
const Content = () => {
  return (
    <Fragment>
      <div className={`${style.wrapperCont} container-fluid`}>
        {/* <div className={`${style.profile}`}>
            <img alt="" src={bg} className={style.img} />
            <div>About</div>
            <div>I'm Roland Antonio Capinpin Jr.</div>
            <div>A fullstack developer</div>
          </div> */}
        <div>
          <MainNav />
          {/* <div className={style.typeContainer}>
            <h1 className={style.type}>Im Roland</h1>
          </div> */}
          <main className={style.mainCOnt}>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Contact />} path="/contact" />
              <Route element={<Skill />} path="/skill" />
              <Route element={<Work />} path="/projects" />
            </Routes>
            <Footer />
          </main>
        </div>
      </div>
    </Fragment>
  );
};
export default Content;
