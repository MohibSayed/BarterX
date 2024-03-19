import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import { useWindowSize } from "react-use";
import { Link, useNavigate } from "react-router-dom";
import { textVariants } from "../../Components/Motion";
import { motion } from "framer-motion";
import Footer from "../../Components/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
import leftarrow from "../../assets/left_arrow.svg";
import rightarrow from "../../assets/right_arrow.svg";
import hero from '../../assets/hero.png'

const Home = () => {
  const { width } = useWindowSize();

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSingleProduct = (productId) => {
    axios
      .post(`http://localhost:8800/api/getproduct/${productId}`)
      .then((response) => {
        if (response.status === 200) {
          const productID = response.data._id;
          navigate("/product-detail", { state: { id: productID } });
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

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
      link: "/product-detail",
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
      link: "/product-detail",
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
      link: "/product-detail",
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
      link: "/product-detail",
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
      link: "/product-detail",
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
      link: "/product-detail",
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
      link: "/product-detail",
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
      link: "/product-detail",
    },
  ];

  const productList = homepageProduct.map((item, i) => (
    <SwiperSlide key={i}>
      <div className="product_col" data-aos="fade-up">
        <div className="img_wrapper">
          <Link to={item.link} className="product_link">
            {item.images && item.images.length > 0 ? (
              <img
                src={item.images[0].url}
                alt={item.alt}
                className="product_img"
                data-aos="fade-up"
              />
            ) : (
              <p>No images available</p>
            )}
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

          <p className="product_desc">Category: {item.price}</p>
        </div>
        <Link to={item.link} className="product_link">
          Know more
        </Link>
      </div>
    </SwiperSlide>
  ));

  const productLists = products.map((item, i) => (
    <SwiperSlide key={item._id}>
      <div className="product_col" data-aos="fade-up">
        <div className="img_wrapper">
          {/* <Link to={} className="product_link"> */}
          <img
            src={item.images[0].url}
            // alt={item.alt}
            className="product_img"
            data-aos="fade-up"
          />
          {/* </Link> */}
        </div>
        <div className="product_container">
          {width > 391 ? (
            <h2
              className="product_title"
              dangerouslySetInnerHTML={{ __html: item.prodname }}
              data-aos="fade-up"
            />
          ) : (
            {
              /* <h2
              className="product_title"
              dangerouslySetInnerHTML={{ __html: item.mbtitle }}
              data-aos="fade-up"
            /> */
            }
          )}
          <p className="product_desc" data-aos="fade-up">
            {item.desc}
          </p>
          <p className="product_desc">Category: {item.categ}</p>
        </div>
        {/* <Link to={} className="product_link"> */}
        {/* Know more */}
        <a onClick={() => handleSingleProduct(item._id)}>Know More</a>
        {/* </Link> */}
      </div>
    </SwiperSlide>
  ));

  const filteredElectronicProducts = products.filter(
    (item) => item.categ === "Electronics"
  );
  const ElectronicLists = filteredElectronicProducts.map((item, i) => (
    <SwiperSlide key={item._id}>
      <div className="product_col" data-aos="fade-up">
        <div className="img_wrapper">
          {/* <Link to={} className="product_link"> */}
          <img
            src={item.images[0].url}
            // alt={item.alt}
            className="product_img"
            data-aos="fade-up"
          />
          {/* </Link> */}
        </div>
        <div className="product_container">
          {width > 391 ? (
            <h2
              className="product_title"
              dangerouslySetInnerHTML={{ __html: item.prodname }}
              data-aos="fade-up"
            />
          ) : (
            {
              /* <h2
              className="product_title"
              dangerouslySetInnerHTML={{ __html: item.mbtitle }}
              data-aos="fade-up"
            /> */
            }
          )}
          <p className="product_desc" data-aos="fade-up">
            {item.desc}
          </p>
          <p className="product_desc">Category: {item.categ}</p>
        </div>
        {/* <Link to={} className="product_link"> */}
        {/* Know more */}
        <a onClick={() => handleSingleProduct(item._id)}>Know More</a>
        {/* </Link> */}
      </div>
    </SwiperSlide>
  ));
  const filteredVehicleProducts = products.filter(
    (item) => item.categ === "Vehicles"
  );
  const VehicleLists = filteredVehicleProducts.map((item, i) => (
    <SwiperSlide key={item._id}>
      <div className="product_col" data-aos="fade-up">
        <div className="img_wrapper">
          {/* <Link to={} className="product_link"> */}
          <img
            src={item.images[0].url}
            // alt={item.alt}
            className="product_img"
            data-aos="fade-up"
          />
          {/* </Link> */}
        </div>
        <div className="product_container">
          {width > 391 ? (
            <h2
              className="product_title"
              dangerouslySetInnerHTML={{ __html: item.prodname }}
              data-aos="fade-up"
            />
          ) : (
            {
              /* <h2
              className="product_title"
              dangerouslySetInnerHTML={{ __html: item.mbtitle }}
              data-aos="fade-up"
            /> */
            }
          )}
          <p className="product_desc" data-aos="fade-up">
            {item.desc}
          </p>
          <p className="product_desc">Category: {item.categ}</p>
        </div>
        {/* <Link to={} className="product_link"> */}
        {/* Know more */}
        <a onClick={() => handleSingleProduct(item._id)}>Know More</a>
        {/* </Link> */}
      </div>
    </SwiperSlide>
  ));

  const filteredFurnitureProducts = products.filter(
    (item) => item.categ === "Furniture"
  );
  const FurnitureLists = filteredFurnitureProducts.map((item, i) => (
    <SwiperSlide key={item._id}>
      <div className="product_col" data-aos="fade-up">
        <div className="img_wrapper">
          {/* <Link to={} className="product_link"> */}
          <img
            src={item.images[0].url}
            // alt={item.alt}
            className="product_img"
            data-aos="fade-up"
          />
          {/* </Link> */}
        </div>
        <div className="product_container">
          {width > 391 ? (
            <h2
              className="product_title"
              dangerouslySetInnerHTML={{ __html: item.prodname }}
              data-aos="fade-up"
            />
          ) : (
            {
              /* <h2
              className="product_title"
              dangerouslySetInnerHTML={{ __html: item.mbtitle }}
              data-aos="fade-up"
            /> */
            }
          )}
          <p className="product_desc" data-aos="fade-up">
            {item.desc}
          </p>
          <p className="product_desc">Category: {item.categ}</p>
        </div>
        {/* <Link to={} className="product_link"> */}
        {/* Know more */}
        <a onClick={() => handleSingleProduct(item._id)}>Know More</a>
        {/* </Link> */}
      </div>
    </SwiperSlide>
  ));
  return (
    <>
      <Navbar />

      {/* <section className="ban_sec">
        <motion.div
          className="Bannercontainer"
          variants={textVariants("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="ban_img">
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
      </section> */}

      <section className="ban_sec">
        <img
          class="main-img"
          src="https://png.pngtree.com/png-vector/20220512/ourmid/pngtree-barter-icon-for-product-exchange-on-black-background-vector-png-image_46103952.jpg"
        />

        <h1 class="tag">
          Barter your spare capacity unsold time idle inventory empty space to
          get the things you need.
        </h1>

        <div class="scroll-div1">
          <h1>barter</h1>
          <h1>barter</h1>
          <h1>barter</h1>
          <h1>barter</h1>
        </div>

        <div class="scroll-div2">
          <h1>barter</h1>
          <h1>barter</h1>
          <h1>barter</h1>
          <h1>barter</h1>
        </div>

        <div class="scroll-div3">
          <h1>barter</h1>
          <h1>barter</h1>
          <h1>barter</h1>
          <h1>barter</h1>
        </div>

        <h4 class="bottom-text">
          Barter what you have. Get what you need. Give what you can.
        </h4>
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
          <Link to="/categ/">
            <motion.div
              variants={textVariants("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="HomeSec2Card"
            >
              <p>ELECTRONICS</p>
            </motion.div>
          </Link>

          <Link to="/categ">
            <motion.div
              variants={textVariants("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="HomeSec3Card"
            >
              <p>VEHICLES</p>
            </motion.div>
          </Link>

          <Link to="/categ">
            <motion.div
              variants={textVariants("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="HomeSec4Card"
            >
              <p>HOME APPLIANCES</p>
            </motion.div>
          </Link>

          <Link to="/categ">
            <motion.div
              variants={textVariants("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="HomeSec5Card"
            >
              <p>FURNITURE</p>
            </motion.div>
          </Link>

          <Link to="/categ">
            <motion.div
              variants={textVariants("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="HomeSec6Card"
            >
              <p>ART</p>
            </motion.div>
          </Link>
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
              {productLists.length > 0 ? (
                productLists
              ) : (
                <img
                  src="https://cdn.dribbble.com/users/546766/screenshots/4790425/progress-circle.gif"
                  height={250}
                />
                // <SkeletonTheme baseColor="#fafafe" highlightColor="#eee">
                //   <div>
                //     <Skeleton count={1} height="10em" width="18em" />
                //     <div style={{ marginTop: "1em" }}>
                //       <Skeleton count={2} width={"18em"} />
                //     </div>
                //     <div style={{ marginTop: "3em" }}>
                //       <Skeleton count={1} width={"18em"} />
                //     </div>
                //   </div>
                // </SkeletonTheme>
              )}

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

      {/* <section className="home_sec4">
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
              {productLists.length > 0 ? (productLists) : (
                <img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" height={250}/>
              ) }

              {width <= 767 ? (
                <div className="mbarrows_wrapper">
                </div>
              ) : null}
            </Swiper>
          </div>
        </motion.div>
      </section> */}

      {/* <section className="home_sec4">
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
              {productLists.length > 0 ? (productLists) : (
                <img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" height={250}/>
              ) }

              {width <= 767 ? (
                <div className="mbarrows_wrapper">

                </div>
              ) : null}
            </Swiper>
          </div>
        </motion.div>
      </section> */}

      {/* <section className="home_sec4">
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
              {productLists}

              {width <= 767 ? (
                <div className="mbarrows_wrapper">

                </div>
              ) : null}
    
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
            Electronics
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
              {ElectronicLists.length > 0 ? (ElectronicLists) : (
                <img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" height={250}/>
              ) }

              {width <= 767 ? (
                <div className="mbarrows_wrapper">

                </div>
              ) : null}

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
            Vehicles
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
              {VehicleLists.length > 0 ? (VehicleLists) : (
                <img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" height={250}/>
              ) }

              {width <= 767 ? (
                <div className="mbarrows_wrapper">
                </div>
              ) : null}

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
            Furniture
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
              {FurnitureLists.length > 0 ? (FurnitureLists) : (
                <img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" height={250}/>
              ) }

              {width <= 767 ? (
                <div className="mbarrows_wrapper">
                </div>
              ) : null}
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
            Art
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
              {FurnitureLists.length > 0 ? (FurnitureLists) : (
                <img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" height={250}/>
              ) }

              {width <= 767 ? (
                <div className="mbarrows_wrapper">

                </div>
              ) : null}

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
            Art
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
               {FurnitureLists.length > 0 ? (FurnitureLists) : (
                <img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" height={250}/>
              ) }

              {width <= 767 ? (
                <div className="mbarrows_wrapper">
                 
                </div>
              ) : null}

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
            MISCELLANEOUS
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
              {FurnitureLists.length > 0 ? (FurnitureLists) : (
                <img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" height={250}/>
              ) }

              {width <= 767 ? (
                <div className="mbarrows_wrapper">
     
                </div>
              ) : null}
 
            </Swiper>
          </div>
        </motion.div>
      </section> */}

      <Footer />
    </>
  );
};

export default Home;
