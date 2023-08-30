import { BsCart, BsHandThumbsUp, BsHeart } from "react-icons/bs";
import "./Card.css";
import { Link } from 'react-router-dom';

const Card = ({
  img,
  title,
  owner,
  desiredProduct,
  likes,
  OldNew,
}) => {
  return (
    <>
      {/* <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <p className="card-desc"><strong>Owner</strong>: {owner}</p>
          <p className="card-desc"><strong>Require</strong>: {desiredProduct}</p>


          <section className="card-price">
            <div className="bag">
              <i><BsHeart className="bag-icon" /></i>
              <i><BsHandThumbsUp className="bag-icon" /></i>       
            </div>
          </section>
        </div>
      </section> */}
      <div className="CategCardContainer">
        <div className="Categcard">
          <div className="content-1">
            <div className="logo-img">
              {/* <img src="https://i.postimg.cc/vBJtjtRC/nike-logo.png" alt="" /> */}
            </div>
            <img src={img} alt="" />
          </div>
          <div className="content-2">
            <div className="branding">
              <div className="brandingInner">
                <span>{title}</span>
                <span>{OldNew}</span>
              </div>
              <h4>Owner: {owner}</h4>
              <h4>Required: {desiredProduct}</h4>
            </div>
            <div className="likesContainer">
              <div className="likesContainerInner">
                <i>
                  <BsHeart />
                </i>
                <span>{likes}</span>
              </div>
              <div className="likesContainerInner">
                <i>
                  <BsHandThumbsUp />
                </i>
                {/* 1259 */}
              </div>
              <div className="price">
                <span><Link to="/product-detail" style={{ color: '#fff' }}>Let's Swap</Link></span>
              </div>
            </div>
            {/* <div className="ratings">
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
            </div> */}
            {/* <div className="size">
              <h3>SIZE</h3>
              <span>8</span>
              <span>9</span>
              <span>10</span>
              <span>11</span>
            </div>
            <div className="color">
              <h3>Color</h3>
              <span></span>
              <span></span>
              <span></span>
            </div> */}

          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
