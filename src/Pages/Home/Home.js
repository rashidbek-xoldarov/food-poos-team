import React from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import { Foods } from "../../components/Muhammadbek's/Foods/Foods";
import { Header } from "../../components/Muhammadbek's/Header/Header";
import { hotDishes, coldDishes, soup, grill, appetizer, dessert } from "../../data/Dishes";
import { Order } from "./Order/Order";
import "./Home.scss";

const Home = () => {
	return (
		<div style={{display: 'flex', flexGrow: '1'}}>
		<div className="home_main">
			<Header />


			<ul className="foood_list">
				<li className="foood_item">
					<NavLink
					end
						className={({ isActive }) => (isActive ? "actived" : "inactived")}
						to="/home"
					>
						Hot Dishes
					</NavLink>
				</li>
				<li className="foood_item">
					<NavLink
						className={({ isActive }) => (isActive ? "actived" : "inactived")}
						to="cold"
					>
						Cold Dishes
					</NavLink>
				</li>
				<li className="foood_item">
					<NavLink
						className={({ isActive }) => (isActive ? "actived" : "inactived")}
						to="soup"
					>
						Soup
					</NavLink>
				</li>
				<li className="foood_item">
					<NavLink
						className={({ isActive }) => (isActive ? "actived" : "inactived")}
						to="gril"
					>
						Grill
					</NavLink>
				</li>
				<li className="foood_item">
					<NavLink
						className={({ isActive }) => (isActive ? "actived" : "inactived")}
						to="appetizer"
					>
						Appetizer
					</NavLink>
				</li>
				<li className="foood_item">
					<NavLink
						className={({ isActive }) => (isActive ? "actived" : "inactived")}
						to="desert"
					>
						Dessert
					</NavLink>
				</li>
			</ul>
			<Routes>
				<Route index element={<Foods hotDishes={hotDishes} />} />
				<Route path="cold" element={<Foods coldDishes={coldDishes} />} />
				<Route path="soup" element={<Foods soup={soup} />} />
				<Route path="gril" element={<Foods grill={grill}/>} />
				<Route path="appetizer" element={<Foods appetizer={appetizer} />} />
				<Route path="desert" element={<Foods dessert={dessert} />} />
			</Routes>
		</div>
		<Order />
		</div>
	);
};

export default Home;
