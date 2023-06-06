import React from 'react'
import {Routes, Route} from "react-router-dom"


import Home from "./core/Home.js"
import Signup from './user/Signup.js'
import Signin from './user/Signin.js'


function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
    </Routes>
  )
};

export default AppRoutes