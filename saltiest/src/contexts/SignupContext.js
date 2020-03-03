import React, { useReducer, createContext } from 'react';
import { signupReducer } from '../reducers/signupReducer';

export const SignupContext = createContext();

export default function SignupProvider(props) {
    // Setting initial state with the dispatch function to communicate with our reducer & context globally.
    const [initState, dispatch] = useReducer(signupReducer, {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
    });
    return (
        <SignupContext.Provider value={ { initState, dispatch } }>
            {props.children}
        </SignupContext.Provider>
    )
}