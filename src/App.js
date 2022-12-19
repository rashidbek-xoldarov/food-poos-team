import { Route, Routes } from "react-router-dom";
import "./assets/styles/main.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Settings from "./Pages/Settings/Settings";

function App() {
  return (
    <div className="App">
      <div className="app-inner">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
