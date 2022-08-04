import React from "react";
import {Nav} from "react-bootstrap";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import "./App.css";
import {UserWallet, Wallets, User, Users, Accounts, Services, UserAccount} from "./Pages";
import Layout from "./Layout";


function App() {
    return (
        <div className="App">
            <Router>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Services/>}/>
                        <Route path="/Index" element={<Wallets/>}/>
                        <Route path="/wallet/:id" element={<UserWallet/>}/>
                        <Route path="/Index" element={<Users/>}/>
                        <Route path="/user/:id" element={<User/>}/>
                        <Route path="/accounts" element={<Accounts/>}/>
                        <Route path='/account/:id' element={<UserAccount/>}/>
                    </Routes>
                </Layout>

            </Router>
        </div>
    );
}

export default App;
