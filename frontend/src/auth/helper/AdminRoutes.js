import React from 'react'
import {
    Route,
    redirect
} from 'react-router-dom'


import {isAuthenticated} from "../helper/index.js"


const AdminRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={ props => 
                isAuthenticated() && isAuthenticated().user.role === 1 ? (
                <Component {...props}/>
                ) : (
                    <redirect
                        to={{
                            pathname: "/signin",
                            state: { from: props.location}
                        }}
                    />
                )
        }
        />
    )
}

export default AdminRoute