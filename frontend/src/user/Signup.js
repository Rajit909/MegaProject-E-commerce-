import React, { useState } from "react";
import Base from "../core/Base";
import signup from "../auth/helper/index.js"

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({...values, error: false})
    Signup({name,email, password})
    .then(data => {
      if (data.error) {
        setValues({...values, error: data.error, success: false})
      }else{
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true
        });
      }
    })
    .catch(console.log("Errors in signup"))
  }

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form action="">
            <div className="form-group mb-2">
              <label className="text-light mb-2">Name</label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
              />
            </div>
            <div className="form-group mb-2">
              <label className="text-light mb-2">Email</label>
              <input className="form-control"
              onChange={handleChange("email")}
              type="Email" />
            </div>
            <div className="form-group mb-4">
              <label className="text-light mb-2">password</label>
              <input className="form-control" 
              onChange={handleChange("password")}
              type="password" />
            </div>
            <button className="btn btn-success btn-block" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return <Base title="Signup page">{signUpForm()}</Base>;
}

export default Signup;
