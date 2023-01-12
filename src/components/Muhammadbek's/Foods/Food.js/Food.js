import "./Food.scss";

export const Food = ({ id, name, image, price, bowls }) => {
  return (
    <li className="food_item">
      <img
        className="food_img"
        src={`http://localhost:5000/${image}`}
        alt={name}
      />
      <div className="food_item-box">
        <h3 className="food_title">{name}</h3>
        <span className="food_price">Price: ${price}</span>
        <p className="food_available">{bowls} Bowls available</p>
      </div>
    </li>
  );
};
