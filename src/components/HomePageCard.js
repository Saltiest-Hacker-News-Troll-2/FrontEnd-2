import React from "react";
import styled from 'styled-components';

const HomePageDiv = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin-left: 12%;
width: 75%;
`

const CharacterCard = ({ data }) => {
    console.log(data)
    return (
        <HomePageDiv>
            <h1>Posted by: {data.By}</h1>
            <h3>Salty Score: {data.Score}%</h3>
            <h4>{data.Text}</h4>
        </HomePageDiv>
    )
}
export default CharacterCard;