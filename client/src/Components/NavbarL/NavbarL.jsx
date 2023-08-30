import React, { useEffect, useLayoutEffect, useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavbarL.css";
import "../Navbar/Navbar.css";
import logo from '../../assets/logo.png'
const NavbarL = () => {

  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  useEffect(() => {
    const navbarMenu = document.getElementById("menu");
    const burgerMenu = document.getElementById("burger");
    const bgOverlay = document.querySelector(".overlay");

    if (burgerMenu && bgOverlay) {
      burgerMenu.addEventListener("click", toggleMenu);

      bgOverlay.addEventListener("click", () => {
        setIsMenuActive(false);
      });
    }

    document.querySelectorAll(".menu-link").forEach((link) => {
      link.addEventListener("click", () => {
        setIsMenuActive(false);
      });
    });

   
  }, []);

  const [showBoxShadow, setShowBoxShadow] = useState(false);
  const handleScroll = () => {
    setShowBoxShadow(window.scrollY > 0); 
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  
  return (
    <>
      <header className={`header ${showBoxShadow ? "sticky" : ""}`} id="header">
        <nav className="navbar NavContainer">
          <Link to="/" className="brand">
            <img src={logo} alt="" />
          </Link>
          <div className="burger" id="burger">
            <span className="burgerLine1"></span>
            <span className="burgerLine2"></span>
            <span className="burgerLine3"></span>
          </div>
          <span className="overlay"></span>
          <div className={`menu ${isMenuActive ? "is-active" : ""}`} id="menu">
            <ul className="menu-inner">
              <li className="menu-item">
                <Link className="menu-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" to="/">
                  Who It’s For
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" to="/add-product">
                  Where We Barter
                </Link>
              </li>
              <li className="menu-item menu-mob">
                <Link className="menu-link" to="/">
                  How To Trade
                </Link>
              </li>
              <li className="menu-item menu-mob">
                <Link className="menu-link" to="/register">
                  Sign Up/Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu" id="menu">
            <ul className="menu-inner">
              <li className="menu-item">
                <Link className="menu-link" to="/">
                  <div className="buttons">
                    <button className="btn">
                      <span></span>
                      <p
                        data-start="How To Trade"
                        data-text="view more!"
                        data-title="How To Trade"
                      ></p>
                    </button>
                  </div>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" to="/register">
                  <div className="loginContainerNav">
                    <button className="loginBtnNav">
                      <p className="text">Sign Up/Login</p>
                      <i>
                        <FaArrowRight />
                      </i>
                    </button>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          {/* Close button */}
          {isMenuActive && (
            <button
              className="close-menu"
              onClick={() => setIsMenuActive(false)}
            >
              <i className="close-icon">X</i>
              
            </button>
          )}
        </nav>
      </header>
    </>
  );
};

export default NavbarL;
