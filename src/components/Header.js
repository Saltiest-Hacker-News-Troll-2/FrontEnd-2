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

export default function Header(){
    const token = window.localStorage.getItem('token');
    return (
        <HeaderDiv className="header">
            <div className="headerText">
                <StyledH1>TrollFindr</StyledH1>
            </div>
        <HeaderUL>
            <Link to="/HomePage"><CuteButton>Home</CuteButton></Link>
            <Link to="/Login"><CuteButton>Login</CuteButton></Link>
            <Link to="/Signup"><CuteButton>Signup</CuteButton></Link>
            {token ?
                <Link to="/HomePage/"><CuteButton>Password</CuteButton></Link>
                :
                <></>
            }
        </HeaderUL>
        </HeaderDiv>
    )
}