import React, { useReducer, useEffect, useState } from "react";
import { initialState, postReducer } from '../reducers/postReducer';
import { axiosWithAuth } from '../utils/axiosWithAuth';  

export default function DashBoard(props) {
    const [state, dispatch] = useReducer(postReducer, initialState);
    const [comments, setComments] = useState([]);
    
    const handleClick = e => {
        e.preventDefault();
        props.history.push(`/dashboard/editpassword/${props.match.params.id}`);
    }

    useEffect(() => {
        getCommentsData();
    }, [])


    const getCommentsData = () => {
        axiosWithAuth()
            .get('/comments')
            .then(res=>setComments(res.data))
            .catch(err=>console.log(err))
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
        <div className="d-flex flex-column align-items-center justify-content-around">
            <h1 className="border-bottom border-dark">User Dashboard</h1>
            <div className="d-flex m-3 align-items-top">
                <div className="m-5">
                    <h3>User Comments</h3>
                    <div className="border border-dark rounded p-2 m-2">
                        {comments.map(comment=>(
                            <div key={comment.id}>
                                <h4 className="border-bottom border-dark pb-1">{comment.by}: </h4>
                                {comment.by === props.match.params.id ? <p>{comment.text} <button className="btn btn-danger rounded float-right">X</button></p> : <p>{comment.text}</p>}
                            </div>
                        ))}
                    </div>
                    <form onSubmit={addCommentsData} className="d-flex justify-content-between">
                        <input 
                        type="text" 
                        name="text" 
                        placeholder="Enter a Comment!" 
                        value={state.text}
                        onChange={e=>dispatch({type: 'FORM', field: 'text', value: e.target.value})}
                        />
                        <button className="btn btn-success pl-4 pr-4">Post</button>
                    </form>
                </div>

                <div className="m-5">
                    <h3>User Tools</h3>
                    <form onSubmit={handleClick}>
                        <button type="submit" className="btn btn-primary">Change Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
