import React from 'react';
import {
  Link
} from "react-router-dom";

export default function Header(){
    return (
        <div>
        <h1>Header</h1>
        <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/homepage">Home</Link></li>
        </ul>
        </div>
    )
}