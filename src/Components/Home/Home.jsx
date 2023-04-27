import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/authProviders';

const Home = () => {
    const {user}= useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h2>Welcome to Home {user && <span>{user.displayName}</span>}</h2>
        </div>
    );
};

export default Home;