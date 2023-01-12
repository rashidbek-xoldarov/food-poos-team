import axios from "axios";
import React, { useState } from "react";
import Modal from "../../../Modal/Modal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./SettingCardItem.scss";

const SettingCardItem = ({
  id,
  img,
  title,
  price,
  bowls,
  getFood,
  setModalState,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const editProduct = (evt) => {
    evt.preventDefault();
    const { name, price, bowls, category_id, food_img } = evt.target.elements;

    const formData = new FormData();

    formData.append("name", name.value);
    formData.append("price", price.value);
    formData.append("bowls", bowls.value);
    formData.append("category_id", category_id.value);
    formData.append("food_img", food_img.files[0]);

    axios.put(`http://localhost:5000/food/${id}`, formData).then((data) => {
      if (data.status === 200) {
        getFood();
        toast.warning("Edited");
      }
    });

    setOpenModal(false);
  };

  const deleteProduct = () => {
    axios.delete(`http://localhost:5000/food/${id}`).then((data) => {
      getFood();
      toast.error("Deleted");
    });
    setOpenModal(false);
  };

  return (
    <>
      <li className="setting-card-item">
        <img
          className="setting-card-item-img"
          src={`http://localhost:5000/` + img}
          alt={title}
        />
        <h3 className="setting-card-item-title">{title}</h3>
        <div className="setting-card-price-wrapper">
          <span className="setting-card-item-price">$ {price}</span>
          <span className="setting-card-item-amount">{bowls} Bowls</span>
        </div>
        <button
          className="setting-card-item-edi-btn"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Edit dish
        </button>
      </li>
      {openModal && (
        <Modal
          title="Edit or delete product item "
          setModalState={setOpenModal}
        >
          <form className="modal-form" onSubmit={editProduct}>
            <input
              className="modal-form-input"
              type="text"
              name="name"
              aria-label="product name"
              placeholder="Product name"
              defaultValue={title}
              required
            />
            <input
              className="modal-form-input"
              type="text"
              name="price"
              aria-label="Product price"
              placeholder="Product price"
              defaultValue={price}
              required
            />
            <input
              className="modal-form-input"
              type="text"
              name="bowls"
              aria-label="Product bowls"
              placeholder="Product bowls"
              defaultValue={bowls}
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
                onClick={deleteProduct}
              >
                Delete
              </button>
              <button className="btn-add" type="submit">
                Edit
              </button>
            </div>
          </form>
        </Modal>
      )}
      <ToastContainer />
    </>
  );
};

export default SettingCardItem;
