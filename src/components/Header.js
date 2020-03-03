import React from 'react';

export default function Header(){
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-primary mb-4">
            
            <h1 className="text-primary mr-3">TrollFindr</h1>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active" data-toggle="tooltip" data-placement="bottom" title="Go To Dashboard">
                    <a className="nav-link" href="/dashboard">Dashboard</a>
                </li>

                <li className="nav-item active" data-toggle="tooltip" data-placement="bottom" title="Go To Log In">
                    <a className="nav-link" href="/">Login</a>
                </li>

                <li className="nav-item active" data-toggle="tooltip" data-placement="bottom" title="Go To Sign Up">
                    <a className="nav-link" href="/signup">Sign Up</a>
                </li>
            </ul>
        </div>
    )
}