import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaArrowRight,
  FaCamera,
  FaSearch,
  FaBell,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";
// import AccountMenu from "./AccountMenu";
import axios from "axios"


const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [image, setImage] = useState(null);
  const [uplodingImg, setUploadingImg] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const [ userName, setUserName] = useState(null)

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

    const getUserName = async (id) => {
     axios
      .get(`http://localhost:8800/api/users/${id}`)
      .then((response) => {
        // setProducts(response.data);
        console.log(response.data)
        setUserName(response.data.name)
      })
      .catch((error) => console.error('Error fetching username', error));
    }
    const userId = localStorage.getItem("token")
    if(userId){
      getUserName(userId)
      
    }
  }, []);
console.log(userName);
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
  const hitSearchImage = async(url) => {
    const reqbody = {
      image_url: url
    }
    try{
      const response = await axios.post(`http://localhost:5000/get_similar_products`, reqbody);
      console.log(response.data);
    }
    catch(error){
      console.log(error);
    }
    
  }

  const validateAndPublish = async () => {
    const fileInput = fileInputRef.current;
    const file = fileInput.files[0];

    if (file && file.size < 1048576) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));

      try {
        setUploadingImg(true);

        let formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "realtimeimages");

        let res = await fetch("https://api.cloudinary.com/v1_1/dtslqphfg/image/upload", {
          method: "post",
          body: formData,
        });

        const fileUrl = await res.json();
        setUploadingImg(false);

        const imageURL = fileUrl.url;
        setImage(imageURL)
        hitSearchImage(imageURL);
        // Your additional logic with the imageURL
      } catch (error) {
        setUploadingImg(false);
        console.error(error);
      }
    } else {
      alert("Please select a valid image (max size: 1mb).");
    }
  };


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
                <Link className="menu-link" to="/addproduct">
                  Publish Product
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
                    <i>
                      <FaSearch />
                    </i>
                  </label>
                  <div className="border"></div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={() => validateAndPublish()}
                  />
                  <button className="labelforsearch" onClick={() => fileInputRef.current.click()}>
                    <i>
                      <FaCamera />
                    </i>
                  </button>
                </div>
              </li>
              <li className="menu-item">
                <p style={{"paddingTop":"10px", "textAlign":"center"}}>{userName}</p>
              </li>
              <li className="menu-item menu-mob">
                <div
                  style={{
                    display: "flex",
                    gap: "1em",
                    alignItems: "center",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                  }}
                >
                  {/* <AccountMenu /> */}
              
                </div>
              </li>
              
              <li className="menu-item menu-mob">
                <Link to="/notification">
                  <div
                    style={{
                      display: "flex",
                      gap: "1em",
                      alignItems: "center",
                      fontSize: "1.1rem",
                      fontWeight: "500",
                      color: "#000",
                    }}
                  >
                    <i className="NotificationBell">
                      <FaBell />
                    </i>
                    <p>{userName}</p>
                    <p>Account</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="userAcc">
            <div className="UserAccItem">
              {/* <AccountMenu /> */}
              <Link to="/notification">
                <i>
                  <FaBell />
                </i>
              </Link>
            </div>
          </div>

          {isMenuActive && (
            <button
              className="close-menu"
              onClick={() => setIsMenuActive(false)}
            >
              <img className="close-icon" src="https://static.thenounproject.com/png/1479017-200.png" alt="" />
              {/* <i className="close-icon">X</i> */}
            </button>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
