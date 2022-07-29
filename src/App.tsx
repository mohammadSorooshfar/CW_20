import React from 'react';
 

import {
  BrowserRouter as Router,
  Route,Routes,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path ="/Wallets"  element={<Wallets/>}/>
          <Route path ="/Users" element={<Users/>}/>
          <Route path ="/*" element={<AccountManagment/>}/>
         
        </Routes>
      </Router>



    </div>
  );
}

export default App;
