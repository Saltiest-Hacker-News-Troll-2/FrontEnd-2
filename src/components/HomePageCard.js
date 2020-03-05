import React from "react";
import styled from 'styled-components';

const HomePageDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const CharacterCard = ({ data }) => {
    console.log(data)
    return (
        <HomePageDiv className = "HomePageCard" key>
        <button>Favorite</button>
        </HomePageDiv>
    )
}
export default CharacterCard;