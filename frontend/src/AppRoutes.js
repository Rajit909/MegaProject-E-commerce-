import React from 'react'
import {Routes, Route} from "react-router-dom"


import Home from "./core/Home.js"
import Signup from './user/Signup.js'
import Signin from './user/Signin.js'

import AdminRoute from './auth/helper/AdminRoutes'
import PrivateRoute from './auth/helper/PrivateRoutes'

import UserDashBoard from './user/UserDashBoard'
import AdminDashBoard from './user/AdminDashBoard'

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <PrivateRoute path='/user/dashboard' exact component={UserDashBoard} />
      <AdminRoute path='/user/dashboard' exact component={AdminDashBoard} />

    </Routes>
  )
};

export default AppRoutes