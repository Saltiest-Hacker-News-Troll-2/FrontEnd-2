import React, {useState} from 'react' 
import { axiosWithAuth } from '../utils/axiosWithAuth'

export default function UpdatePassword(props) {
    const [pass, setPass] = useState({
        password: ''
    })

    const handleChange = e => {
        setPass({
            ...pass,
            [e.target.name]: e.target.value
        });
    }

    console.log(props)

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/user/${props.match.params.id}`, pass)
            .then(res=>{
                alert('Password Changed Successfully!');
            })
            .catch(err=>console.log(err))
    }

    console.log(props)

    return (
        <div>
            <a href={`/HomePage/${props.match.params.id}`}>Back to Dashboard</a>
            <form onSubmit={handleSubmit}>
                <input type="text" name="password" placeholder="Enter a new password" onChange={handleChange} />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}
