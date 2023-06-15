import React from "react";
import { NavLink } from "react-router-dom";
import {signout} from "../auth/helper/index.js"


function Menu() {
  return (
    <div className="">
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <NavLink 
           style={({isActive}) => {
            return{
              color: isActive ? "white" : "blue",
              backgroundColor: isActive ? "#343a40" : "#343a40"
            }
           }}
          className="nav-link "
            to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link "
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link "
            to="/cart"
          >
            Cart
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link "
            to="/dashBoard"
          >
            DashBoard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link "
            to="/admindhashboard"
          >
            A.DashBoard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link "
            to="/signup"
          >
            SignUp
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link "
            to="/signin"
          >
            SignIn
          </NavLink>
        </li>
       
       signout
        <li className="nav-item">
          <NavLink
            className="nav-link "
            to="/signout"
          >
            SignOut
          </NavLink>
        </li> 
      </ul>
    </div>
  );
}

export default Menu;
