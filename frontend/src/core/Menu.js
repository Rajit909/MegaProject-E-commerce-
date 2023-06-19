import React, {Fragment} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {signout , isAuthenticated} from "../auth/helper/index.js"


function Menu() {
  const navigate = useNavigate()
  return (
    <div className="">
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <NavLink 
           style={({isActive}) => {
            return{
              color: isActive ? "white" : "blue",
              backgroundColor: isActive ? "#343a40" : "",
              border: isActive ? "none" : ""
            }
           }}
          className="nav-link "
            to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
          style={({isActive}) => {
            return{
              color: isActive ? "white" : "blue",
              backgroundColor: isActive ? "#343a40" : "",
              border: isActive ? "none" : ""
            }
           }}
            className="nav-link "
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
          style={({isActive}) => {
            return{
              color: isActive ? "white" : "blue",
              backgroundColor: isActive ? "#343a40" : "",
              border: isActive ? "none" : ""
            }
           }}
            className="nav-link "
            to="/cart"
          >
            Cart
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
          style={({isActive}) => {
            return{
              color: isActive ? "white" : "blue",
              backgroundColor: isActive ? "#343a40" : "",
              border: isActive ? "none" : ""
            }
           }}
            className="nav-link "
            to="/user/dashBoard"
          >
            DashBoard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
          style={({isActive}) => {
            return{
              color: isActive ? "white" : "blue",
              backgroundColor: isActive ? "#343a40" : "",
              border: isActive ? "none" : ""
            }
           }}
           className="nav-link "
           to="/admin/dashboard"
           >
            A.DashBoard
          </NavLink>
        </li>
            
        { !isAuthenticated() && (
          <Fragment>
          <li className="nav-item">
            <NavLink
            style={({isActive}) => {
              return{
                color: isActive ? "white" : "blue",
                backgroundColor: isActive ? "#343a40" : "",
                border: isActive ? "none" : ""
              }
             }}
              className="nav-link "
              to="/signup"
            >
              Register
            </NavLink>
          </li>
  
          <li className="nav-item">
            <NavLink
            style={({isActive}) => {
              return{
                color: isActive ? "white" : "blue",
                backgroundColor: isActive ? "#343a40" : "",
                border: isActive ? "none" : ""
              }
             }}
              className="nav-link "
              to="/signin"
            >
              Login
            </NavLink>
          </li>
  
  
          </Fragment>
        )}

      
        {isAuthenticated() && (
          <li className="nav-item">
            <NavLink
            className="nav-link text-warning"
            onClick={() => {
              signout(() => {
              
              })
            }}
            to="/"
            >
              LogOut
            </NavLink>
        </li> 
        )}

      </ul>
    </div>
  );
}

export default Menu;
