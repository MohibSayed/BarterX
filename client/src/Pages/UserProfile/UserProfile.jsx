import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";

const UserProfile = () => {

  const user = localStorage.getItem('token');
  const [userData, setUserData] = useState(null);
  const [length, setLength] = useState(0);
  const [sucessBarter, setSucessBarter] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await axios.get(`http://localhost:8800/api/users/${user}`);
      const length = await axios.get(`http://localhost:8800/api/num_barter/${user}`);
      const sucessBarter = await axios.get(`http://localhost:8800/api/sucessBarter/${user}`);
      setSucessBarter(sucessBarter.data.numberOfProducts);
      setUserData(userData.data);
      setLength(length.data.numberOfProducts);
    }
    fetchUser();
  }, []);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <>
      <Navbar />

      <div className="UserTabPanel">
        <div className="TabHeading">
          <h4>Your Account</h4>
        </div>

        <div className="ProfileCardContainer">
          <div className="ProfileCard">
            <div className="Profileimg">
              <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
            </div>
            <div className="infos">
              <div className="name">
                <h2><strong>Name:</strong> {userData ? userData.name : "...loading..."}</h2>
                <h4><strong>Email:</strong> {userData ? userData.email : "...loading..."}</h4>
                <h4><strong>Phone:</strong> +91 88953 88963</h4>
              </div>
              <p className="Profiletext">
                This is your seller account. You can manage your products and
                orders here.
              </p>
              <ul className="stats">
                <li>
                  <h3>{length ? length : "0"}</h3>
                  <h4>Proposer</h4>
                </li>
                <li>
                  <h3>{sucessBarter ? sucessBarter : "0"}</h3>
                  <h4>Buyed</h4>
                </li>
              </ul>
              <div className="links">
                {/* <button className="follow">Follow</button> */}
                <Link to="/edit-profile" className="view">Edit profile</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="profileContainer">
          <Link to="/order-history">
            <div className="profileCard">
              <div className="profileContentLogo">
                <img
                  src="https://media.istockphoto.com/id/1135889859/vector/shop-cart-line-icon.jpg?s=612x612&w=0&k=20&c=9D-LB3eRArY-qbu2GkAO8sGKK9grwzEmWikBuIJARWM="
                  alt=""
                />
              </div>
              <div className="profileContentConatainer">
                <h3>Your Barters</h3>
                <p>Track, return, or buy things again</p>
              </div>
            </div>
          </Link>

          <Link to="/your-ads">
            <div className="profileCard">
              <div className="profileContentLogo">
                <img
                  src="https://i.pinimg.com/550x/6a/c0/0a/6ac00ab8f4018bb2734d000072567b0f.jpg"
                  alt=""
                />
              </div>
              <div className="profileContentConatainer">
                <h3>Your Ads</h3>
                <p>Track, return, or buy things again</p>
              </div>
            </div>
          </Link>

          <Link to="/edit-profile">
            <div className="profileCard">
              <div className="profileContentLogo">
                <img
                  src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                  alt=""
                />
              </div>
              <div className="profileContentConatainer">
                <h3>Login & Security</h3>
                <p>Edit login, name, and mobile number</p>
              </div>
            </div>
          </Link>

          <Link to="/edit-address">
            <div className="profileCard">
              <div className="profileContentLogo">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/000/552/683/small/location_pin_002.jpg"
                  alt=""
                />
              </div>
              <div className="profileContentConatainer">
                <h3>Your Addresses</h3>
                <p>Edit addresses for orders and gifts</p>
              </div>
            </div>
          </Link>

          <Link to="/proposers">
            <div className="profileCard">
              <div className="profileContentLogo">
                <img
                  src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png"
                  alt=""
                />
              </div>
              <div className="profileContentConatainer">
                <h3>Inc. Proposals</h3>
                <p>Track, return, or buy things again</p>
              </div>
            </div>
          </Link>

         
          <Link to="/myproposals">
            <div className="profileCard">
              <div className="profileContentLogo">
                <img
                  src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png"
                  alt=""
                />
              </div>
              <div className="profileContentConatainer">
                <h3>Out. Proposals</h3>
                <p>Track, return, or buy things again</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UserProfile;
