import React, { useEffect, useState } from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import { Foods } from "../../components/Muhammadbek's/Foods/Foods";
import { Header } from "../../components/Muhammadbek's/Header/Header";
import {
	hotDishes,
	coldDishes,
	soup,
	grill,
	appetizer,
	dessert,
} from "../../data/Dishes";
import { Order } from "./Order/Order";
import axios from "axios";
import "./Home.scss";
import { PaymentModal } from "../../components/Muhammadbek's/UI/PaymentModal";

const Home = () => {
	const [show, setShow] = useState(false);

	const ModalShow = () => {
		setShow(true);
	};

	const ModalHide = () => {
		setShow(false);
	};

	return (
		<div style={{ display: "flex", flexGrow: "1" }}>
			<div className="home_main">
				<div className={`overlay ${show}`}></div>
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
					<Route index element={<Foods id={1} />} />
					<Route path="cold" element={<Foods id={2} />} />
					<Route path="soup" element={<Foods id={3} />} />
					<Route path="gril" element={<Foods id={4} />} />
					<Route path="appetizer" element={<Foods id={5} />} />
					<Route path="desert" element={<Foods id={6} />} />
				</Routes>
			</div>
			<PaymentModal ModalHide={ModalHide} show={show} />
			<Order ModalShow={ModalShow} />
		</div>
	);
};

export default Home;
