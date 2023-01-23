import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

    const [token, setToken] = useState({
        token: ''
    });

    const [name, setName] = useState({
        name: ''
    });

    const [id, setId] = useState({
        id: ''
    });

    return(
        <AuthContext.Provider 
            value={
                { 
                    token, setToken, 
                    name, setName,
                    id, setId
                }
            }
        >
            {props.children}
        </AuthContext.Provider>
    );
}