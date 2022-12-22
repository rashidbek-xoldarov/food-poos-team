import "./Food.scss"

export const Food = ({foodImg, foodName, foodPrice, id, isAvailable}) => {
    return (
        <li className="food_item">
            <img className="food_img" src={foodImg} alt={foodName} />
            <div className="food_item-box">
                <h3 className="food_title">{foodName}</h3>
                <span className="food_price">{foodPrice}</span>
                <p className="food_available">{isAvailable}</p>
            </div>
        </li>
    )
}
