import React from "react";

import "./SettingCardItem.scss";

const SettingCardItem = ({ img, title, price, amount, setModalState }) => {
  return (
    <li className="setting-card-item">
      <img className="setting-card-item-img" src={img} alt={title} />
      <h3 className="setting-card-item-title">{title}</h3>
      <div className="setting-card-price-wrapper">
        <span className="setting-card-item-price">$ {price}</span>
        <span className="setting-card-item-amount">{amount} Bowls</span>
      </div>

      <button
        className="setting-card-item-edi-btn"
        onClick={() => {
          setModalState({
            state: true,
            title: "Edit or delete product item ",
            leftBtn: "Delete",
            rightBtn: "Edit",
          });
        }}
      >
        Edit dish
      </button>
    </li>
  );
};

export default SettingCardItem;
