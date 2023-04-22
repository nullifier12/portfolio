import { NavLink } from "react-router-dom";
import style from "../css/home.module.css";
const MainNav = () => {
  return (
    <nav className={`${style.links} navbar navbar-expand-lg ml-auto`}>
      {/* <i className="fa-solid fa-r nav-brand"></i> */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? style.active : "nav-link"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? style.active : "nav-link"
              }
              to="/skill"
            >
              Skill
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? style.active : "nav-link"
              }
              to="/projects"
            >
              Work
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? style.active : "nav-link"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default MainNav;
