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

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/user/${props.match.params.id}`, pass)
            .then(res=>{
                alert('Password Changed Successfully!');
                console.log(res)
            })
            .catch(err=>console.log(err))
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <a className="nav-link" href={`/dashboard/${props.match.params.id}`}>Back to Dashboard</a>
            <form className="form-group d-flex" onSubmit={handleSubmit}>
                <input type="text" name="password" className="form-control" placeholder="Enter a new password" onChange={handleChange} />
                <button type="submit" className="btn btn-danger">Update</button>
            </form>
        </div>
    )
}
