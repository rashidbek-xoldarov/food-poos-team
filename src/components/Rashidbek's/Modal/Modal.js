import React from "react";

import "./Modal.scss";

const Modal = ({ title, setModalState, children }) => {
  const closeModal = () => {
    setModalState(false);
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-inner">
        <h3 className="modal-inner-title">{title}</h3>
        <button className="modal-cencel-btn" onClick={closeModal}></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
