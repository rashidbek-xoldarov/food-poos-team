import { Food } from "./Food.js/Food";
import "./Foods.scss";

export const Foods = (props) => {
	return (
		<div className="food_box">
			<div className="hot_header">
				<h3 className="title">Choose dishes</h3>
				<select className="food_select" name="">
					<option value="Dine">Dine In</option>
				</select>
			</div>
			<ul className="foods_list">
				{props.hotDishes?.map((food) => (
					<Food key={food.id} {...food} />
				))}
			</ul>
			<ul className="foods_list">
				{props.coldDishes?.map((food) => (
					<Food key={food.id} {...food} />
				))}
			</ul>
			<ul className="foods_list">
				{props.soup?.map((food) => (
					<Food key={food.id} {...food} />
				))}
			</ul>
			<ul className="foods_list">
				{props.grill?.map((food) => (
					<Food key={food.id} {...food} />
				))}
			</ul>
			<ul className="foods_list">
				{props.appetizer?.map((food) => (
					<Food key={food.id} {...food} />
				))}
			</ul>
			<ul className="foods_list">
				{props.dessert?.map((food) => (
					<Food key={food.id} {...food} />
				))}
			</ul>
		</div>
	);
};
