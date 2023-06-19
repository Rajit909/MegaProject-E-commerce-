import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './core/Home.js';
import Signup from './user/Signup.js';
import Signin from './user/Signin.js';

import UserDashBoard from './user/UserDashBoard';
import AdminDashBoard from './user/AdminDashBoard';

import { isAuthenticated } from './auth/helper/index';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/signin" exact element={<Signin />} />
      <Route exact path='/user/dashBoard' element = { isAuthenticated ? <UserDashBoard/> : <Navigate to="/signin" />} />
      <Route exact path='/admin/dashBoard' element = { isAuthenticated ? <AdminDashBoard/> : <Navigate to="/signin" />} />
      

    </Routes>
  );
}

export default AppRoutes;
