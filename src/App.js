import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./assets/styles/main.scss";
import { Foods } from "./components/Muhammadbek's/Foods/Foods";
import Sidebar from "./components/Sidebar/Sidebar";
import { hotDishes } from "./data/Dishes";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import { Order } from "./Pages/Home/Order/Order";
import Settings from "./Pages/Settings/Settings";




function App() {
	return (
		<div className="App">
			<div className="app-inner">
				<Sidebar />
				<Routes>
					<Route path="/" element={<Navigate to="/home" replace={true} />} />
					<Route path="/home/*" element={<Home /> }/>
					
					{/* </Route> */}
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
				{/*  */}
			</div>
		</div>
	);
}

export default App;
