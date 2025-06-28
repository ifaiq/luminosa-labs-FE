import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ logoText = "LUMINOSA" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHideHeader(true);
      } else {
        setHideHeader(false); 
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <header  className={`header${hideHeader ? " header--hidden" : ""}`}>
      <div className="header-container">
        <Link to="/" className="logo">
       <img src="/images/lum.svg" alt="Logo" className="logo-img" />
       <span className="logo-text">{logoText}</span>
       </Link>

        <nav className={`nav-desktop ${mobileMenuOpen ? "hidden" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/work" className="nav-link"> WORK </Link>
            </li>

            <li className="nav-link">
            <Link to="/services" onClick={toggleMobileMenu}>SERVICES</Link>
            </li>

            <li className="nav-link">
              <Link to="/about" onClick={toggleMobileMenu}>ABOUT</Link>
            </li>
            
            <li className="nav-item">
              <Link to="/contact" className="contact-btn" onClick={toggleMobileMenu}>CONTACT US</Link>
            </li>
          </ul>
        </nav>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
         <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}></span>
        </button>

        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <Link to="/work" onClick={toggleMobileMenu}>WORK</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/services" onClick={toggleMobileMenu}>SERVICES</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/about" onClick={toggleMobileMenu}>About</Link>
            </li>
            <li className="mobile-nav-item">
             <Link to="/contact" className="contact-btn" onClick={toggleMobileMenu}>CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
