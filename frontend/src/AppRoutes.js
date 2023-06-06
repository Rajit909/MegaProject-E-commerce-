import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom"

import Home from "./core/Home.js"

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
  )
}

export default AppRoutes