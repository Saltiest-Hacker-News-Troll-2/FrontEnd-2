import React from 'react';

export default function Header(props){
    const token = window.localStorage.getItem('token');

    const handleClick = e => {
        if(token){
            window.localStorage.removeItem('token');
        }
    }

    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-primary mb-4">
            
            <h1 className="text-success mr-3">TrollFindr User Dashboard</h1>
            <ul className="navbar-nav mr-auto">
                {/* {token ? 
                <li className="nav-item active" data-toggle="tooltip" data-placement="bottom" title="Go To Dashboard">
                    <a className="nav-link text-primary" href={`/dashboard`}>Dashboard</a>
                </li>
                    :
                alert('User Not Logged In')
                } */}
                {token ? 
                <li className="nav-item active" data-toggle="tooltip" data-placement="bottom" title="Log Out">
                    <a className="nav-link text-primary" href="/login" onClick={handleClick}>Log Out</a>
                </li>
                    :
                <li className="nav-item active" data-toggle="tooltip" data-placement="bottom" title="Go To Log In">
                    <a className="nav-link text-primary" href="/login">Log In</a>
                </li>
                }
                <li className="nav-item active" data-toggle="tooltip" data-placement="bottom" title="Go To Sign Up">
                    <a className="nav-link text-primary" href="/signup">Sign Up</a>
                </li>
            </ul>
        </div>
    )
}