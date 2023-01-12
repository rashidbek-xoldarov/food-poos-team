import axios from "axios";
import { useEffect, useState } from "react";
import { Food } from "./Food.js/Food";
import "./Foods.scss";

export const Foods = ({ id}) => {
	const [dishes, setDishes] = useState([])


	const getDishes = (id) => {
		axios.get(`http://localhost:5000/food/${id}`).then(dish => setDishes(dish))
	}

	useEffect(() => {
		getDishes(id)
	},[id])


	return (
		<div className="food_box">
			<div className="hot_header">
				<h3 className="title">Choose dishes</h3>
				<select className="food_select" name="">
					<option value="Dine">Dine In</option>
				</select>
			</div>
			<ul className="foods_list">
				{dishes.data?.map((food) => (
					<Food key={food.id} {...food} />
				))}
			</ul>
			{/* <ul className="foods_list">
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
			</ul> */}
		</div>
	);
};
