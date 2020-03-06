import React from 'react';
import {
  Link
} from "react-router-dom";
import styled from 'styled-components';

const HeaderDiv = styled.div`
    display: flex;
    background-color: #FA7921;
`

const HeaderUL = styled.ul`
    display: flex;
    text-decoration: none;
    flex-basis: 100%;
    justify-content: flex-end;
`

const CuteButton = styled.button`
    background-color: #FDE74C;
    color: #5BC0EB;
    width: 120px;
    font-size: 1.4rem;
    margin-right: 5%;
`

const StyledH1 = styled.h1`
    color: white;
    margin-left: 95%;
`

export default function Header(props){
    const token = window.localStorage.getItem('token');

    const handleClick = e => {
        if(token){
            window.localStorage.removeItem('token');
        }
    }
    return (
        <HeaderDiv className="header">
            <div className="headerText">
                <StyledH1>TrollFindr</StyledH1>
            </div>
        <HeaderUL>
            {/* <Link to="/HomePage"><CuteButton>Home</CuteButton></Link> */}
            {!token ? <Link to="/Login"><CuteButton>Login</CuteButton></Link> : <Link to="/Login"><CuteButton onClick={handleClick}>Log out</CuteButton></Link>}
            <Link to="/Signup"><CuteButton>Signup</CuteButton></Link>
            {token ? <Link to={`/Search`}><CuteButton>Search</CuteButton></Link> : alert('Please log in to use this feature!')}
        </HeaderUL>
        </HeaderDiv>
    )
}