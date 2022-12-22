import React, { useState } from "react";
import SettingCardItem from "./SettingCardItem";

import food from "../../../../../assets/images/food.png";
import "./SettingCardList.scss";
import Modal from "../../../Modal/Modal";

const SettingCardList = () => {
  const SettingCardList = Array(5).fill(1);
  const [modal, setModalState] = useState({
    state: false,
  });

  const openModal = () => {
    setModalState({
      state: true,
      title: "Add new product item to list",
      leftBtn: "Cancel",
      rightBtn: "Add",
    });
  };

  return (
    <>
      <ul className="setting-card-list">
        <li className="setting-card-item-first" onClick={openModal}>
          <span className="setting-card-plus">+</span>
          Add new dish
        </li>
        {SettingCardList.map((item) => (
          <SettingCardItem
            img={food}
            title="Spicy seasoned seafood noodles"
            price="2.29"
            amount="20"
            setModalState={setModalState}
          />
        ))}
      </ul>
      {modal.state && (
        <Modal
          title={modal.title}
          leftBtn={modal.leftBtn}
          rightBtn={modal.rightBtn}
          setModalState={setModalState}
        />
      )}
    </>
  );
};

export default SettingCardList;
