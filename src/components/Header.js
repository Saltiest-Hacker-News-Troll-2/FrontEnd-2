import React from 'react';

export default function Header(){
    const token = window.localStorage.getItem('token');

    const handleClick = e => {
        if(token){
            window.localStorage.removeItem('token');
        }
    }

    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-primary mb-4">
            
            <h1 className="text-primary mr-3">TrollFindr</h1>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active" data-toggle="tooltip" data-placement="bottom" title="Go To Dashboard">
                    <a className="nav-link" href="/dashboard">Dashboard</a>
                </li>
                {token ? 
                <li className="nav-item active" data-toggle="tooltip" data-placement="bottom" title="Go To Sign Up">
                    <a className="nav-link" href="/login" onClick={handleClick}>Log Out</a>
                </li>
                    :
                <li className="nav-item active" data-toggle="tooltip" data-placement="bottom" title="Go To Sign Up">
                    <a className="nav-link" href="/login">Log In</a>
                </li>
                }
                <li className="nav-item active" data-toggle="tooltip" data-placement="bottom" title="Go To Log In">
                    <a className="nav-link" href="/signup">Sign Up</a>
                </li>
            </ul>
        </div>
    )
}