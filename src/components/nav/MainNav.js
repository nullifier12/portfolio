import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "../css/home.module.css";

const MainNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`${style.navbar} navbar navbar-expand-lg ${isScrolled ? style.navbarScrolled : ''}`}>
      <div className={style.navContainer}>
        <div className={style.navBrand}>
          <span className={style.brandText}>RC</span>
          <span className={style.brandSubtext}>Developer</span>
        </div>

        <button
          className={`${style.navbarToggler} navbar-toggler ${isMobileMenuOpen ? style.active : ''}`}
          type="button"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span className={style.hamburgerLine}></span>
          <span className={style.hamburgerLine}></span>
          <span className={style.hamburgerLine}></span>
        </button>

        <div className={`${style.navbarCollapse} collapse navbar-collapse ${isMobileMenuOpen ? style.show : ''}`}>
          <ul className={style.navbarNav}>
            <li className={style.navItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.navLink} ${style.active}` : style.navLink
                }
                to="/"
                onClick={closeMobileMenu}
              >
                <span className={style.navIcon}>🏠</span>
                <span className={style.navText}>Home</span>
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.navLink} ${style.active}` : style.navLink
                }
                to="/skill"
                onClick={closeMobileMenu}
              >
                <span className={style.navIcon}>⚡</span>
                <span className={style.navText}>Skills</span>
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.navLink} ${style.active}` : style.navLink
                }
                to="/projects"
                onClick={closeMobileMenu}
              >
                <span className={style.navIcon}>💼</span>
                <span className={style.navText}>Work</span>
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.navLink} ${style.active}` : style.navLink
                }
                to="/contact"
                onClick={closeMobileMenu}
              >
                <span className={style.navIcon}>📧</span>
                <span className={style.navText}>Contact</span>
              </NavLink>
            </li>
            <li className={style.navItem}>
              <a
                href="Roland Capinpin.docx"
                download
                className={style.resumeButton}
                onClick={closeMobileMenu}
              >
                <span className={style.resumeIcon}>📄</span>
                <span className={style.resumeText}>Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
