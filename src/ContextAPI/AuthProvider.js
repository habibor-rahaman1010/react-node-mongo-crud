import React, { createContext } from 'react';
import API from '../API/API';

export const myContextAPI = createContext();
const AuthProvider = ({ children }) => {

    const allContext = {
        API
    };

    return (
        <myContextAPI.Provider value={allContext}>
            {children}
        </myContextAPI.Provider>
    );
};

export default AuthProvider;