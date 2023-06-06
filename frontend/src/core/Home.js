import React from 'react'
import "../styles.css"
import { API } from '../backend'
import Base from './Base'

function Home() {
  console.log("API IS", API)
  return (
    <Base title='Home Page' description='Home page description'>
        <div className="row">
          <div className="col-4">
            <button type="submit" className='btn btn-success'>test</button>
          </div>
          <div className="col-4">
            <button type="submit" className='btn btn-success'>test</button>
          </div>
          <div className="col-4">
            <button type="submit" className='btn btn-success'>test</button>
          </div>
        </div>
    </Base>
  )
}

export default Home