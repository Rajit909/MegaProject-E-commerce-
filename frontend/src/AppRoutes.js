import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./core/Home.js";
import Signup from "./user/Signup.js";
import Signin from "./user/Signin.js";

import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";

import { isAuthenticated } from "./auth/helper/index";
import AddCategory from "./admin/AddCategory.js";

function AppRoutes() {
  return (
    <Routes>
      <Route
        exact 
        path="/" 
        element={<Home />} />
      <Route
        exact 
        path="/signup" 
        element={<Signup />} />
      <Route
        exact 
        path="/signin" 
        element={<Signin />} />
      <Route
        exact
        path="/user/dashBoard"
        element={
          isAuthenticated ? <UserDashBoard /> : <Navigate to="/signin" />
        }
      />
      <Route
        exact
        path="/admin/dashBoard"
        element={
          isAuthenticated ? <AdminDashBoard /> : <Navigate to="/signin" />
        }
      />
      <Route
        path="/admin/create/category"
        exact
        element={isAuthenticated ? <AddCategory /> : <Navigate to="/signin" />}
      />
    </Routes>
  );
}

export default AppRoutes;

// delete product call to backend
export const deleteProducts = () => {
  return fetch(`${API}/products`, {
      method: "GET"
  })
  .then(response => {
      return response.json();
  })
  .catch(err => console.log(err))
}