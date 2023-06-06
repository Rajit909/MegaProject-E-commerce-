import React from 'react'
import "../styles.css"
import { API } from '../backend'


function Home() {
  console.log("API IS", API)
  return (
    <div className='text-light'>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home