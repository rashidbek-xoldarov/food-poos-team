import "./OrderReport.scss";
import { customers } from "../../../data/customers";

export const OrderReport = () => {
  customers.map((item, i) => {
    return console.log(item);
  });

  return (
    <>
      <div className="order_report-header">
        <h3 className="order_txt">Order Report</h3>
        <select className="order_report-filter">
          <option value="" style={{ display: "none" }}>
            Filter Order
          </option>
          <option value="preparing">Preparing</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="order_info-box">
        <p className="order_info-txt">Customer</p>
        <p className="order_info-txt">Menu</p>
        <p className="order_info-txt">Total Payment</p>
        <p className="order_info-txt">Status</p>
      </div>
      <div className="order_report-body">
        <ul className="customers_list">
          {customers.map((item, i) => (
            <li className="customers_item" key={i}>
              <img className="customer_image" src={item.image} alt="" />
              <p className="customer_name">{item.name}</p>
              <p className="customer_order-type">{item.menu}</p>
              <p className="order_billing">{item.totalPayment}</p>
              <p className={`order_status ${item.status}`}>{item.status}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
