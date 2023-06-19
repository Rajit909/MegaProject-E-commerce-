import React from 'react'
import {
    Route,
    redirect
} from 'react-router-dom'


import {isAuthenticated} from "../helper/index"


const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={ props => 
                isAuthenticated() ? (
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

export default PrivateRoute