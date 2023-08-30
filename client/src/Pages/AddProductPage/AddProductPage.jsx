import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FileUploader } from "react-drag-drop-files";
import "./AddProductPage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "react-datepicker/dist/react-datepicker.css";

const options = ["one", "two", "three"];
const defaultOption = options[0];

const fileTypes = ["JPG", "PNG", "GIF"];

const AddProductPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <>
      <Navbar />

      <div className="addProductContainer">
        <h1>PUBLISH PRODUCT</h1>
        <p>
          To start swapping, all you need is a name, required product, and file.
        </p>

        <div className="addProductInnerCont">
          <div className="addProductInnerContainer">
            <div className="inputContainerProduct">
              <span>
                Product Name <span>*</span>{" "}
              </span>
              <input type="text" name="" id="" />
              <p>Do not exceed 20 characters when entering the product name.</p>
            </div>

            <div className="categDropDown">
              <div className="dropDownInner">
                <h4>Category</h4>
                <div className="dropdownDiv">
                  <Dropdown
                    options={options}
                    value={defaultOption}
                    placeholder="Select an option"
                  />
                </div>
              </div>
              <div className="dropDownInner">
                <h4>Condition</h4>
                <div className="dropdownDiv">
                  <Dropdown
                    options={options}
                    value={defaultOption}
                    placeholder="Select an option"
                  />
                </div>
              </div>
            </div>

            <div className="inputContainerProduct inputContainerProductDesc">
              <span>Description *</span>
              <textarea type="text" rows={10} name="" id="" />
              <p>
                Do not exceed 100 characters when entering the product
                description.
              </p>
            </div>
          </div>

          <div className="addProductInnerContainer">
            <div className="inputContainerProduct">
              <span>
                Desired Product Name <span>*</span>{" "}
              </span>
              <input type="text" name="" id="" />
              <p>Give the product name you want in replace.</p>
            </div>

            <div className="categDropDown">
              <div className="dropDownInner">
                <h4>Date of Purchase</h4>
                <div className="dropdownDiv">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
            </div>
            <div className="fileUpload">
              <span>
                Media <span>*</span>{" "}
              </span>
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
                multiple={true}
                required={true}
              />
              <p>
                {file ? `File name: ${file[0].name}` : "no files uploaded yet"}
              </p>
              <button>Publish Product</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddProductPage;
