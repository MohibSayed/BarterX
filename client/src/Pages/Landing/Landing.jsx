import React, { useState, useEffect } from "react";
import "./Landing.css";
import NavbarL from "../../Components/NavbarL/NavbarL";
import Footer from "../../Components/Footer/Footer";
import { FaBriefcase, FaHandshake, FaUser } from "react-icons/fa";
import CountUp from "react-countup";
import { textVariants } from "../../Components/Motion";
import { motion } from "framer-motion";
import resumeData from "../../Components/VerticalTabPanel/Data";
import VerticalTab from "../../Components/VerticalTabPanel/VerticalTab";
import { Link } from "react-router-dom";
import Counteritem from "../../Components/CounterItem/CounterItem";
const Landing = () => {
  // const [userId, setUserId] = useState("")
  // useEffect = (()=>{
  //   const id = localStorage.getItem("token")
  //   if(id){
  //     setUserId(id);
  //   }
  // }, [userId]);

  return (
    <>
      <NavbarL />

      <div className="LandingSec1">
        <div className="LandingSec1row">
          <motion.div
            className="img_sec1"
            variants={textVariants("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://www.shutterstock.com/image-illustration/exchange-trade-conceptual-illustration-3d-600nw-45014272.jpg"
              alt=""
            />
          </motion.div>
          <motion.div
            className="content_sec1"
            variants={textVariants("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <h1>
              We connect you to <br />
              people around you to <br />
              <span className="underlined">barterX items</span> with
            </h1>
            <p>
              Our feed is filled with listed items by varoius <br />
              users all over India in 8 categories
            </p>
            <div className="searchbox-wrap">
              <input type="text" placeholder="Input your email address" />
              <button>
                <Link to="/register">
                  <span>Sign Up</span>{" "}
                </Link>
              </button>
            </div>
            <div className="barterNowBtn">
              <Link to="/home">
                {/* <button>Barter Now</button> */}
                <button class="cta">
                  <span class="hover-underline-animation"> Shop now </span>
                  <svg
                    id="arrow-horizontal"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="10"
                    viewBox="0 0 46 16"
                  >
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      transform="translate(30)"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="HomeBtnContainer"
          variants={textVariants("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <Link to="/home ">
            <button class="HomeButton">
              <svg
                stroke="#ffffff"
                viewBox="0 0 80 80"
                xmlns="http://www.w3.org/2000/svg"
                id="Capa_1"
                version="1.1"
                fill="#ffffff"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M64,48L64,48h-8V32h8c8.836,0,16-7.164,16-16S72.836,0,64,0c-8.837,0-16,7.164-16,16v8H32v-8c0-8.836-7.164-16-16-16 S0,7.164,0,16s7.164,16,16,16h8v16h-8l0,0l0,0C7.164,48,0,55.164,0,64s7.164,16,16,16c8.837,0,16-7.164,16-16l0,0v-8h16v7.98 c0,0.008-0.001,0.014-0.001,0.02c0,8.836,7.164,16,16,16s16-7.164,16-16S72.836,48.002,64,48z M64,8c4.418,0,8,3.582,8,8 s-3.582,8-8,8h-8v-8C56,11.582,59.582,8,64,8z M8,16c0-4.418,3.582-8,8-8s8,3.582,8,8v8h-8C11.582,24,8,20.417,8,16z M16,72 c-4.418,0-8-3.582-8-8s3.582-8,8-8l0,0h8v8C24,68.418,20.418,72,16,72z M32,48V32h16v16H32z M64,72c-4.418,0-8-3.582-8-8l0,0v-8 h7.999c4.418,0,8,3.582,8,8S68.418,72,64,72z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              Let's get started
            </button>
          </Link> */}
        </motion.div>
      </div>

      <motion.div
        className="landingSec3"
        variants={textVariants("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="my_container">
          <div className="landingSec3_row">
            <div className="barndInfoBx1">
              <div className="barndInfoBxInn">
                <div className="icon_animation">
                  <i>
                    <FaBriefcase />
                  </i>
                </div>
                <h2 className="barndInfo_heading">Hit the Desire</h2>
                <p className="barndInfo_desc">
                  Get your desired products at single click
                </p>
              </div>
            </div>
            <div className="barndInfoBx1">
              <div className="barndInfoBxInn">
                <div className="icon_animation">
                  <i>
                    <FaUser />
                  </i>
                </div>
                <h2 className="barndInfo_heading">User Reliance </h2>
                <p className="barndInfo_desc">
                  Stable and dependable quality for our customers
                </p>
              </div>
            </div>
            <div className="barndInfoBx1">
              <div className="barndInfoBxInn">
                <div className="icon_animation">
                  <i>
                    <FaHandshake />
                  </i>
                </div>
                <h2 className="barndInfo_heading">Assurance</h2>
                <p className="barndInfo_desc">
                  Find the right item at the right exchange
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* 
      <div className="LandingSec2">
        <motion.div
          className="LandingSec2_heading"
          variants={textVariants("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Introduction</h3>
          <h1>Why BarterX?</h1>
        </motion.div>

        <motion.div
          className="LandingSec2_content"
          variants={textVariants("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            Welcome to BarterX, the ultimate destination for modern bartering
            enthusiasts. Our platform is designed to revolutionize the way
            people exchange goods and services, fostering a thriving community
            built on collaboration, sustainability, and creativity. <br />{" "}
            <br />
            At BarterX, we believe that every item has a story and value that
            goes beyond its price tag. Our mission is to empower individuals and
            businesses to discover the hidden potential of their possessions by
            exchanging them for things they truly need or desire.
          </p>
        </motion.div>
      </div> */}

      <div className="LandingCategSec">
        <section className="Categcontainer">
          <motion.h2
            variants={textVariants("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            CATEGORIES
          </motion.h2>

          <div className="Categrow">
            <Link to="/categ">
              <motion.div
                variants={textVariants("down", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="CategLandingcard"
              >
                <div className="first-content">
                  <img
                    src="https://img.freepik.com/premium-photo/futuristic-gadgets-showcase-lineup-sleek-modern-technological-devices_977107-682.jpg"
                    alt=""
                  />
                </div>
                <div className="second-content">
                  <span>ELECTRONICS</span>
                  <p>
                    Welcome to our electronics shop where innovation meets
                    affordability!
                  </p>
                  <button>Explore More</button>
                </div>
              </motion.div>
            </Link>

            <Link to="/categ">
              <motion.div
                variants={textVariants("down", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="CategLandingcard"
              >
                <div className="first-content">
                  <img
                    src="https://media.istockphoto.com/id/1174598609/photo/set-of-contemporary-house-appliances-isolated-on-white.jpg?s=612x612&w=0&k=20&c=bBMILbCpLkhIxbL7sAAXaFOaFaSXFCt80ccHgl7iiWM="
                    alt=""
                  />
                </div>
                <div className="second-content">
                  <span>HOME APPLIANCES</span>
                  <p>Unleash the power of hassle-free cleaning!</p>
                  <button>Explore More</button>
                </div>
              </motion.div>
            </Link>

            <Link to="/categ">
              <motion.div
                variants={textVariants("down", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="CategLandingcard"
              >
                <div className="first-content">
                  <img
                    src="https://img.freepik.com/free-vector/furniture-icons-set_1284-4237.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698969600&semt=ais"
                    alt=""
                  />
                </div>
                <div className="second-content">
                  <span>FURNITURE</span>
                  <p>Furnish your lifestyle & make your room perfect.</p>
                  <button>Explore More</button>
                </div>
              </motion.div>
            </Link>

            <Link to="/categ">
              <motion.div
                variants={textVariants("down", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="CategLandingcard"
              >
                <div className="first-content">
                  <img
                    src="https://m.media-amazon.com/images/I/71QE5aRRC4L._AC_UF1000,1000_QL80_.jpg"
                    alt=""
                  />
                </div>
                <div className="second-content">
                  <span>ART</span>
                  <p>Keeping it simple yet very beautiful</p>
                  <button>Explore More</button>
                </div>
              </motion.div>
            </Link>

            <Link to="/categ">
              <motion.div
                variants={textVariants("down", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="CategLandingcard"
              >
                <div className="first-content">
                  <img
                    src="https://etimg.etb2bimg.com/photo/98444504.cms"
                    alt=""
                  />
                </div>
                <div className="second-content">
                  <span>VEHICLES</span>
                  <p>Accelerating the Future.</p>
                  <button>Explore More</button>
                </div>
              </motion.div>
            </Link>

            <Link to="/categ">
              <motion.div
                variants={textVariants("down", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="CategLandingcard"
              >
                <div className="first-content">
                  <img
                    src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg"
                    alt=""
                  />
                </div>
                <div className="second-content">
                  <span>SPORTS</span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Harum, enim.
                  </p>
                  <button>Explore More</button>
                </div>
              </motion.div>
            </Link>

            <Link to="/categ">
              <motion.div
                variants={textVariants("down", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="CategLandingcard"
              >
                <div className="first-content">
                  <img
                    src="https://img.freepik.com/premium-vector/education-concept-template-modern-design-style-contains-such-icons-as-graduation-microscope-quiz-school-bus_159242-6729.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1697068800&semt=ais"
                    alt=""
                  />
                </div>
                <div className="second-content">
                  <span>EDUCATION</span>
                  <p>Educate within</p>
                  <button>Explore More</button>
                </div>
              </motion.div>
            </Link>

            <Link to="/categ">
              <motion.div
                variants={textVariants("down", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="CategLandingcard"
              >
                <div className="first-content">
                  <img
                    src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX10794487.jpg"
                    alt=""
                  />
                </div>
                <div className="second-content">
                  <span>MISCELLANEOUS</span>
                  <p>All the world's treasures, right at your grasp.</p>
                  <button>Explore More</button>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      </div>

      <div className="LandingSec4">
        <div>
          <h2>BarterX Community Stats</h2>
          <div className="countUpContainerLeft">
            <motion.div
              className="countUpBx"
              variants={textVariants("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <Counteritem
                startCount={5}
                endCount={15}
                duration={3}
                countTitle="Number of Businesses"
                plus
              />
            </motion.div>
          </div>
          <div className="countUpContainerRight">
            <motion.div
              className="countUpBx"
              variants={textVariants("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <Counteritem
                startCount={5}
                endCount={62900000}
                duration={3}
                countTitle="Total Barter Transaction Volume"
                plus
              />
            </motion.div>
          </div>
          <div className="countUpContainerLeft">
            <motion.div
              className="countUpBx"
              variants={textVariants("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <Counteritem
                startCount={3}
                endCount={212000000}
                duration={3}
                countTitle="Total Cash Saved By Businesses"
                plus
              />
            </motion.div>
          </div>
          <div className="countUpContainerRight">
            <motion.div
              className="countUpBx"
              variants={textVariants("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <Counteritem
                startCount={5}
                endCount={95}
                duration={3}
                countTitle="Number of Charities Supported"
                plus
              />
            </motion.div>
          </div>
          <div className="countUpContainerLeft">
            <motion.div
              className="countUpBx"
              variants={textVariants("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <Counteritem
                startCount={5}
                endCount={2737000}
                duration={3}
                countTitle="Total Barter Donations by Businesses"
                plus
              />
            </motion.div>
          </div>
          <div className="countUpContainerRight">
            <motion.div
              className="countUpBx"
              variants={textVariants("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <Counteritem
                startCount={5}
                endCount={2162000}
                duration={3}
                countTitle="Total Cash Saved By Charities"
                plus
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="LandingSec5">
        <h1>Guidelines</h1>
        <VerticalTab data={resumeData.jobs} />
      </div>

      <Footer />
    </>
  );
};

export default Landing;
