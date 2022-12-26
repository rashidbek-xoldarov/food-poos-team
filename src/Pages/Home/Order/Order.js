import { InputField } from "../../../components/Muhammadbek's/UI/InputFiled";
import "./Order.scss";
import { hotDishes } from "../../../data/Dishes";
import { useState } from "react";

const orderData = hotDishes.slice(0, 4);

let total = undefined;
export const Order = ({ ModalShow }) => {
  return (
    <div className="order">
      <div className="order_header">
        <h3 className="order_txt">Orders #34562</h3>
        <button className="order_btn">Dine In</button>
        <button className="order_btn inactivve">To Go</button>
        <button className="order_btn inactivve">Delivery</button>
        <div style={{ display: "flex" }}>
          <p className="order_txt left">Item</p>
          <p className="order_txt qty">Qty</p>
          <p className="order_txt">Price</p>
        </div>
      </div>
      <div className="order_main">
        <ul className="order_main-list">
          {orderData.map((order, i) => (
            <li key={i} className="order_main-item">
              <div className="order_info">
                <div className="order_item">
                  <img className="order_img" src={order.foodImg} alt="" />
                  <div>
                    <h4 className="order_title">{order.foodName}</h4>
                    <span className="current_price">{order.foodPrice}</span>
                  </div>
                </div>
                <div>
                  <span className="quantity">{order.id}</span>
                  <span className="total_price">
                    ${order.foodPrice.replace("$", "") * order.id}
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  marginBottom: "24px",
                }}
              >
                <InputField
                  classname="order_input"
                  type="text"
                  placeholder="Please, just a little bit spicy only."
                />
                <button className="delete_order"></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="order_footer">
        <div className="discount">
          <p>Discount</p>
          <span>0</span>
        </div>
        <div className="total">
          <p>Sub total</p>
          <span>$29.82</span>
        </div>
        <button className="payment_btn" onClick={ModalShow}>
          Continue to Payment
        </button>
      </div>
    </div>
  );
};
