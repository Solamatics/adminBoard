import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
