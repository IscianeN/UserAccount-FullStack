
import React from "react"
import './App.css';
import Login from './components/Login';
import Account from './components/Account';
// import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
   //<>{/* <Login></Login> */}<Account></Account></>
   <div> 
      {/* <Routes>
        <Route exact path = "/" component = {Account} ></Route>
      </Routes> */}
      <BrowserRouter> 
      <Account></Account>
      <h1> Login </h1>
      <Login></Login>
      </BrowserRouter>
   </div>
   
  );
}

export default App;
