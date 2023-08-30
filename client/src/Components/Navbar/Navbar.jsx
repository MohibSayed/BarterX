import React, { useEffect, useLayoutEffect, useState } from "react";
import { FaShoppingCart, FaUser, FaArrowRight, FaCamera, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import AccountMenu from "./AccountMenu";
// import AccountMenu from "./AccountMenu";

const Navbar = () => {
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
                <Link className="menu-link" to="/categ">
                  Category
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" to="/">
                  What's New
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" to="/">
                  Deals
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" to="/">
                  Delivery
                </Link>
              </li>
              <li className="menu-item">
                <div className="InputSearchContainer">
                  <input
                    type="text"
                    name="text"
                    className="input"
                    id="input"
                    placeholder="Search"
                  />

                  <label htmlFor="inputSearch" className="labelforsearch">
                    <i><FaSearch /></i>
                  </label>
                  <div className="border"></div>

                  <button className="labelforsearch">
                    <i><FaCamera /></i>
                  </button>
                </div>
              </li>
              <li className="menu-item menu-mob">
                <Link className="menu-link" to="/">
                  Account
                </Link>
              </li>
              <li className="menu-item menu-mob">
                <Link className="menu-link" to="/register">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div className="userAcc">
            <div className="UserAccItem">
              <AccountMenu  />
              <p>Account</p>
            </div>
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

export default Navbar;
