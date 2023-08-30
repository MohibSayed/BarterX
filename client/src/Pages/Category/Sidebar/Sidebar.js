import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
import logo from '../../../assets/logo.png';
import { Link } from "react-router-dom";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <Category handleChange={handleChange} />
        <Category handleChange={handleChange} />
        <Category handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
