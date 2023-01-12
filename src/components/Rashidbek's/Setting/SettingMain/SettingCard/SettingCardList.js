import React, { useEffect, useState } from "react";
import SettingCardItem from "./SettingCardItem";

import "./SettingCardList.scss";
import Modal from "../../../Modal/Modal";
import axios from "axios";

const SettingCardList = ({ id }) => {
  const [foodList, setFoodList] = useState([]);
  const [modal, setModalState] = useState(false);
  console.log(foodList);

  const getFood = () => {
    axios.get(`http://localhost:5000/food/${id}`).then((data) => {
      if (data.status === 200) {
        setFoodList(data.data);
      }
    });
  };

  useEffect(() => {
    getFood();
  }, [id]);

  const addProduct = (evt) => {
    evt.preventDefault();
    const { name, price, bowls, category_id, food_img } = evt.target.elements;

    const formData = new FormData();

    formData.append("name", name.value);
    formData.append("price", price.value);
    formData.append("bowls", bowls.value);
    formData.append("category_id", category_id.value);
    formData.append("food_img", food_img.files[0]);

    axios.post("http://localhost:5000/food", formData).then((data) => {
      if (data.status === 200) {
        getFood();
        setModalState(false);
      }
    });
  };

  return (
    <>
      <ul className="setting-card-list">
        <li
          className="setting-card-item-first"
          onClick={() => setModalState(true)}
        >
          <span className="setting-card-plus">+</span>
          Add new dish
        </li>
        {foodList.length !== 0 &&
          foodList.map((item, index) => (
            <SettingCardItem
              key={item.id}
              id={item.id}
              img={item.image}
              title={item.name}
              price={item.price}
              bowls={item.bowls}
              getFood={getFood}
              setModalState={setModalState}
            />
          ))}
      </ul>
      {modal && (
        <Modal
          title="Add new product item to list"
          setModalState={setModalState}
        >
          <form className="modal-form" onSubmit={addProduct}>
            <input
              className="modal-form-input"
              type="text"
              name="name"
              aria-label="product name"
              placeholder="Product name"
              required
            />
            <input
              className="modal-form-input"
              type="text"
              name="price"
              aria-label="Product price"
              placeholder="Product price"
              required
            />
            <input
              className="modal-form-input"
              type="text"
              name="bowls"
              aria-label="Product bowls"
              placeholder="Product bowls"
              required
            />
            <select className="form-modal-select" name="category_id" required>
              <option hidden>Product category</option>
              <option value="1">Hot dishes</option>
              <option value="2">Cold dishes</option>
              <option value="3">Soup</option>
              <option value="4">Grill</option>
              <option value="5">Appetizer</option>
              <option value="6">Dessert</option>
            </select>
            <label className="modal-form-label">
              <input
                className="modal-form-input-file"
                type="file"
                name="food_img"
                required
              />
              <p className="modal-form-label-text">
                Click or drag file to this area to upload
              </p>
              <span className="modal-form-label-span">
                Support for a single or bulk upload.
              </span>
            </label>
            <div className="btn-wrapper">
              <button
                className="btn-cencel"
                type="button"
                onClick={() => setModalState(false)}
              >
                Cencel
              </button>
              <button className="btn-add" type="submit">
                Add
              </button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default SettingCardList;
