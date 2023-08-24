import React, { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbarHome">
        <div className="BarterLogo">
          <p>BarterX</p>
        </div>
        <div className="navItemsHome">
          <ul>
            <li>Category</li>
            <li>Deals</li>
            <li>What's New</li>
            <li>Delivery</li>
            <li>
              <div class="InputSearchContainer">
                <input
                  type="text"
                  name="text"
                  class="input"
                  id="input"
                  placeholder="Search"
                />

                <label for="inputSearch" class="labelforsearch">
                  <svg viewBox="0 0 512 512" class="searchIcon">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                  </svg>
                </label>
                <div class="border"></div>

                <button class="micButton">
                  <svg viewBox="0 0 384 512" class="micIcon">
                    <path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"></path>
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="userAcc">
          <div className="UserAccItem">
            <i><FaUser /></i>
            <p>Account</p>
          </div>
          <div className="UserAccItem">
            <i><FaShoppingCart /></i>
            <p>Cart</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
