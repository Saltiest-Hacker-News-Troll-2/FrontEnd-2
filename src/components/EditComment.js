import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';


export default function EditComment(props) {
    useEffect(()=>{
        getComment();
    }, [])

    const [comment, setComment] = useState([]);

    const handlePost = e => {
        e.preventDefault();
        axiosWithAuth()
            .delete(`/post/${comment.id}`, comment)
            .then(res=>{
                alert('deleted')
                console.log(res)
            })
            .catch(err=>console.log(err))
    }

    const getComment = () => {
        axiosWithAuth()
            .get(`/comments/${props.match.params.id}`)
            .then(res=>{
                setComment(res.data[0])
                console.log(res.data[0])
            })
            .catch(err=>console.log(err))
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <div>
                <div>
                    <h1><span className="text-success">Posted By: </span>{comment.by}</h1>
                    <h2><span className="text-success">Comment Text: </span>{comment.text}</h2>
                </div>
            </div>
            <div>
                <form onSubmit={handlePost}>
                    <button type="submit" className="btn btn-danger">Delete</button>
                </form>
            </div>
        </div>
    )
}
