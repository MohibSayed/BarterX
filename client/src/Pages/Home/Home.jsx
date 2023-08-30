import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import { useWindowSize } from "react-use";
import { Link } from "react-router-dom";
import { textVariants } from "../../Components/Motion";
import { motion } from "framer-motion";
import banner from "../../assets/banner1.png";
import Footer from "../../Components/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import leftarrow from "../../assets/left_arrow.svg";
import rightarrow from "../../assets/right_arrow.svg";

const Home = () => {
  const { width } = useWindowSize();

  const homepageProduct = [
    {
      id: 1,
      img: "https://www.amazinginteriors.co.nz/cdn/shop/products/QL1003-01_2000x.jpg?v=1681420966",
      alt: "hk",
      title: "Sofa",
      mbtitle: "Sofa",
      owner: "Ram Shinde",
      desiredProduct: "Office Chair",
      price: 1499,
      link: "/categ",
    },
    {
      id: 2,
      img: "https://5.imimg.com/data5/SU/AC/MY-6146690/sony-professional-video-camera.jpg",
      alt: "hk",
      title: "Sony Camera",
      mbtitle: "Sony Camera",
      owner: "Ram Shinde",
      desiredProduct: "Sonata Watch",
      price: 59999,
      link: "/categ",
    },
    {
      id: 3,
      img: "https://m.media-amazon.com/images/I/91z5KuonXrL._SX569_.jpg",
      alt: "hk",
      title: "Apple Watch Ultra",
      mbtitle: "Apple Watch Ultra",
      owner: "Ram Shinde",
      desiredProduct: "Sonata Watch",
      price: 65789,
      link: "/categ",
    },
    {
      id: 4,
      img: "https://5.imimg.com/data5/SU/AC/MY-6146690/sony-professional-video-camera.jpg",
      alt: "hk",
      title: "Sony Camera",
      mbtitle: "Sony Camera",
      owner: "Ram Shinde",
      desiredProduct: "Sonata Watch",
      price: 59999,
      link: "/categ",
    },
    {
      id: 5,
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19446146/2023/8/23/de32f905-32ca-4337-a431-1cb4ea3c84291692786536597USPoloAssnMenWhiteSolidPoloCollarPureCottonSlimFitT-shirt1.jpg",
      alt: "hk",
      title: "U.S. Polo Assn.",
      mbtitle: "U.S. Polo Assn.",
      owner: "Ram Shinde",
      desiredProduct: "Sonata Watch",
      price: 1499,
      link: "/categ",
    },
    {
      id: 6,
      img: "https://5.imimg.com/data5/SU/AC/MY-6146690/sony-professional-video-camera.jpg",
      alt: "hk",
      title: "Sony Camera",
      mbtitle: "Sony Camera",
      owner: "Ram Shinde",
      desiredProduct: "Sonata Watch",
      price: 59999,
      link: "/categ",
    },
    {
      id: 7,
      img: "https://m.media-amazon.com/images/I/91z5KuonXrL._SX569_.jpg",
      alt: "hk",
      title: "Apple Watch Ultra",
      mbtitle: "Apple Watch Ultra",
      owner: "Ram Shinde",
      desiredProduct: "Sonata Watch",
      price: 65789,
      link: "/categ",
    },
    {
      id: 8,
      img: "https://5.imimg.com/data5/SU/AC/MY-6146690/sony-professional-video-camera.jpg",
      alt: "hk",
      title: "Sony Camera",
      mbtitle: "Sony Camera",
      owner: "Ram Shinde",
      desiredProduct: "Sonata Watch",
      price: 59999,
      link: "/categ",
    },
  ];

  const productList = homepageProduct.map((item, i) => (
    <SwiperSlide key={i}>
      <div className="product_col" data-aos="fade-up">
        <div className="img_wrapper">
          <Link to={item.link} className="product_link">
            <img
              src={item.img}
              alt={item.alt}
              className="product_img"
              data-aos="fade-up"
            />
          </Link>
        </div>
        <div className="product_container">
          {width > 391 ? (
            <h2
              className="product_title"
              dangerouslySetInnerHTML={{ __html: item.title }}
              data-aos="fade-up"
            />
          ) : (
            <h2
              className="product_title"
              dangerouslySetInnerHTML={{ __html: item.mbtitle }}
              data-aos="fade-up"
            />
          )}
          <p className="product_desc" data-aos="fade-up">
            Owner: {item.owner}
          </p>
          <p className="product_desc">Required: {item.desiredProduct}</p>
        </div>
        <Link to={item.link} className="product_link">
          Know more
        </Link>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <Navbar />

      <section className="ban_sec">
        <motion.div
          className="Bannercontainer"
          variants={textVariants("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="ban_img">
            <img
              src="https://i.ibb.co/NVjsGWG/banner.jpg"
              alt="banner"
              border="0"
            />
            <div className="ban_text">
              <strong>
                <span>Shopping And</span>
                <br />
                Department Store.
              </strong>
              <p>
                Shopping is a bit of a relaxing hobby for me,
                <br /> which is sometimes troubling for the bank balance.{" "}
              </p>
              <Link to="/">Learn More</Link>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="HomeSec2">
        <motion.h1
          variants={textVariants("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          Shop Our Top Categories
        </motion.h1>

        <div className="HomeSec2CardContainer">
          <motion.div
            variants={textVariants("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="HomeSec2Card"
          >
            <p>Furniture</p>
          </motion.div>
          <motion.div
            variants={textVariants("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="HomeSec2Card"
          >
            <p>Electronics</p>
          </motion.div>
          <motion.div
            variants={textVariants("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="HomeSec2Card"
          >
            <p>Tech</p>
          </motion.div>
          <motion.div
            variants={textVariants("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="HomeSec2Card"
          >
            <p>Hand Bag</p>
          </motion.div>
          <motion.div
            variants={textVariants("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="HomeSec2Card"
          >
            <p>Categ1</p>
          </motion.div>
        </div>
      </section>

      <section className="home_sec4">
        <motion.div
          className="my_container"
          variants={textVariants("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
          className="heading"
          variants={textVariants("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5 }}>
            Products
          </motion.h2>
          <div className="product_row" data-aos="fade-up">
            {width > 834 || width < 768 ? null : (
              <div className="arrows_wrapper">
                <img
                  src={leftarrow}
                  className="left_arrow"
                  onMouseOver={(e) => (e.currentTarget.src = leftarrow)}
                  onMouseOut={(e) => (e.currentTarget.src = leftarrow)}
                />
                <img
                  src={rightarrow}
                  className="right_arrow"
                  onMouseOver={(e) => (e.currentTarget.src = rightarrow)}
                  onMouseOut={(e) => (e.currentTarget.src = rightarrow)}
                />
              </div>
            )}
            <Swiper
              className="productSwiper"
              slidesPerView={3}
              slidesPerGroup={1}
              spaceBetween={98}
              autoHeight={true}
              modules={[Pagination, Navigation]}
              pagination={{
                type: "progressbar",
              }}
              navigation={{
                nextEl: ".right_arrow",
                prevEl: ".left_arrow",
              }}
              breakpoints={{
                0: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
                768: {
                  spaceBetween: 60,
                  slidesPerView: 2,
                },
                992: {
                  spaceBetween: 50,
                  slidesPerView: 3,
                },
                1280: {
                  spaceBetween: 70,
                  slidesPerView: 3,
                },
                1536: {
                  spaceBetween: 80,
                  slidesPerView: 3,
                },
                1600: {
                  spaceBetween: 98,
                  slidesPerView: 3,
                },
                1920: {
                  spaceBetween: 99,
                  slidesPerView: 3,
                },
                2250: {
                  spaceBetween: 120,
                  slidesPerView: 3,
                },
              }}
            >
              {productList}

              {width <= 767 ? (
                <div className="mbarrows_wrapper">
                  {/* <img
                    src={leftarrow}
                    className="left_arrow"
                    onMouseOver={(e) => (e.currentTarget.src = leftarrow)}
                    onMouseOut={(e) => (e.currentTarget.src = leftarrow)}
                  />
                  <img
                    src={rightarrow}
                    className="right_arrow"
                    onMouseOver={(e) => (e.currentTarget.src = rightarrow)}
                    onMouseOut={(e) => (e.currentTarget.src = rightarrow)}
                  /> */}
                </div>
              ) : null}
              {/* <div className="cta_wrapper" data-aos="fade-up">
                <Link to={productsURL} className="about-button">
                  Know more
                </Link>
              </div> */}
            </Swiper>
          </div>
        </motion.div>
      </section>

      <section className="HomeSec3">
        <motion.h1
          variants={textVariants("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          Services To Help You Shop
        </motion.h1>
        <div className="HomeSec3Container">
          <motion.div
            variants={textVariants("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="Sec3Card"
          >
            <div className="Sec3Content">
              <h3>
                Frequently Asked
                <br /> Questions
              </h3>
              <p>
                Updates on safe Shopping in
                <br /> our Stores
              </p>
            </div>
            <div className="Sec3Image"></div>
          </motion.div>
          <motion.div
            variants={textVariants("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="Sec3Card"
          >
            <div className="Sec3Content">
              <h3>
                Frequently Asked
                <br /> Questions
              </h3>
              <p>
                Updates on safe Shopping in
                <br /> our Stores
              </p>
            </div>
            <div className="Sec3Image"></div>
          </motion.div>
          <motion.div
            variants={textVariants("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="Sec3Card"
          >
            <div className="Sec3Content">
              <h3>
                Home Delivery <br /> Options{" "}
              </h3>
              <p>
                Updates on safe Shopping in
                <br /> our Stores
              </p>
            </div>
            <div className="Sec3Image Sec3Image3"></div>
          </motion.div>
        </div>
      </section>

      <section className="home_sec4">
        <motion.div
          className="my_container"
          variants={textVariants("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
          className="heading"
          variants={textVariants("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5 }}
          >
            Weekly Popular Products
          </motion.h2>
          <div className="product_row" data-aos="fade-up">
            {width > 834 || width < 768 ? null : (
              <div className="arrows_wrapper">
                <img
                  src={leftarrow}
                  className="left_arrow"
                  onMouseOver={(e) => (e.currentTarget.src = leftarrow)}
                  onMouseOut={(e) => (e.currentTarget.src = leftarrow)}
                />
                <img
                  src={rightarrow}
                  className="right_arrow"
                  onMouseOver={(e) => (e.currentTarget.src = rightarrow)}
                  onMouseOut={(e) => (e.currentTarget.src = rightarrow)}
                />
              </div>
            )}
            <Swiper
              className="productSwiper"
              slidesPerView={3}
              slidesPerGroup={1}
              spaceBetween={98}
              autoHeight={true}
              modules={[Pagination, Navigation]}
              pagination={{
                type: "progressbar",
              }}
              navigation={{
                nextEl: ".right_arrow",
                prevEl: ".left_arrow",
              }}
              breakpoints={{
                0: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
                768: {
                  spaceBetween: 60,
                  slidesPerView: 2,
                },
                992: {
                  spaceBetween: 50,
                  slidesPerView: 3,
                },
                1280: {
                  spaceBetween: 70,
                  slidesPerView: 3,
                },
                1536: {
                  spaceBetween: 80,
                  slidesPerView: 3,
                },
                1600: {
                  spaceBetween: 98,
                  slidesPerView: 3,
                },
                1920: {
                  spaceBetween: 99,
                  slidesPerView: 3,
                },
                2250: {
                  spaceBetween: 120,
                  slidesPerView: 3,
                },
              }}
            >
              {productList}

              {width <= 767 ? (
                <div className="mbarrows_wrapper">
                  {/* <img
                    src={leftarrow}
                    className="left_arrow"
                    onMouseOver={(e) => (e.currentTarget.src = leftarrow)}
                    onMouseOut={(e) => (e.currentTarget.src = leftarrow)}
                  />
                  <img
                    src={rightarrow}
                    className="right_arrow"
                    onMouseOver={(e) => (e.currentTarget.src = rightarrow)}
                    onMouseOut={(e) => (e.currentTarget.src = rightarrow)}
                  /> */}
                </div>
              ) : null}
              {/* <div className="cta_wrapper" data-aos="fade-up">
                <Link to={productsURL} className="about-button">
                  Know more
                </Link>
              </div> */}
            </Swiper>
          </div>
        </motion.div>
      </section>

      <section className="home_sec4">
        <motion.div
          className="my_container"
          variants={textVariants("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
          className="heading"
          variants={textVariants("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5 }}
          >
            Todays Best Deals For You!
          </motion.h2>
          <div className="product_row" data-aos="fade-up">
            {width > 834 || width < 768 ? null : (
              <div className="arrows_wrapper">
                <img
                  src={leftarrow}
                  className="left_arrow"
                  onMouseOver={(e) => (e.currentTarget.src = leftarrow)}
                  onMouseOut={(e) => (e.currentTarget.src = leftarrow)}
                />
                <img
                  src={rightarrow}
                  className="right_arrow"
                  onMouseOver={(e) => (e.currentTarget.src = rightarrow)}
                  onMouseOut={(e) => (e.currentTarget.src = rightarrow)}
                />
              </div>
            )}
            <Swiper
              className="productSwiper"
              slidesPerView={3}
              slidesPerGroup={1}
              spaceBetween={98}
              autoHeight={true}
              modules={[Pagination, Navigation]}
              pagination={{
                type: "progressbar",
              }}
              navigation={{
                nextEl: ".right_arrow",
                prevEl: ".left_arrow",
              }}
              breakpoints={{
                0: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
                768: {
                  spaceBetween: 60,
                  slidesPerView: 2,
                },
                992: {
                  spaceBetween: 50,
                  slidesPerView: 3,
                },
                1280: {
                  spaceBetween: 70,
                  slidesPerView: 3,
                },
                1536: {
                  spaceBetween: 80,
                  slidesPerView: 3,
                },
                1600: {
                  spaceBetween: 98,
                  slidesPerView: 3,
                },
                1920: {
                  spaceBetween: 99,
                  slidesPerView: 3,
                },
                2250: {
                  spaceBetween: 120,
                  slidesPerView: 3,
                },
              }}
            >
              {productList}

              {width <= 767 ? (
                <div className="mbarrows_wrapper">
                  {/* <img
                    src={leftarrow}
                    className="left_arrow"
                    onMouseOver={(e) => (e.currentTarget.src = leftarrow)}
                    onMouseOut={(e) => (e.currentTarget.src = leftarrow)}
                  />
                  <img
                    src={rightarrow}
                    className="right_arrow"
                    onMouseOver={(e) => (e.currentTarget.src = rightarrow)}
                    onMouseOut={(e) => (e.currentTarget.src = rightarrow)}
                  /> */}
                </div>
              ) : null}
              {/* <div className="cta_wrapper" data-aos="fade-up">
                <Link to={productsURL} className="about-button">
                  Know more
                </Link>
              </div> */}
            </Swiper>
          </div>
        </motion.div>
      </section>

      <section className="home_sec4">
        <motion.div
          className="my_container"
          variants={textVariants("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
          className="heading"
          variants={textVariants("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5 }}
          >
            Most Selling Products
          </motion.h2>
          <div className="product_row" data-aos="fade-up">
            {width > 834 || width < 768 ? null : (
              <div className="arrows_wrapper">
                <img
                  src={leftarrow}
                  className="left_arrow"
                  onMouseOver={(e) => (e.currentTarget.src = leftarrow)}
                  onMouseOut={(e) => (e.currentTarget.src = leftarrow)}
                />
                <img
                  src={rightarrow}
                  className="right_arrow"
                  onMouseOver={(e) => (e.currentTarget.src = rightarrow)}
                  onMouseOut={(e) => (e.currentTarget.src = rightarrow)}
                />
              </div>
            )}
            <Swiper
              className="productSwiper"
              slidesPerView={3}
              slidesPerGroup={1}
              spaceBetween={98}
              autoHeight={true}
              modules={[Pagination, Navigation]}
              pagination={{
                type: "progressbar",
              }}
              navigation={{
                nextEl: ".right_arrow",
                prevEl: ".left_arrow",
              }}
              breakpoints={{
                0: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
                768: {
                  spaceBetween: 60,
                  slidesPerView: 2,
                },
                992: {
                  spaceBetween: 50,
                  slidesPerView: 3,
                },
                1280: {
                  spaceBetween: 70,
                  slidesPerView: 3,
                },
                1536: {
                  spaceBetween: 80,
                  slidesPerView: 3,
                },
                1600: {
                  spaceBetween: 98,
                  slidesPerView: 3,
                },
                1920: {
                  spaceBetween: 99,
                  slidesPerView: 3,
                },
                2250: {
                  spaceBetween: 120,
                  slidesPerView: 3,
                },
              }}
            >
              {productList}

              {width <= 767 ? (
                <div className="mbarrows_wrapper">
                  {/* <img
                    src={leftarrow}
                    className="left_arrow"
                    onMouseOver={(e) => (e.currentTarget.src = leftarrow)}
                    onMouseOut={(e) => (e.currentTarget.src = leftarrow)}
                  />
                  <img
                    src={rightarrow}
                    className="right_arrow"
                    onMouseOver={(e) => (e.currentTarget.src = rightarrow)}
                    onMouseOut={(e) => (e.currentTarget.src = rightarrow)}
                  /> */}
                </div>
              ) : null}
              {/* <div className="cta_wrapper" data-aos="fade-up">
                <Link to={productsURL} className="about-button">
                  Know more
                </Link>
              </div> */}
            </Swiper>
          </div>
        </motion.div>
      </section>

      {/* <section className="HomeSec5">
        <div className="HomeSec5Container">
          <div className="HomeSec5content">
              <h1>Get 5% Cash Back</h1>
              <h5>on BarterX.in</h5>
              <button>Learn More</button>
          </div>  
          <div className="HomeSec5Image"></div>
        </div>
      </section> */}
        
      <Footer />
    </>
  );
};

export default Home;
