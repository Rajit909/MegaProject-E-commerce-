import React from "react";
import { Link } from "react-router-dom";

// const currentTab = (history, path) => {
//   if (history.location.pathname === path) {
//     return { color: "#fff" };
//   } else {
//     return { color: "#d1d1d1" };
//   }
// };

function Menu() {
  return (
    <div className="">
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <Link 
            // style={currentTab(history, "/")} 
            className="nav-link" 
            to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            // style={currentTab(history, "/about")}
            className="nav-link "
            to="/about"
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            // style={currentTab(history, "/cart")}
            className="nav-link "
            to="/cart"
          >
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link
            // style={currentTab(history, "/dashBoard")}
            className="nav-link "
            to="/dashBoard"
          >
            DashBoard
          </Link>
        </li>
        <li className="nav-item">
          <Link
            // style={currentTab(history, "/admindhashboard")}
            className="nav-link "
            to="/admindhashboard"
          >
            A.DashBoard
          </Link>
        </li>
        <li className="nav-item">
          <Link
            // style={currentTab(history, "/signup")}
            className="nav-link "
            to="/signup"
          >
            SignUp
          </Link>
        </li>
        <li className="nav-item">
          <Link
            // style={currentTab(history, "/signin")}
            className="nav-link "
            to="/signin"
          >
            SignIn
          </Link>
        </li>
        <li className="nav-item">
          <Link
            // style={currentTab(history, "/signout")}
            className="nav-link "
            to="/signout"
          >
            SignOut
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
