import React, {useState, useEffect, useReducer} from "react";
import HomepageCard from "./HomePageCard";
import Favorite from "./Favorite";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from 'styled-components';
import {postReducer, initialState} from '../reducers/postReducer';

const CuteButton = styled.button`
    background-color: #FDE74C;
    color: #5BC0EB;
    width: 200px;
    font-size: 1.4rem;
    margin-right: 5%;
    float: right;
`
const Stt = styled.form`
    display: flex;
    justify-content: center;
`;

export default function HomePage(props) {
    const [data, setData] = useState([]);
    const [state, dispatch] = useReducer(postReducer, initialState);

    useEffect (() => {
        axiosWithAuth()
            .get('/api/comments?limit=10&offset=1')
            .then(res=>{
               setData(res.data)
            })
            .catch(err=>console.log(err))
    }, []);

    const handleClick = e => {
        props.history.push(`/HomePage/editpassword/${props.match.params.id}`)
    }

    const addCommentsData = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/comments', state)
            .then(res=>{
                dispatch({type: 'POST'})
                console.log(res.data)
            })
            .catch(err=>console.log(err))
    }

    return (
        <div className="HomepageCard">
            <Stt onSubmit={addCommentsData}>
                <input type="text" name="text" placeholder="Enter a Comment" value={state.text} onChange={e=>dispatch({type: 'FORM', field: 'text', value: e.target.value})} required/>
                <CuteButton type="submit">Post Comment</CuteButton>
            </Stt>
                <CuteButton onClick={handleClick}>Edit Password</CuteButton>
            {data.map(dat=>(
                <HomepageCard key={dat.id} data={dat} />
            ))}          
        </div>
    );
}
