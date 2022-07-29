import React from "react";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Users from "./Pages/Users";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Link to="/Users">Active</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/AccountManagment">Link</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/Wallets">Link</Link>
          </Nav.Item>
        </Nav>
        <Routes>
          {/* <Route path ="/Wallets"  element={<Wallets/>}/> */}
          <Route path="/Users" element={<Users />} />
          {/* <Route path ="/*" element={<AccountManagment/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
