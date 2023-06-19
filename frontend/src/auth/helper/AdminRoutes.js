import React from 'react'

import { Routes ,Route, useNavigate } from 'react-router-dom';

import {isAuthenticated} from "../helper/index.js"


const AdminRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();

    return (
        <Routes>

        <Route
            {...rest}
            render={ props => 
                isAuthenticated() && isAuthenticated().user.role === 1 ? (
                    <Component {...props}/>
                    ) : (
                        navigate('/signin', { state: { from: props.location } })
                        )
                    }
                    />
</Routes>
    )
}

export default AdminRoute