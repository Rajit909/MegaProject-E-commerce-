import React, { useState } from 'react'
import Base from '../core/Base'
import { signin, isAuthenticated, authenticate} from "../auth/helper/index.js"
import {Link, redirect} from "react-router-dom"


function Signin() {

  
      const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        didRedirect: false
      })
    
    const {email, password, error, loading, didRedirect } = values

    const {user} = isAuthenticated();

    const handleChange = (name) => (event) => {
      setValues({ ...values, error: false, [name]: event.target.value });
    };

    const onSubmit = event => {
      event.preventDefault();
      setValues({...values, error: false, loading: true})
      signin({email, password})
        .then(data => {
          if (data.error) {
            setValues({...values, error: data.error, loading: false})
          }else{
            authenticate(data, () => {
              setValues({
                ...values,
                didRedirect: true
              })
            })
          }
        })
        .catch(console.log("SignIn request failed"))
    }

    const performRedirect = () => {
      
      if (didRedirect) {
        if (user && user.role === 1) {
          return <p>Redirect to Admin</p>
        }else{
          return <p>Redirect to User Dashboard</p>
        }
      }
      if (isAuthenticated) {
        return <redirect to="/" />
      }
    }

    const signInForm = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <form action="" className='mb-5'>
                <div className="form-group mb-2">
                  <label className="text-light mb-2">Email</label>
                  <input onChange={handleChange("email")} value={email} className="form-control" type="Email" />
                </div>
                <div className="form-group mb-4">
                  <label className="text-light mb-2">password</label>
                  <input onChange={handleChange("password")} value={password} className="form-control" type="password" />
                </div>
                <button onClick={onSubmit} className="btn btn-success btn-block" type="submit">
                  SignIn
                </button>
              </form>
            </div>
          </div>
        );
      };

      const loadingMessage = () => {
        return (
          loading && (
            <div className="alert alert-info">
              <h2>Loading...</h2>
            </div>
          )
        );
      };
    
      const errorMessage = () => {
        return(
          <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
        <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
          {error}
        </div>
        </div>
        </div>
        )
      }
  return (
    <Base title='Login User'>
        {loadingMessage()}
        {errorMessage()}
        {signInForm()}
        {performRedirect()}
    <p className="text-white text-center">{JSON.stringify(values)}</p>

    </Base>
  )
}

export default Signin