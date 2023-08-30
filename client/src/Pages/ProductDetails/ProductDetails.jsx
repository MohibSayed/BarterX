import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const ProductDetails = () => {
  const [imgId, setImgId] = useState(1);

  const handleImageClick = (event, id) => {
    event.preventDefault();
    setImgId(id);
  };

  useEffect(() => {
    const displayWidth = document.querySelector(
      ".img-showcase img:first-child"
    ).clientWidth;
    document.querySelector(".img-showcase").style.transform = `translateX(${
      -(imgId - 1) * displayWidth
    }px)`;
  }, [imgId]);

  const ProdcutDetailArr = [
    {
      id: 1,
      pname: "Sofa",
      pdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.",
      powner: "Ram Shinde",
      requiredment: "Office Chair",
      dateOfPurchase: "12/10/2022",
    }
  ];

  const imgBtns = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      alt: "shoe image",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="productDetailContainer">
        <div className="ProductcardWrapper">
          <div className="DetailProductcard">
            <div className="product-imgs">
              <div className="img-display">
                <div className="img-showcase">
                  {imgBtns.map((imgItem) => (
                    <img key={imgItem.id} src={imgItem.src} alt={imgItem.alt} />
                  ))}
                </div>
              </div>
              <div className="img-select">
                {imgBtns.map((imgItem) => (
                  <div className="img-item" key={imgItem.id}>
                    <a
                      href="#"
                      data-id={imgItem.id}
                      onClick={(event) => handleImageClick(event, imgItem.id)}
                    >
                      <img src={imgItem.src} alt={imgItem.alt} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {ProdcutDetailArr.map((pItem) => (
              <div className="product-content">
                <h2 className="product-title">{pItem.pname}</h2>
                <div className="product-rating">
                  Traded: <span>(21)</span>
                </div>

                <div className="product-detail">
                  <h2>about this item: </h2>
                  <p>
                    {pItem.pdesc}
                  </p>
                  
                  <ul>
                    <li>
                      Owner: <span>{pItem.powner}</span>
                    </li>
                    <li>
                      Required: <span>{pItem.requiredment}</span>
                    </li>
                    <li>
                      Date Of Purchase: <span>{pItem.dateOfPurchase}</span>
                    </li>
                  </ul>
                </div>

                <div className="purchase-info">
                  <button type="button" className="btn">
                    Let's Swap
                  </button>
                  <button type="button" className="btn">
                    Let's Chat
                  </button>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetails;
