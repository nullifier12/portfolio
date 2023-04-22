import { Fragment } from "react";
import style from "./css/page.module.css";
import js from "./img/jsnbg.png";
import html from "./img/html2.png";
import reactNative from "./img/native.png";
import sql from "./img/sql.png";
import jq from "./img/jq1.png";
import axios from "./img/axios.png";
import knex from "./img/kns2nbg.png";
import css from "./img/css2.png";
import reactjs from "./img/react.png";
import node from "./img/nd2.png";
import ejs from "./img/ejs-removebg-preview.png";
import ajax from "./img/ajax.png";
const Skill = () => {
  return (
    <Fragment>
      <div className={style.skillContainer} id="skill">
        <div className={style.greetings}>
          <h1>Technologies known</h1>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="card m-2" style={{ width: "18rem" }}>
            <img className={`${style.logos} card-img-top `} src={css} alt="" />
          </div>
          <div className="card m-2" style={{ width: "18rem" }}>
            <img className={`${style.logos} card-img-top `} src={node} alt="" />
          </div>
          <div className="card m-2" style={{ width: "18rem" }}>
            <img className="card-img-top" src={reactjs} alt="" />
          </div>
          <div className="card m-2" style={{ width: "18rem" }}>
            <img className="card-img-top" src={ejs} alt="" />
          </div>
          <div className="card m-2" style={{ width: "18rem" }}>
            <img className="card-img-top" src={ajax} alt="" />
          </div>
          <div className="card m-2" style={{ width: "18rem" }}>
            <img className="card-img-top" src={axios} alt="" />
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="card m-2" style={{ width: "18rem" }}>
            <img className="card-img-top" src={js} alt="" />
          </div>
          <div className="card m-2" style={{ width: "18rem" }}>
            <img className={`${style.logos} card-img-top `} src={html} alt="" />
          </div>
          <div className="card m-2" style={{ width: "18rem" }}>
            <img className="card-img-top" src={reactNative} alt="" />
          </div>
          <div className="card m-2" style={{ width: "18rem" }}>
            <img className="card-img-top" src={sql} alt="" />
          </div>
          <div className="card m-2" style={{ width: "18rem" }}>
            <img className={`${style.logos} card-img-top `} src={jq} alt="" />
          </div>
          <div className="card m-2" style={{ width: "18rem" }}>
            <img className="card-img-top" src={knex} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Skill;
