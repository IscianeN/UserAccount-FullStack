import React, { useState, useEffect } from "react";

const Account = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Sign up</h2>
        </div>
        <form className="form-wrapper">
            <div className="user-name"> 
            <label className="label">Username</label>
            <input type = "text" required ></input>
            </div>

            <div className="user-mail"> 
            <label className="label">Email</label>
            <input type = "email" required ></input>
            </div>
            <div className="user-password"> 
            <label className="label">Password</label>
            <input type = "password" required ></input>
            </div>
        </form>
        <div>
            <button className="submit" onClick= {handleFormSubmit}>Sign Up</button>
            </div>
      </div>
    </div>
  );
};
export default Account;