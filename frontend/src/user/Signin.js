import React from 'react'
import Base from '../core/Base'

function Signin() {

    const signInForm = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <form action="" className='mb-5'>
                <div className="form-group mb-2">
                  <label className="text-light mb-2">Email</label>
                  <input className="form-control" type="Email" />
                </div>
                <div className="form-group mb-4">
                  <label className="text-light mb-2">password</label>
                  <input className="form-control" type="password" />
                </div>
                <button className="btn btn-success btn-block" type="submit">
                  SignIn
                </button>
              </form>
            </div>
          </div>
        );
      };

  return (
    <Base title='Signin Page'>
        {signInForm()}
    </Base>
  )
}

export default Signin