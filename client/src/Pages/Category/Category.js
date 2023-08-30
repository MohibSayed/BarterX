import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "../../Components/Category/Card";
import { useWindowSize } from "react-use";
import { Link } from "react-router-dom";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import logo from "../../assets/logo.png";
import Input from "../../Components/Category/Input";
import Footer from "../../Components/Footer/Footer";
import AccountMenu from "../../Components/Navbar/AccountMenu";

function Category() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({
        img,
        title,
        star,
        reviews,
        likes,
        newPrice,
        owner,
        desiredProduct,
        OldNew
      }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          desiredProduct={desiredProduct}
          owner={owner}
          star={star}
          reviews={reviews}
          likes={likes}
          newPrice={newPrice}
          OldNew={OldNew}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);
  const { width: windowWidth } = useWindowSize();
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  const toggleSection = () => {
    setIsSectionVisible(!isSectionVisible);
  };

  return (
    <>
      {windowWidth > 1023 ? (
        <>
          <Sidebar handleChange={handleChange} />
          <Navigation query={query} handleInputChange={handleInputChange} />
          <Recommended handleClick={handleClick} />
          <Products result={result} />
        </>
      ) : (
        <>
          <section>
            <nav className="categNavMob">
              <div className="logo">
                <Link to="/"><img src={logo} alt="" /></Link>
              </div>
              <div className="nav-container">
                <input
                  className="search-input"
                  type="text"
                  onChange={handleInputChange}
                  value={query}
                  placeholder="Enter your search shoes."
                />
              </div>
              <div className="profile-container">
                <Link to="">
                  <AccountMenu />                 
                </Link>
              </div>
            </nav>
          </section>

          <section className="CategSec2">
            <div className="CategSec2Head">
              <h1>Filters</h1>
              <img
                src="https://cdn.pixabay.com/photo/2019/11/06/05/02/icon-4605170_1280.png"
                alt=""
                onClick={toggleSection}
              />
            </div>
            {isSectionVisible && (
              <div className="filterCategContainer">
                <div className="categDiv">
                  <h2>Catgeory</h2>
                  <div className="ml">
                    <label className="sidebar-label-container">
                      <input
                        onChange={handleChange}
                        type="radio"
                        value=""
                        name="test"
                      />
                      <span className="checkmark"></span>All
                    </label>
                    <Input
                      handleChange={handleChange}
                      value="sneakers"
                      title="Sneakers"
                      name="test"
                    />
                    <Input
                      handleChange={handleChange}
                      value="flats"
                      title="Flats"
                      name="test"
                    />
                    <Input
                      handleChange={handleChange}
                      value="sandals"
                      title="Sandals"
                      name="test"
                    />
                    <Input
                      handleChange={handleChange}
                      value="heels"
                      title="Heels"
                      name="test"
                    />
                    <Input
                      handleChange={handleChange}
                      value="T-shirt"
                      title="T-shirt"
                      name="test"
                    />
                  </div>
                </div>

                <div className="categDiv">
                  <h2>Catgeory</h2>
                  <div className="ml">
                    <label className="sidebar-label-container">
                      <input
                        onChange={handleChange}
                        type="radio"
                        value=""
                        name="test"
                      />
                      <span className="checkmark"></span>All
                    </label>
                    <Input
                      handleChange={handleChange}
                      value="sneakers"
                      title="Sneakers"
                      name="test"
                    />
                    <Input
                      handleChange={handleChange}
                      value="flats"
                      title="Flats"
                      name="test"
                    />
                    <Input
                      handleChange={handleChange}
                      value="sandals"
                      title="Sandals"
                      name="test"
                    />
                    <Input
                      handleChange={handleChange}
                      value="heels"
                      title="Heels"
                      name="test"
                    />
                    <Input
                      handleChange={handleChange}
                      value="T-shirt"
                      title="T-shirt"
                      name="test"
                    />
                  </div>
                </div>
                <div className="categDiv">
                  <h2>Catgeory</h2>
                  <div className="ml">
                    <label className="sidebar-label-container">
                      <input
                        onChange={handleChange}
                        type="radio"
                        value=""
                        name="test"
                      />
                      <span className="checkmark"></span>All
                    </label>
                    <Input
                      handleChange={handleChange}
                      value="sneakers"
                      title="Sneakers"
                      name="test"
                    />
                    <Input
                      handleChange={handleChange}
                      value="flats"
                      title="Flats"
                      name="test"
                    />
                    <Input
                      handleChange={handleChange}
                      value="sandals"
                      title="Sandals"
                      name="test"
                    />
                    <Input
                      handleChange={handleChange}
                      value="heels"
                      title="Heels"
                      name="test"
                    />
                    <Input
                      handleChange={handleChange}
                      value="T-shirt"
                      title="T-shirt"
                      name="test"
                    />
                  </div>
                </div>
              </div>
            )}
          </section>

          <Products result={result} />
          <Footer />
        </>
      )}
    </>
  );
}

export default Category;
