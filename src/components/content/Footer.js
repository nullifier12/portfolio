import { Link } from "react-router-dom";
import style from "../css/home.module.css";
import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className={style.footerContainer}>
        <Link to={"https://github.com/nullifier12?tab=repositories"}>
          <i className={`${style.icon} fa-brands fa-github`}></i>
        </Link>
        <Link to={"https://www.linkedin.com/in/roland-capinpin-a20451149/"}>
          <i className={`${style.icon} fa-brands fa-linkedin`}></i>
        </Link>
        <Link to={"https://www.facebook.com/mikee.chaingan.1"}>
          <i className={`${style.icon} fa-brands fa-facebook`}></i>
        </Link>
        <div className={style.credit}>Created by : Roland Capinpin</div>
      </div>
    </Fragment>
  );
};
export default Footer;
