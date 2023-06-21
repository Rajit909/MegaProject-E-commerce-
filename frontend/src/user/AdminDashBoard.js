import React from "react";
import Base from "../core/Base.js";
import { NavLink } from "react-router-dom";

import { isAuthenticated } from "../auth/helper/index.js";

const AdminDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const AdminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <NavLink
              to="/admin/create/category"
              className="nav-link text-success"
            >
              Create Category
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink
              to="/admin/categories"
              className="nav-link text-success"
            >
              Manage Categories
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink
              to="/admin/create/product"
              className="nav-link text-success"
            >
              Create Product
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink to="admin/products" className="nav-link text-success">
              Manage Product
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink to="admin/orders" className="nav-link text-success">
              Manage Orders
            </NavLink>
          </li>
        </ul>
      </div>
    );
  };

  const AdminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">Admin info</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge bg-success mr-2">Name :</span> {name}
          </li>
          <li className="list-group-item">
            <span className="badge bg-success mr-2">Email :</span> {email}
          </li>
          <li className="list-group-item">
            <span className="badge bg-danger mr-2">Admin Area</span> {email}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Base
      title="AdminDashBoard"
      description="manage all of your Orders here"
      className="container bg-success p-4"
    >
      <div className="row">
        <div className="col-3">{AdminLeftSide()}</div>

        <div className="col-9">{AdminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
