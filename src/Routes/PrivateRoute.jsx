import React, { useContext } from 'react';
import { AuthContext } from '../Providers/authProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading}= useContext(AuthContext)

    if(loading) return <progress className="progress w-56"></progress>
    else if(user) return children
    else return <Navigate to="/login">Login</Navigate>
};

export default PrivateRoute;