import { Link } from "react-router-dom";
import style from "./css/page.module.css";
import pr from "./img/1B1.jpg";
const Contact = () => {
  return (
    <div className={style["calling-card"]}>
      <div className={style["image-container"]}>
        <img src={pr} alt="" />
      </div>
      <div className={style["details-container"]}>
        <h2>Roland Capinpin Jr</h2>
        <div className={style.Links}>
          <h3>
            {" "}
            <i className={`${style.icon} fa-brands fa-linkedin`}></i>{" "}
            <Link to={"https://www.linkedin.com/in/roland-capinpin-a20451149/"}>
              Linkedin
            </Link>
          </h3>
          <p>
            <i className="fa-regular fa-address-card"></i> 09300057189
          </p>
          <p>
            <i className="fa-regular fa-envelope-open"></i>{" "}
            capinpinroland25@gmail.com
          </p>
          <p>
            <i className="fa-regular fa-envelope"></i>{" "}
            https://www.facebook.com/mikee.chaingan.1/
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
