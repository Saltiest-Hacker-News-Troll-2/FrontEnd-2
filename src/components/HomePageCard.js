import React from "react";
import styled from 'styled-components';

const HomePageDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const CharacterCard = props => {
    
    return (
        
        <HomePageDiv className = "HomePageCard" key>
        <button>Favorite</button>
        <h2>Username: {props.name}</h2>
        <p>Rating: {props.rating}</p>
        <p>Comment: {props.comment}</p>
        </HomePageDiv>
    )
}
export default CharacterCard;