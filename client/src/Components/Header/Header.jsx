import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";
// import {

//   whatsapp,
//   downarroww,
//   logogrey,
//   downarrowb,
//   instagramfooter,
//   mailblack,
//   callblack,
// } from "../../images";
import logo from '../../images/general/Group-404.svg';
import whatsapp from '../../images/general/whatsapp.svg';
import downarroww from '../../images/general/down-arrow-w.svg';
import logogrey from '../../images/general/logo-gray.svg';
import downarrowb from '../../images/general/black-arrow.svg';
import instagramfooter from '../../images/general/instagram.svg';
import mailblack from '../../images/general/email.svg';
import callblack from '../../images/general/call.svg';

import MobileMenu from "../MobileMenu/MobileMenu";
import { useWindowSize } from "react-use";
import {
  aboutUs,
  buyersguide,
  contactUs,
  documentsandstages,
  homeloans,
  homepage,
  legal,
  nri,
  partner,
  projectsRoute,
} from "../../helpers/constant-words";
const body = document.querySelector("body");

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { width: windowWidth } = useWindowSize();
  const [productHeadIndex, setProductHeadIndex] = useState(0);
  const [menuItemActiveIndex, setMenuItemActiveIndex] = useState(null);
  const [isBg, setIsbg] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    body.style.overflow = "auto";
    if (pathname !== homepage) {
      setIsbg(true);
    }
    setOpenMenu(false);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  });

  const handleClick = () => {
    if (!openMenu) {
      // Disable scroll
      body.style.overflow = "hidden";
    } else {
      // Enable scroll
      body.style.overflow = "auto";
    }
    // if (windowWidth <= 834) {
    //   setIsbg(!isBg);
    // }
    setOpenMenu(!openMenu);
  };
  const handleScroll = () => {
    if (pathname !== homepage.pageYOffset > 60) {
      setIsbg(true);
    } else {
      setIsbg(false);
    }

    // if (window.pageYOffset > 60) {
    //   setIsbg(true);
    // } else {
    //   setIsbg(false);
    // }
  };

  const handlePlusClick = (i) => {
    setMenuItemActiveIndex(i);
  };

  const mbMenuArr = [
    {
      isLink: true,
      redirectLink: aboutUs,
      linkName: "About Us",
    },
    {
      linkName: "Projects",
      subMenu: [
        {
          key: 1,
          redirectLink: `/projects/ongoing`,
          subLinkName: "Ongoing Projects",
        },
        {
          key: 2,
          redirectLink: `/projects/completed`,
          subLinkName: "Completed Projects",
        },
      ],
    },
    {
      isLink: true,
      redirectLink: partner,
      linkName: "Partner With Us",
    },
    {
      linkName: "Buyer's Guide",
      subMenu: [
        {
          key: 1,
          redirectLink: legal,
          subLinkName: "Legal",
        },
        {
          key: 2,
          redirectLink: homeloans,
          subLinkName: "Home Loans",
        },
        {
          key: 3,
          redirectLink: documentsandstages,
          subLinkName: "Documents And Stages",
        },
        {
          key: 4,
          redirectLink: nri,
          subLinkName: "NRI Corner",
        },
      ],
    },
    {
      isLink: true,
      redirectLink: contactUs,
      linkName: "Contact Us",
    },
  ];

  const handlelogoClick = () => {
    window.scrollTo(0, 0);
  };

  const mbMenuList = mbMenuArr
    ? mbMenuArr.map((mbSingleMenu, i) => (
        <React.Fragment key={i}>
          <MobileMenu
            mbSingleMenu={mbSingleMenu}
            menuItemIndex={i + 1}
            handlePlusClick={handlePlusClick}
            menuItemActiveIndex={menuItemActiveIndex}
          />
        </React.Fragment>
      ))
    : null;
  return (
    <>
      <header className={`header ${isBg ? "navbar_bg" : ""}`}>
        {windowWidth > 992 ? (
          <div className="my_container">
            <div className="Navbarclass">
              <NavLink to={homepage}>
                <div className="logo">
                  <img
                    src={`${isBg ? logogrey : logo}`}
                    className="nav_logo_img"
                    alt="caterina logo img"
                    onClick={handlelogoClick}
                    loading="lazy"
                  />
                </div>
              </NavLink>
              <ul>
                <li>
                  <NavLink
                    to={aboutUs}
                    activeclassname="link_selected"
                    className="route_link"
                    exact="true"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/projects/ongoing"
                    className="nav-link"
                    // aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Projects
                    <img
                      className="down_arrow"
                      src={`${isBg ? downarrowb : downarroww}`}
                      alt="down arrow"
                      loading="lazy"
                    />
                  </Link>
                  <div className="dropdown-menu">
                    <div>
                      {mbMenuArr[1].subMenu.map((item, i) => (
                        <NavLink
                          to={{
                            pathname: item.redirectLink,
                          }}
                          state={i}
                          activeclassname="link_selected"
                          className="route_link_black dropdown-item"
                          exact="true"
                          onClick={() => {
                            setProductHeadIndex(i);
                          }}
                        >
                          {item.subLinkName}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </li>
                <li>
                  <NavLink
                    to={partner}
                    activeclassname="link_selected"
                    className="route_link"
                    exact="true"
                  >
                    Partner With Us
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to={buyersguide}
                    className="nav-link"
                    // aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Buyer's Guide
                    <img
                      className="down_arrow"
                      src={`${isBg ? downarrowb : downarroww}`}
                      alt="down arrow"
                      loading="lazy"
                    />
                  </Link>
                  <div className="dropdown-menu">
                    <div>
                      <NavLink
                        to={legal}
                        activeclassname="link_selected"
                        className="route_link_black dropdown-item"
                        exact="true"
                      >
                        Legal
                      </NavLink>
                    </div>
                    <div>
                      <NavLink
                        to={homeloans}
                        activeclassname="link_selected"
                        className="route_link_black dropdown-item"
                        exact="true"
                      >
                        Home Loans
                      </NavLink>
                    </div>
                    <div>
                      <NavLink
                        to={documentsandstages}
                        activeclassname="link_selected"
                        className="route_link_black dropdown-item"
                        exact="true"
                      >
                        Documents and Stages
                      </NavLink>
                    </div>
                    <div>
                      <NavLink
                        to={nri}
                        activeclassname="link_selected"
                        className="route_link_black dropdown-item"
                        exact="true"
                      >
                        NRI Corner
                      </NavLink>
                    </div>
                  </div>
                </li>
                <li>
                  <NavLink
                    to={contactUs}
                    activeclassname="link_selected"
                    className="route_link"
                    exact="true"
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <a
                    href="https://wa.me/+919819925114"
                    activeclassname="link_selected"
                    exact="true"
                  >
                    <img src={whatsapp} alt="whatsapp icon" loading="lazy" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="my_container">
            <div className="mb_nav_flex">
              <NavLink to={homepage}>
                {isBg === false && openMenu === false && (
                  <img
                    src={logo}
                    alt="logo mobile"
                    loading="lazy"
                    className="mb_nav_logo_img"
                    onClick={handlelogoClick}
                  />
                )}
                {openMenu === true && (
                  <img
                    src={logogrey}
                    alt="logo mobile"
                    loading="lazy"
                    className="mb_nav_logo_img"
                    onClick={handlelogoClick}
                  />
                )}
                {isBg === true && openMenu === false && (
                  <img
                    src={logogrey}
                    alt="logo mobile"
                    loading="lazy"
                    className="mb_nav_logo_img"
                    onClick={handlelogoClick}
                  />
                )}
              </NavLink>

              <div
                className={`nav_icon ${
                  openMenu ? "open_nav" : "" || isBg ? "" : "nav_icon_white"
                } `}
                onClick={handleClick}
              >
                <span className="nav_icon_line1"></span>
                <span></span>
                <span className="nav_icon_line2"></span>
              </div>
            </div>
            <div className={`mb_menu ${openMenu ? "mb_menu_active" : ""}`}>
              <div className="mb_links_wrapper_cont">{mbMenuList}</div>

              <div className="header-socialmedia-icon">
                <div>
                  {/* <a
                    href="https://in.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={linkedinfooter}
                      alt="linkedin"
                      className="socialmedia-icon"
                    />
                  </a> */}
                  {/* <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={youtubefooter}
                      alt="you tube"
                      className="socialmedia-icon"
                    />
                  </a> */}
                  {/* <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={facebookfooter}
                      alt="facebook"
                      className="socialmedia-icon socialmedia-icon-1"
                    />
                  </a> */}
                  {/* <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={twitterfooter}
                      alt="twitter"
                      className="socialmedia-icon"
                    />
                  </a> */}
                  <a
                    href="https://www.instagram.com/lnagpalbuilders/?igshid=YmMyMTA2M2Y%3D"
                    // href="https://www.instagram.com/nagpaldevelopers/?igshid=YmMyMTA2M2Y%3D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={instagramfooter}
                      alt="instagram"
                      className="socialmedia-icon"
                    />
                  </a>
                </div>
                <div>
                  <img
                    src={callblack}
                    loading="lazy"
                    alt="call"
                    className="header-call-icon"
                  ></img>
                  <a href="tel:022 26467300" className="header-contact">
                    022 26467300
                  </a>
                  <div>
                    <img
                      src={mailblack}
                      loading="lazy"
                      alt="mail"
                      className="header-mail-icon"
                    ></img>
                    <a
                      href="mailto:lnagpalbuilders@gmail.com"
                      className="header-mail"
                    >
                      lnagpalbuilders@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
