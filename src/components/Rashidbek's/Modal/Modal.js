import React from "react";

import "./Modal.scss";

const Modal = ({ title, leftBtn, rightBtn, setModalState }) => {
  const closeModal = () => {
    setModalState({ state: false });
  };

  const closeModalWithCencel = () => {
    if (leftBtn === "Cancel") {
      setModalState({ state: false });
    }
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-inner">
        <h3 className="modal-inner-title">{title}</h3>
        <button className="modal-cencel-btn" onClick={closeModal}></button>
        <form className="modal-form">
          <input
            className="modal-form-input"
            type="text"
            name="product_text"
            aria-label="product name"
            placeholder="Product name"
          />
          <input
            className="modal-form-input"
            type="text"
            name="product_bowl"
            aria-label="Product bowls"
            placeholder="Product bowls"
          />
          <input
            className="modal-form-input"
            type="text"
            name="product_price"
            aria-label="Product price"
            placeholder="Product price"
          />
          <select className="form-modal-select">
            <option value="0">Product category</option>
            <option value="0">Product category</option>
            <option value="0">Product category</option>
            <option value="0">Product category</option>
          </select>
          <label className="modal-form-label">
            <input className="modal-form-input-file" type="file" />
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
              onClick={closeModalWithCencel}
            >
              {leftBtn}
            </button>
            <button className="btn-add" type="submit">
              {rightBtn}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
