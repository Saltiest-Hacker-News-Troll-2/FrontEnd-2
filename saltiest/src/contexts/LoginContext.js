import React, { useReducer, createContext } from 'react';
import { loginReducer } from '../reducers/loginReducer';

export const LoginContext = createContext();

export default function LoginProvider(props) {
    // Setting initial state with the dispatch function to communicate with our reducer & context globally.
    const [initialState, dispatch] = useReducer(loginReducer, {
        username: '',
        password: '',
        loading: false,
        loggedin: false
    });
    return (
        <LoginContext.Provider value={ { initialState, dispatch } }>
            {props.children}
        </LoginContext.Provider>
    )
}